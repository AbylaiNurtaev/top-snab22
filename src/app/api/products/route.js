import { NextResponse } from 'next/server';
import { MongoClient } from 'mongodb';
import slugify from 'slugify';
import { client } from '@/lib/db';

const uri = process.env.MONGODB_URI;
const mongoClient = new MongoClient(uri);

export async function GET(request) {
  try {
    const { searchParams } = new URL(request.url);
    const category = searchParams.get('category');
    const search = searchParams.get('search');
    const page = parseInt(searchParams.get('page')) || 1;
    const limit = parseInt(searchParams.get('limit')) || 12;

    await mongoClient.connect();
    const database = mongoClient.db('top-snab');
    const products = database.collection('products');

    let query = {};
    if (category) {
      query.categoryId = category;
    }
    if (search) {
      query.$or = [
        { name: { $regex: search, $options: 'i' } },
        { description: { $regex: search, $options: 'i' } }
      ];
    }

    const total = await products.countDocuments(query);
    const result = await products
      .find(query)
      .skip((page - 1) * limit)
      .limit(limit)
      .toArray();

    return NextResponse.json({
      products: result,
      total,
      pages: Math.ceil(total / limit),
      currentPage: page
    });
  } catch (error) {
    console.error('Ошибка при получении товаров:', error);
    return NextResponse.json(
      { error: 'Ошибка при получении товаров' },
      { status: 500 }
    );
  } finally {
    await mongoClient.close();
  }
}

export async function POST(request) {
  try {
    const data = await request.json();
    
    if (!data.name || !data.categoryId) {
      return NextResponse.json(
        { error: 'Название и категория товара обязательны' },
        { status: 400 }
      );
    }

    // Создаем slug из названия товара
    const slug = slugify(data.name, {
      lower: true,
      strict: true
    });

    await client.connect();
    const database = client.db('top-snab');
    const collection = database.collection('products');

    // Подготавливаем данные для сохранения
    const productData = {
      ...data,
      slug,
      technicalProperties: data.technicalProperties || [],
      createdAt: new Date(),
      updatedAt: new Date()
    };

    const result = await collection.insertOne(productData);

    return NextResponse.json(result);
  } catch (error) {
    console.error('Ошибка при создании товара:', error);
    return NextResponse.json(
      { error: 'Ошибка при создании товара' },
      { status: 500 }
    );
  } finally {
    await client.close();
  }
} 