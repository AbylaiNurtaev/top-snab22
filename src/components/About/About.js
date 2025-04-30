"use client";

import React from 'react';
import styles from './About.module.css';
import { FaCheck, FaLightbulb, FaShieldAlt, FaUsers, FaHandshake } from 'react-icons/fa';

const About = () => {
  return (
    <section className={styles.section}>
      <div className={styles.container}>
        <h2 className={styles.title}>О нас</h2>
        
        <div className={styles.introContainer}>
          <p className={styles.intro}>
            Компания Warmm — это современный производитель инновационных решений в сфере обогрева полов. Уже более 3 лет мы создаём продукцию, которая дарит комфорт и уют в каждом доме. Наша миссия — сделать технологию тёплого пола доступной, безопасной и максимально эффективной для каждого клиента.
          </p>
          
          <p className={styles.intro}>
            Тепло — это не только про физическое ощущение, но и про заботу, надёжность и продуманный подход к каждой детали. Именно так мы подходим к своей работе — с вниманием к качеству, стремлением к инновациям и фокусом на потребности наших клиентов.
          </p>
          
          <p className={styles.intro}>
            Каждый элемент нашей продукции проходит контроль качества на всех этапах производства. Мы используем только проверенные материалы и внедряем современные технологии, чтобы обеспечить стабильную работу систем обогрева на долгие годы.
          </p>
        </div>
        
        <div className={styles.whyChooseContainer}>
          <h3 className={styles.subtitle}>Почему выбирают Warmm?</h3>
          <div className={styles.whyChooseGrid}>
            <div className={styles.whyChooseCard}>
              <div className={styles.whyChooseIcon}>
                <FaCheck />
              </div>
              <h4 className={styles.whyChooseTitle}>Качество и надёжность</h4>
              <p className={styles.whyChooseText}>
                Соответствие международным стандартам и длительный срок службы.
              </p>
            </div>
            
            <div className={styles.whyChooseCard}>
              <div className={styles.whyChooseIcon}>
                <FaLightbulb />
              </div>
              <h4 className={styles.whyChooseTitle}>Инженерный подход</h4>
              <p className={styles.whyChooseText}>
                Мы не просто продаём материалы, а помогаем создавать эффективные решения.
              </p>
            </div>
            
            <div className={styles.whyChooseCard}>
              <div className={styles.whyChooseIcon}>
                <FaShieldAlt />
              </div>
              <h4 className={styles.whyChooseTitle}>Поддержка на всех этапах</h4>
              <p className={styles.whyChooseText}>
                От консультации и подбора системы до сопровождения монтажа и сервиса.
              </p>
            </div>
            
            <div className={styles.whyChooseCard}>
              <div className={styles.whyChooseIcon}>
                <FaUsers />
              </div>
              <h4 className={styles.whyChooseTitle}>Развитая партнёрская сеть</h4>
              <p className={styles.whyChooseText}>
                Работаем с дистрибьюторами, строительными компаниями и частными клиентами по всей стране.
              </p>
            </div>
          </div>
        </div>
        
        <div className={styles.valuesContainer}>
          <h3 className={styles.subtitle}>Наши ценности</h3>
          <div className={styles.valuesGrid}>
            <div className={styles.valueCard}>
              <div className={styles.valueIcon}>
                <FaLightbulb />
              </div>
              <h4 className={styles.valueTitle}>Технологии</h4>
              <p className={styles.valueText}>
                Мы постоянно следим за новыми тенденциями и внедряем современные разработки, чтобы предложить клиентам лучшее.
              </p>
            </div>
            
            <div className={styles.valueCard}>
              <div className={styles.valueIcon}>
                <FaShieldAlt />
              </div>
              <h4 className={styles.valueTitle}>Ответственность</h4>
              <p className={styles.valueText}>
                Мы гарантируем качество каждого изделия и отвечаем за свою продукцию перед каждым заказчиком.
              </p>
            </div>
            
            <div className={styles.valueCard}>
              <div className={styles.valueIcon}>
                <FaHandshake />
              </div>
              <h4 className={styles.valueTitle}>Открытость</h4>
              <p className={styles.valueText}>
                Мы строим доверительные отношения с клиентами и партнёрами, предоставляя прозрачную информацию и честные условия сотрудничества.
              </p>
            </div>
            
            <div className={styles.valueCard}>
              <div className={styles.valueIcon}>
                <FaUsers />
              </div>
              <h4 className={styles.valueTitle}>Команда</h4>
              <p className={styles.valueText}>
                Наши специалисты — это команда профессионалов, объединённых общей идеей: создавать комфорт и тепло, которое остаётся с вами надолго.
              </p>
            </div>
          </div>
        </div>
        
        <div className={styles.sloganContainer}>
          <p className={styles.slogan}>WARMM – Тепло начинается с нас.</p>
        </div>
      </div>
    </section>
  );
};

export default About; 