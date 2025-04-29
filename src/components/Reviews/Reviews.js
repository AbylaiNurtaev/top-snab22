"use client";

import React, { useState } from 'react';
import styles from './Reviews.module.css';
import { FaStar, FaQuoteLeft, FaQuoteRight } from 'react-icons/fa';
import Link from 'next/link';

const Reviews = () => {
  const [showForm, setShowForm] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    rating: 5,
    comment: ''
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Здесь будет логика отправки отзыва
    console.log('Отправка отзыва:', formData);
    setShowForm(false);
    setFormData({
      name: '',
      email: '',
      rating: 5,
      comment: ''
    });
    alert('Спасибо за ваш отзыв! Он будет опубликован после модерации.');
  };

  return (
    <section className={styles.section}>
      <div className={styles.container}>
        <h2 className={styles.title}>Отзывы наших клиентов</h2>
        
        <div className={styles.introContainer}>
          <p className={styles.intro}>
            Отзывы наших клиентов — это отражение нашей работы. Это обратная связь от тех, кто ежедневно пользуется нашей продукцией, реализует с нами проекты, рекомендует нас коллегам и партнёрам. Мы ценим доверие каждого и стремимся соответствовать ожиданиям на каждом этапе — от производства до постпродажного сопровождения.
          </p>
          
          <p className={styles.ozonLink}>
            Для более <Link href="https://www.ozon.ru/seller/pexashop-1293495/?miniapp=seller_1293495" target="_blank" rel="noopener noreferrer">подробной информации</Link> можно перейти по ссылке.
          </p>
        </div>
        
        <div className={styles.reviewsGrid}>
          <div className={styles.reviewCard}>
            <div className={styles.quoteIcon}>
              <FaQuoteLeft />
            </div>
            <div className={styles.rating}>
              {[...Array(5)].map((_, i) => (
                <FaStar key={i} className={styles.star} />
              ))}
            </div>
            <p className={styles.reviewText}>
              "Отличное качество продукции и профессиональный подход к клиентам. Заказывал комплект для теплого пола, все доставили в срок, с подробной инструкцией по установке. Работает уже второй год без нареканий."
            </p>
            <div className={styles.reviewAuthor}>
              <div className={styles.authorAvatar}>А</div>
              <div className={styles.authorInfo}>
                <p className={styles.authorName}>Александр Петров</p>
                <p className={styles.authorTitle}>Частный застройщик</p>
              </div>
            </div>
          </div>
          
          <div className={styles.reviewCard}>
            <div className={styles.quoteIcon}>
              <FaQuoteLeft />
            </div>
            <div className={styles.rating}>
              {[...Array(5)].map((_, i) => (
                <FaStar key={i} className={styles.star} />
              ))}
            </div>
            <p className={styles.reviewText}>
              "Работаем с компанией уже более 3 лет. Всегда оперативные поставки, гибкие условия и отличное качество продукции. Техническая поддержка всегда на связи и помогает решить любые вопросы."
            </p>
            <div className={styles.reviewAuthor}>
              <div className={styles.authorAvatar}>М</div>
              <div className={styles.authorInfo}>
                <p className={styles.authorName}>Мария Иванова</p>
                <p className={styles.authorTitle}>Директор строительной компании</p>
              </div>
            </div>
          </div>
          
          <div className={styles.reviewCard}>
            <div className={styles.quoteIcon}>
              <FaQuoteLeft />
            </div>
            <div className={styles.rating}>
              {[...Array(5)].map((_, i) => (
                <FaStar key={i} className={styles.star} />
              ))}
            </div>
            <p className={styles.reviewText}>
              "Установил теплый пол в ванной комнате. Монтаж был простым, все материалы качественные. Особенно понравилось, что можно было заказать полный комплект со всеми необходимыми компонентами. Экономия времени и нервов."
            </p>
            <div className={styles.reviewAuthor}>
              <div className={styles.authorAvatar}>Д</div>
              <div className={styles.authorInfo}>
                <p className={styles.authorName}>Дмитрий Соколов</p>
                <p className={styles.authorTitle}>Владелец квартиры</p>
              </div>
            </div>
          </div>
        </div>
        
        <div className={styles.reviewFormSection}>
          <h3 className={styles.formTitle}>Оставить отзыв</h3>
          <p className={styles.formDescription}>
            Отзывы клиентов и партнёров — важнейший показатель эффективности нашей работы и качества продукции. Мы благодарны всем, кто делится мнением, помогает нам развиваться и подтверждает на практике: Warmm — это тепло, которому можно доверять. Если вы уже работали с нами — будем признательны за ваш отзыв. Ваш опыт важен для нас и для тех, кто только делает выбор.
          </p>
          
          {!showForm ? (
            <button 
              className={styles.showFormButton}
              onClick={() => setShowForm(true)}
            >
              Написать отзыв
            </button>
          ) : (
            <form className={styles.reviewForm} onSubmit={handleSubmit}>
              <div className={styles.formGroup}>
                <label htmlFor="name">Ваше имя</label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleInputChange}
                  required
                />
              </div>
              
              <div className={styles.formGroup}>
                <label htmlFor="email">Email</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  required
                />
              </div>
              
              <div className={styles.formGroup}>
                <label>Оценка</label>
                <div className={styles.ratingInput}>
                  {[1, 2, 3, 4, 5].map((star) => (
                    <button
                      key={star}
                      type="button"
                      className={`${styles.ratingStar} ${formData.rating >= star ? styles.active : ''}`}
                      onClick={() => setFormData({...formData, rating: star})}
                    >
                      <FaStar />
                    </button>
                  ))}
                </div>
              </div>
              
              <div className={styles.formGroup}>
                <label htmlFor="comment">Ваш отзыв</label>
                <textarea
                  id="comment"
                  name="comment"
                  value={formData.comment}
                  onChange={handleInputChange}
                  rows="5"
                  required
                ></textarea>
              </div>
              
              <div className={styles.formActions}>
                <button 
                  type="button" 
                  className={styles.cancelButton}
                  onClick={() => setShowForm(false)}
                >
                  Отмена
                </button>
                <button 
                  type="submit" 
                  className={styles.submitButton}
                >
                  Отправить отзыв
                </button>
              </div>
            </form>
          )}
        </div>
      </div>
    </section>
  );
};

export default Reviews; 