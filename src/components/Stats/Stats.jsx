"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { useCountAnimation } from "../../hooks/useCountAnimation";
import "./Stats.scss";
import { useState } from "react";

export default function Stats() {
  const [count150, ref150] = useCountAnimation(150, 2);
  const [count12, ref12] = useCountAnimation(12, 1.5);
  const [count450, ref450] = useCountAnimation(450, 2.5);
  const [isCallFormOpen, setIsCallFormOpen] = useState(false);
  const [callData, setCallData] = useState({ name: "", phone: "" });

  const handleCallSubmit = (e) => {
    e.preventDefault();
    console.log("Call requested:", callData);
    setIsCallFormOpen(false);
  };

  return (
    <>
      <section className="stats">
        <div className="stats__content-wrapper relative">
          {/* Левый персонаж с анимацией */}
          <motion.div
            className="stats__character-left"
            initial={{ x: -100, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            transition={{ duration: 1 }}
          >
            <Image
              src="/images/worker-left.png"
              alt="Worker Left"
              width={200}
              height={500}
              style={{ width: "auto", height: "500px" }}
              priority
            />
          </motion.div>

          {/* Правый персонаж с анимацией */}
          <motion.div
            className="stats__character-right"
            initial={{ x: 100, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            transition={{ duration: 1 }}
          >
            <Image
              src="/images/worker-right.png"
              alt="Worker Right"
              width={200}
              height={500}
              style={{ width: "auto", height: "500px" }}
              priority
            />
          </motion.div>

          {/* Основной контент */}
          <div className="stats__content">
            <motion.div
              className="stats__left"
              initial={{ opacity: 0, x: -60 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 1 }}
            >
              <h1 className="stats__title">WARMM</h1>
              <h2 className="stats__subtitle">
                Комфорт. Надёжность. Будущее вашего дома.
              </h2>
              <p className="stats__description">
                Мы специализируемся на поставках инженерной сантехники и деталей
                трубопровода. Каждая позиция в наличии, каждый проект — с
                заботой о деталях.
              </p>
              <motion.button
                className="stats__cta-button"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.97 }}
                onClick={() => setIsCallFormOpen(true)}
              >
                Заказать звонок
              </motion.button>
            </motion.div>

            <motion.div
              className="stats__right"
              initial={{ opacity: 0, x: 60 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 1 }}
            >
              <div className="stats__number-item">
                <div className="stats__number-glow" />
                <div className="stats__number" ref={ref150}>
                  <span>{count150}</span>
                </div>
                <p className="stats__label">позиций в наличии</p>
              </div>

              <div className="stats__number-item">
                <div className="stats__number-glow" />
                <div className="stats__number" ref={ref12}>
                  <span>{count12}</span>
                </div>
                <p className="stats__label">лет опыта</p>
              </div>

              <div className="stats__number-item">
                <div className="stats__number-glow" />
                <div className="stats__number" ref={ref450}>
                  <span>{count450}</span>
                </div>
                <p className="stats__label">успешных проектов</p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
      {isCallFormOpen && (
        <div
          className="stats__modal-overlay"
          onClick={() => setIsCallFormOpen(false)}
        >
          <div
            className="stats__modal-content"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              className="stats__modal-close"
              onClick={() => setIsCallFormOpen(false)}
            >
              &times;
            </button>
            <h2 className="stats__modal-title">Заказать звонок</h2>
            <p className="stats__modal-subtitle">
              Оставьте свои данные, и мы перезвоним вам в течение 15 минут
            </p>
            <form onSubmit={handleCallSubmit} className="stats__call-form">
              <input
                type="text"
                name="name"
                placeholder="Ваше имя"
                value={callData.name}
                onChange={(e) =>
                  setCallData({ ...callData, name: e.target.value })
                }
                required
                className="stats__call-input"
              />
              <input
                type="tel"
                name="phone"
                placeholder="Ваш телефон"
                value={callData.phone}
                onChange={(e) =>
                  setCallData({ ...callData, phone: e.target.value })
                }
                required
                className="stats__call-input"
              />
              <button type="submit" className="stats__call-submit">
                Заказать звонок
              </button>
            </form>
          </div>
        </div>
      )}
      <style jsx>{`
        .stats__modal-overlay {
          position: fixed;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          background: rgba(0, 0, 0, 0.6);
          display: flex;
          justify-content: center;
          align-items: center;
          z-index: 1000;
          animation: fadeIn 0.3s ease;
        }
        @keyframes fadeIn {
          from {
            opacity: 0;
          }
          to {
            opacity: 1;
          }
        }
        .stats__modal-content {
          background: #fff;
          padding: 2rem;
          border-radius: 10px;
          width: 90%;
          max-width: 400px;
          position: relative;
          animation: slideDown 0.3s ease;
        }
        @keyframes slideDown {
          from {
            transform: translateY(-20px);
            opacity: 0;
          }
          to {
            transform: translateY(0);
            opacity: 1;
          }
        }
        .stats__modal-close {
          position: absolute;
          top: 10px;
          right: 10px;
          background: none;
          border: none;
          font-size: 1.5rem;
          cursor: pointer;
          color: #666;
          transition: color 0.3s ease;
        }
        .stats__modal-close:hover {
          color: #df525f;
        }
        .stats__modal-title {
          margin: 0 0 0.5rem;
          font-size: 1.5rem;
          text-align: center;
          color: #333;
        }
        .stats__modal-subtitle {
          margin: 0 0 1rem;
          font-size: 1rem;
          text-align: center;
          color: #666;
        }
        .stats__call-form {
          display: flex;
          flex-direction: column;
          gap: 1rem;
        }
        .stats__call-input {
          padding: 0.75rem;
          border: 1px solid #ddd;
          border-radius: 6px;
          font-size: 1rem;
          transition: border-color 0.3s ease;
        }
        .stats__call-input:focus {
          outline: none;
          border-color: #df525f;
          box-shadow: 0 0 0 2px rgba(223, 82, 95, 0.2);
          background: #fff;
        }
        .stats__call-submit {
          padding: 0.75rem;
          background: linear-gradient(135deg, #df525f, #c7444f);
          color: white;
          border: none;
          border-radius: 6px;
          font-size: 1rem;
          cursor: pointer;
          transition: transform 0.3s ease, box-shadow 0.3s ease;
        }
        .stats__call-submit:hover {
          transform: translateY(-2px);
          box-shadow: 0 5px 15px rgba(223, 82, 95, 0.3);
        }
        @media (max-width: 768px) {
          .stats__modal-content {
            padding: 1.5rem;
          }
        }
      `}</style>
    </>
  );
}
