"use client";

import "./Header.scss";
import Image from "next/image";
import Link from "next/link";
import { useState, useEffect } from "react";
import { useCart } from "@/context/CartContext";
import {
  FaBars,
  FaTimes,
  FaShoppingCart,
  FaUser,
  FaEnvelope,
  FaPhone,
} from "react-icons/fa";
import styles from "./Header.module.css";

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isBuilderFormOpen, setIsBuilderFormOpen] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
  });
  const { totalItems, toggleCart } = useCart();

  // Блокировка скролла при открытом меню
  useEffect(() => {
    if (isMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }

    return () => {
      document.body.style.overflow = "unset";
    };
  }, [isMenuOpen]);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const handleBuilderClick = () => {
    setIsBuilderFormOpen(true);
  };

  const handleFormChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
    setIsBuilderFormOpen(false);
  };

  return (
    <header className={`header ${isMenuOpen ? "menu-open" : ""}`}>
      <div className="container">
        <div className="header__logo">
          <Link href="/">
            <h1 style={{ color: "white", fontWeight: "bolder" }}>WARMM</h1>
          </Link>
        </div>

        <div className={`header__nav ${isMenuOpen ? "header__nav--open" : ""}`}>
          <ul className="header__nav-list">
            <li>
              <Link href="/catalog" onClick={() => setIsMenuOpen(false)}>
                Каталог
              </Link>
            </li>
            <li>
              <Link href="/promotions" onClick={() => setIsMenuOpen(false)}>
                Акции
              </Link>
            </li>
            <li>
              <Link href="/delivery" onClick={() => setIsMenuOpen(false)}>
                Оплата и доставка
              </Link>
            </li>
            <li>
              <Link href="/contacts" onClick={() => setIsMenuOpen(false)}>
                Контакты
              </Link>
            </li>
            <li>
              <Link href="/about" onClick={() => setIsMenuOpen(false)}>
                О нас
              </Link>
            </li>
          </ul>

          {/* Мобильные элементы в меню */}
          <div className="header__mobile-elements">
            <div className="header__contact">
              <a href="tel:+79214165320">+7 (921) 416-53-20</a>
              <a href="mailto:ma.warmmrus@gmail.com">ma.warmmrus@gmail.com</a>
            </div>
            <button className="header__btn" onClick={handleBuilderClick}>
              Я строитель
            </button>
            <div className="header__cart-container">
              <Link
                href="/cart"
                className="header__cart-link"
                onClick={() => setIsMenuOpen(false)}
              >
                <Image
                  src="/shopping-cart.svg"
                  alt="Корзина"
                  width={24}
                  height={24}
                />
                {totalItems > 0 && (
                  <span className="header__cart-count">{totalItems}</span>
                )}
                <span className="header__cart-text">Корзина</span>
              </Link>
            </div>
          </div>
        </div>

        <div className="header__right">
          <div className="header__contact">
            <a href="tel:+79214165320">+7 (921) 416-53-20</a>
            <a href="mailto:ma.warmmrus@gmail.com">ma.warmmrus@gmail.com</a>
          </div>
          <button className="header__btn" onClick={handleBuilderClick}>
            Я строитель
          </button>
          <div className="header__cart-container">
            <Link href="/cart" className="header__cart-link">
              <Image
                src="/shopping-cart.svg"
                alt="Корзина"
                width={24}
                height={24}
              />
              {totalItems > 0 && (
                <span className="header__cart-count">{totalItems}</span>
              )}
            </Link>
            <button
              className="header__cart-toggle"
              onClick={toggleCart}
              aria-label="Открыть корзину"
            >
              <Image
                src="/shopping-cart.svg"
                alt="Корзина"
                width={24}
                height={24}
              />
              {totalItems > 0 && (
                <span className="header__cart-count">{totalItems}</span>
              )}
            </button>
          </div>
        </div>

        <button
          className={`header__burger ${
            isMenuOpen ? "header__burger--open" : ""
          }`}
          onClick={toggleMenu}
          aria-label="Открыть меню"
        >
          <span></span>
          <span></span>
          <span></span>
        </button>
      </div>

      {isBuilderFormOpen && (
        <div
          className={styles.modalOverlay}
          onClick={() => setIsBuilderFormOpen(false)}
        >
          <div
            className={styles.modalContent}
            onClick={(e) => e.stopPropagation()}
          >
            <button
              className={styles.closeButton}
              onClick={() => setIsBuilderFormOpen(false)}
            >
              &times;
            </button>

            <div className={styles.formHeader}>
              <h2 className={styles.formTitle}>Форма для строителей</h2>
              <p className={styles.formSubtitle}>
                Заполните форму, и мы свяжемся с вами в ближайшее время
              </p>
            </div>

            <form onSubmit={handleFormSubmit} className={styles.form}>
              <div className={styles.inputGroup}>
                <FaUser className={styles.inputIcon} />
                <input
                  type="text"
                  name="name"
                  placeholder="Ваше имя"
                  value={formData.name}
                  onChange={handleFormChange}
                  className={styles.input}
                  required
                />
              </div>

              <div className={styles.inputGroup}>
                <FaEnvelope className={styles.inputIcon} />
                <input
                  type="email"
                  name="email"
                  placeholder="Ваш email"
                  value={formData.email}
                  onChange={handleFormChange}
                  className={styles.input}
                  required
                />
              </div>

              <div className={styles.inputGroup}>
                <FaPhone className={styles.inputIcon} />
                <input
                  type="tel"
                  name="phone"
                  placeholder="Ваш телефон"
                  value={formData.phone}
                  onChange={handleFormChange}
                  className={styles.input}
                  required
                />
              </div>

              <button type="submit" className={styles.submitButton}>
                Отправить заявку
              </button>
            </form>
          </div>
        </div>
      )}
    </header>
  );
}
