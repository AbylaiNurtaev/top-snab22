"use client";

import React from "react";
import styles from "./Footer.module.css";

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.separator}></div>

      <div className={styles.container}>
        <div className={styles.column}>
          <p className={styles.subtle}>Связаться с нами</p>
          {/* <h2 className={styles.title}>Интересует надёжная поставка?</h2> */}
          <p className={styles.description}>
            Вся представленная на сайте информация, касающаяся технических
            характеристик, наличия на складе, стоимости товаров, цены и сроков
            доставки носит информационный характер и ни при каких условиях не
            является публичной офертой, определяемой положениями гражданского
            кодекса РФ
          </p>
          <p className={styles.copyright}>
            Top-Snab - поставщик инженерной сантехники
            <br />© 2025
          </p>
        </div>

        <div className={styles.column}>
          <p className={styles.subtle}>Разделы</p>
          <ul className={styles.links}>
            <li>О компании</li>
            <li>Доставка</li>
            <li>Каталог</li>
            <li>Отзывы</li>
            <li>Акции</li>
            <li>Контакты</li>
          </ul>
        </div>

        <div className={styles.column}>
          <p className={styles.subtle}>Контакты</p>
          <p className={styles.contact}>+7 (921) 111-87-58</p>
          <p className={styles.contact}>sale01@warmm.pro</p>
          <p className={styles.contact}>
            г. Санкт-Петербург
            <br />
            ул. Новорощинская д. 4, оф. 403-1
          </p>
          <img src="/images/logo.svg" alt="Логотип" className={styles.logo} />
        </div>
      </div>

      <div className={styles.legalContainer}>
        <div className={styles.legalInfo}>
          <p className={styles.legalText}>
            ООО «ИНЖЕНЕРНЫЕ РЕШЕНИЯ» пр. Народного Ополчения, д. 211, Лит. А,
            помещ. 2Н, офис 2, г. Санкт-Петербург
          </p>
          <p className={styles.legalText}>
            ОГРН: 1217800002771 ИНН: 7807262617 КПП: 780701001
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
