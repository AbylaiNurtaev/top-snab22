"use client";

import { useState, useEffect } from 'react';
import { useParams } from 'next/navigation';
import Image from 'next/image';
import Link from 'next/link';
import styles from './product.module.css';
import Header from '@/components/Header/Header';
import Footer from '@/components/Footer/Footer.jsx';
import { useCart } from "@/context/CartContext";
import ProductClient from './ProductClient';

// Функция для преобразования JSON-описания в HTML
const convertDescriptionToHtml = (description) => {
  if (!description) return 'Описание отсутствует';
  
  try {
    // Пробуем распарсить как JSON
    const rawContent = JSON.parse(description);
    
    // Преобразуем rawContent в HTML
    let htmlContent = '';
    rawContent.blocks.forEach(block => {
      let text = block.text;
      
      // Применяем стили
      block.inlineStyleRanges.forEach(style => {
        const start = style.offset;
        const end = start + style.length;
        const styledText = text.substring(start, end);
        
        switch (style.style) {
          case 'BOLD':
            text = text.substring(0, start) + `<strong>${styledText}</strong>` + text.substring(end);
            break;
          case 'ITALIC':
            text = text.substring(0, start) + `<em>${styledText}</em>` + text.substring(end);
            break;
          case 'UNDERLINE':
            text = text.substring(0, start) + `<u>${styledText}</u>` + text.substring(end);
            break;
          case 'STRIKETHROUGH':
            text = text.substring(0, start) + `<s>${styledText}</s>` + text.substring(end);
            break;
          default:
            break;
        }
      });
      
      // Добавляем параграф для каждого блока
      htmlContent += `<p>${text}</p>`;
    });
    
    return htmlContent;
  } catch (e) {
    // Если не JSON, обрабатываем как обычный текст с переносами строк
    return description.split('\n').map(line => `<p>${line}</p>`).join('');
  }
};

// Компонент для отображения технических свойств
const TechnicalProperties = ({ properties }) => {
  if (!properties?.length) return null;

  return (
    <div className={styles.technicalProperties}>
      <h2 className={styles.sectionTitle}>Технические свойства</h2>
      <div className={styles.propertiesList}>
        {properties.map((prop, index) => (
          <div key={index} className={styles.propertyRow}>
            <div className={styles.propertyKey}>
              {prop.key}
              <span className={styles.dotLine}></span>
            </div>
            <div className={styles.propertyValue}>{prop.value}</div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default function ProductPage() {
  const { slug } = useParams();
  const { addToCart, cart } = useCart();
  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchProduct = async () => {
      try {
        const response = await fetch(`/api/products/${slug}`);
        const data = await response.json();
        setProduct(data);
      } catch (error) {
        console.error('Ошибка при загрузке товара:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchProduct();
  }, [slug]);

  if (loading) {
    return (
      <>
        <Header />
        <div className={styles.loading}>
          <div className={styles.loadingSpinner} />
        </div>
        <Footer />
      </>
    );
  }

  if (!product) {
    return (
      <>
        <Header />
        <div className={styles.error}>
          <h1>Товар не найден</h1>
          <Link href="/catalog" className={styles.backLink}>
            Вернуться в каталог
          </Link>
        </div>
        <Footer />
      </>
    );
  }

  return (
    <>
      <Header />
      <ProductClient product={product} />
      <Footer />
    </>
  );
} 