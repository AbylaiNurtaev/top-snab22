"use client";

import { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import styles from './product.module.css';
import { useCart } from "@/context/CartContext";

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

export default function ProductClient({ product }) {
  const { addToCart, cart } = useCart();
  const [selectedImage, setSelectedImage] = useState(0);
  const [quantity, setQuantity] = useState(1);

  const handleQuantityChange = (newQuantity) => {
    if (newQuantity >= 1 && newQuantity <= 10) {
      setQuantity(newQuantity);
    }
  };

  const handleAddToCart = () => {
    if (product) {
      addToCart(product, quantity);
    }
  };

  return (
    <main className={styles.main}>
      <div className={styles.container}>
        <div className={styles.breadcrumbs}>
          <Link href="/" className={styles.breadcrumbLink}>Главная</Link>
          <span className={styles.separator}>/</span>
          <Link href="/catalog" className={styles.breadcrumbLink}>Каталог</Link>
          <span className={styles.separator}>/</span>
          <span className={styles.current}>{product.name}</span>
        </div>

        <div className={styles.product}>
          <div className={styles.gallery}>
            <div className={styles.mainImage}>
              {product.images && product.images.length > 0 ? (
                <Image
                  src={product.images[selectedImage]}
                  alt={product.name}
                  width={600}
                  height={600}
                  className={styles.image}
                />
              ) : (
                <div className={styles.noImage}>
                  Нет изображения
                </div>
              )}
            </div>
            
            {product.images && product.images.length > 1 && (
              <div className={styles.thumbnails}>
                {product.images.map((image, index) => (
                  <button
                    key={index}
                    className={`${styles.thumbnail} ${selectedImage === index ? styles.active : ''}`}
                    onClick={() => setSelectedImage(index)}
                  >
                    <Image
                      src={image}
                      alt={`${product.name} - изображение ${index + 1}`}
                      width={100}
                      height={100}
                      className={styles.thumbnailImage}
                    />
                  </button>
                ))}
              </div>
            )}
          </div>

          <div className={styles.info}>
            <h1 className={styles.title}>{product.name}</h1>
            
            <div className={styles.category}>
              Категория: {product.category?.name || 'Без категории'}
            </div>

            <div className={styles.price}>
              {new Intl.NumberFormat('ru-RU', {
                style: 'currency',
                currency: 'RUB'
              }).format(product.price)}
            </div>

            <div className={styles.stock}>
              <span className={`${styles.stockStatus} ${product.inStock ? styles.inStock : styles.outOfStock}`}>
                {product.inStock ? 'В наличии' : 'Нет в наличии'}
              </span>
            </div>

            <div className={styles.description}>
              <h2 className={styles.descriptionTitle}>Описание</h2>
              <div 
                className={styles.descriptionContent}
                dangerouslySetInnerHTML={{ 
                  __html: convertDescriptionToHtml(product.description) 
                }}
              />
            </div>

            {product.technicalProperties && product.technicalProperties.length > 0 && (
              <TechnicalProperties properties={product.technicalProperties} />
            )}

            {product.inStock && (
              <div className={styles.actions}>
                <div className={styles.quantity}>
                  <button
                    className={styles.quantityButton}
                    onClick={() => handleQuantityChange(quantity - 1)}
                    disabled={quantity <= 1}
                  >
                    -
                  </button>
                  <input
                    type="number"
                    min="1"
                    max="10"
                    value={quantity}
                    onChange={(e) => handleQuantityChange(parseInt(e.target.value) || 1)}
                    className={styles.quantityInput}
                  />
                  <button
                    className={styles.quantityButton}
                    onClick={() => handleQuantityChange(quantity + 1)}
                    disabled={quantity >= 10}
                  >
                    +
                  </button>
                </div>

                <button
                  className={styles.addToCartButton}
                  onClick={handleAddToCart}
                >
                  {cart.find(item => item._id.toString() === product._id.toString())
                    ? 'В корзине'
                    : 'Добавить в корзину'}
                </button>
              </div>
            )}
          </div>
        </div>
      </div>
    </main>
  );
} 