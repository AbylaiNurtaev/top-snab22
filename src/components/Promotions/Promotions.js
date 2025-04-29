import React from 'react';
import styles from './Promotions.module.css';
import { FaGift, FaTruck, FaCreditCard } from 'react-icons/fa';

const Promotions = () => {
  return (
    <section className={styles.section}>
      <div className={styles.container}>
        <h2 className={styles.title}>Акции</h2>
        <p className={styles.intro}>
          Компания WARMM всегда стремится сделать комфорт доступнее. Мы ценим доверие наших клиентов и регулярно предлагаем выгодные условия на приобретение оборудования для систем тёплого пола. Ознакомьтесь с нашими текущими акциями — возможно, сейчас самое подходящее время для тёплого обновления!
        </p>
        
        <div className={styles.promotionsGrid}>
          <div className={styles.promotionCard}>
            <div className={styles.iconWrapper}>
              <FaGift className={styles.icon} />
            </div>
            <div className={styles.promotionContent}>
              <h3 className={styles.promotionTitle}>Скидка 10% на полные комплекты тёплого пола</h3>
              <p className={styles.promotionDescription}>
                Приобретайте готовые решения для обогрева — и получайте дополнительную выгоду! Скидка 10% распространяется на полные комплекты оборудования. Это отличная возможность сэкономить без ущерба для качества.
              </p>
              <div className={styles.discountBadge}>-10%</div>
            </div>
          </div>
          
          <div className={styles.promotionCard}>
            <div className={styles.iconWrapper}>
              <FaTruck className={styles.icon} />
            </div>
            <div className={styles.promotionContent}>
              <h3 className={styles.promotionTitle}>Бесплатная доставка при заказе от 50 000 ₽</h3>
              <p className={styles.promotionDescription}>
                Мы берём на себя заботу о доставке. При оформлении заказа на сумму от 50 000 рублей вы получаете бесплатную доставку в любой регион России.
              </p>
              <div className={styles.discountBadge}>Бесплатно</div>
            </div>
          </div>
          
          <div className={styles.promotionCard}>
            <div className={styles.iconWrapper}>
              <FaCreditCard className={styles.icon} />
            </div>
            <div className={styles.promotionContent}>
              <h3 className={styles.promotionTitle}>Скидочные карты — чем больше покупка, тем больше выгода!</h3>
              <p className={styles.promotionDescription}>
                Для постоянных и оптовых клиентов действует программа лояльности со скидочными картами:
              </p>
              <ul className={styles.discountList}>
                <li><span className={styles.discountValue}>3%</span> — при единовременной покупке на сумму от 50 000 ₽</li>
                <li><span className={styles.discountValue}>5%</span> — при покупке от 100 000 ₽</li>
                <li><span className={styles.discountValue}>7%</span> — при покупке от 150 000 ₽</li>
              </ul>
              <p className={styles.promotionNote}>
                Карта выдаётся при покупке и действует на все последующие заказы. Участвуйте в программе и получайте стабильную скидку на любую продукцию WARMM.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Promotions; 