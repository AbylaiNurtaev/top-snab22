import { client } from '@/lib/db';
import { ObjectId } from 'mongodb';
import { NextResponse } from 'next/server';
import slugify from 'slugify';

export async function GET(request, context) {
  try {
    const { params } = context;
    const { slug } = params;

    await client.connect();
    const database = client.db('top-snab');
    const collection = database.collection('products');

    const product = await collection.findOne({ slug: slug });

    if (!product) {
      return new Response(JSON.stringify({ error: 'Product not found' }), {
        status: 404,
        headers: { 'Content-Type': 'application/json' },
      });
    }

    return new Response(JSON.stringify(product), {
      status: 200,
      headers: { 'Content-Type': 'application/json' },
    });

  } catch (error) {
    console.error('Error fetching product:', error);
    return new Response(JSON.stringify({ error: 'Internal Server Error' }), {
      status: 500,
      headers: { 'Content-Type': 'application/json' },
    });
  } finally {
    await client.close();
  }
}

export async function PUT(request, context) {
  try {
    const { params } = context;
    const { slug } = params;
    const data = await request.json();

    // Создаем новый slug только если изменилось название
    const newSlug = data.name ? slugify(data.name, {
      lower: true,
      strict: true
    }) : slug;

    await client.connect();
    const database = client.db('top-snab');
    const collection = database.collection('products');

    // Подготавливаем данные для обновления
    const updateData = {
      ...data,
      slug: newSlug,
      technicalProperties: data.technicalProperties || [],
      updatedAt: new Date()
    };

    const result = await collection.findOneAndUpdate(
      { slug },
      { $set: updateData },
      { returnDocument: 'after' }
    );

    if (!result) {
      return new Response(JSON.stringify({ error: 'Product not found' }), {
        status: 404,
        headers: { 'Content-Type': 'application/json' },
      });
    }

    return new Response(JSON.stringify(result), {
      status: 200,
      headers: { 'Content-Type': 'application/json' },
    });

  } catch (error) {
    console.error('Error updating product:', error);
    return new Response(JSON.stringify({ error: 'Internal Server Error' }), {
      status: 500,
      headers: { 'Content-Type': 'application/json' },
    });
  } finally {
    await client.close();
  }
}

export async function DELETE(request, context) {
  try {
    const { params } = context;
    const { slug } = params;

    await client.connect();
    const database = client.db('top-snab');
    const collection = database.collection('products');

    const result = await collection.deleteOne({ slug });

    if (result.deletedCount === 0) {
      return new Response(JSON.stringify({ error: 'Product not found' }), {
        status: 404,
        headers: { 'Content-Type': 'application/json' },
      });
    }

    return new Response(JSON.stringify({ message: 'Product deleted successfully' }), {
      status: 200,
      headers: { 'Content-Type': 'application/json' },
    });

  } catch (error) {
    console.error('Error deleting product:', error);
    return new Response(JSON.stringify({ error: 'Internal Server Error' }), {
      status: 500,
      headers: { 'Content-Type': 'application/json' },
    });
  } finally {
    await client.close();
  }
} 