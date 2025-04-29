"use client";

import { useState } from 'react';
import styles from './PaymentDelivery.module.css';
import { FaCreditCard, FaMoneyBillWave, FaTruck, FaStore, FaBuilding, FaFileInvoiceDollar, FaHandshake, FaBox, FaShieldAlt, FaPhoneAlt, FaEnvelope, FaComments } from 'react-icons/fa';

const PaymentDelivery = () => {
  const [activeTab, setActiveTab] = useState('payment');

  return (
    <section className={styles.section}>
      <div className={styles.container}>
        <h2 className={styles.title}>Оплата и доставка</h2>
        
        <div className={styles.tabs}>
          <button 
            className={`${styles.tab} ${activeTab === 'payment' ? styles.activeTab : ''}`}
            onClick={() => setActiveTab('payment')}
          >
            Способы оплаты
          </button>
          <button 
            className={`${styles.tab} ${activeTab === 'delivery' ? styles.activeTab : ''}`}
            onClick={() => setActiveTab('delivery')}
          >
            Условия и сроки доставки
          </button>
        </div>
        
        <div className={styles.content}>
          {activeTab === 'payment' ? (
            <div className={styles.paymentContent}>
              <p className={styles.intro}>
                Мы предлагаем несколько удобных способов оплаты, чтобы вы могли выбрать наиболее подходящий:
              </p>
              
              <div className={styles.paymentMethods}>
                <div className={styles.paymentMethod}>
                  <div className={styles.iconWrapper}>
                    <FaCreditCard className={styles.icon} />
                  </div>
                  <div className={styles.methodInfo}>
                    <h3 className={styles.methodTitle}>Банковская карта</h3>
                    <p className={styles.methodDescription}>
                      Оплата картами Visa, MasterCard, МИР. Оплата возможна непосредственно на сайте через защищённый платежный шлюз. Все данные надежно зашифрованы и не передаются третьим лицам.
                    </p>
                  </div>
                </div>
                
                <div className={styles.paymentMethod}>
                  <div className={styles.iconWrapper}>
                    <FaMoneyBillWave className={styles.icon} />
                  </div>
                  <div className={styles.methodInfo}>
                    <h3 className={styles.methodTitle}>Система Быстрых Платежей (СБП)</h3>
                    <p className={styles.methodDescription}>
                      Быстрый и удобный способ оплаты через мобильное приложение вашего банка. Оплата возможна непосредственно на сайте через защищённый платежный шлюз.
                    </p>
                  </div>
                </div>
                
                <div className={styles.paymentMethod}>
                  <div className={styles.iconWrapper}>
                    <FaBuilding className={styles.icon} />
                  </div>
                  <div className={styles.methodInfo}>
                    <h3 className={styles.methodTitle}>Безналичный расчет для юридических лиц</h3>
                    <p className={styles.methodDescription}>
                      После оформления заказа вы получите счёт для оплаты по реквизитам. Мы предоставляем полный комплект бухгалтерских документов.
                    </p>
                  </div>
                </div>
                
                <div className={styles.paymentMethod}>
                  <div className={styles.iconWrapper}>
                    <FaFileInvoiceDollar className={styles.icon} />
                  </div>
                  <div className={styles.methodInfo}>
                    <h3 className={styles.methodTitle}>Оплата по счету-фактуре</h3>
                    <p className={styles.methodDescription}>
                      Актуально для оптовых клиентов и организаций. Счет формируется менеджером и направляется на ваш e-mail.
                    </p>
                  </div>
                </div>
                
                <div className={styles.paymentMethod}>
                  <div className={styles.iconWrapper}>
                    <FaStore className={styles.icon} />
                  </div>
                  <div className={styles.methodInfo}>
                    <h3 className={styles.methodTitle}>Оплата при самовывозе</h3>
                    <p className={styles.methodDescription}>
                      Вы можете оплатить заказ наличными или переводом по СБП в нашем пункте самовывоза по адресу: г. Санкт-Петербург, ул. Кондратенко 3.
                    </p>
                  </div>
                </div>
              </div>
              
              <div className={styles.contactInfo}>
                <p className={styles.contactText}>
                  Если у вас возникли вопросы по оплате или требуется индивидуальное коммерческое предложение, наши менеджеры всегда готовы проконсультировать вас.
                </p>
                <div className={styles.contactButtons}>
                  <a href="tel:+78001234567" className={styles.contactButton}>
                    <FaPhoneAlt className={styles.contactIcon} />
                    <span>Позвонить</span>
                  </a>
                  <a href="mailto:info@example.com" className={styles.contactButton}>
                    <FaEnvelope className={styles.contactIcon} />
                    <span>Написать</span>
                  </a>
                  <a href="/contacts" className={styles.contactButton}>
                    <FaComments className={styles.contactIcon} />
                    <span>Обратная связь</span>
                  </a>
                </div>
              </div>
            </div>
          ) : (
            <div className={styles.deliveryContent}>
              <h3 className={styles.subtitle}>Способы доставки:</h3>
              
              <div className={styles.deliveryMethods}>
                <div className={styles.deliveryMethod}>
                  <div className={styles.iconWrapper}>
                    <FaTruck className={styles.icon} />
                  </div>
                  <div className={styles.methodInfo}>
                    <h3 className={styles.methodTitle}>Курьерская доставка по городу</h3>
                    <p className={styles.methodDescription}>
                      Оперативная доставка до двери в пределах города. Стоимость и сроки уточняются при оформлении заказа.
                    </p>
                  </div>
                </div>
                
                <div className={styles.deliveryMethod}>
                  <div className={styles.iconWrapper}>
                    <FaTruck className={styles.icon} />
                  </div>
                  <div className={styles.methodInfo}>
                    <h3 className={styles.methodTitle}>Доставка транспортными компаниями</h3>
                    <p className={styles.methodDescription}>
                      Отгрузка производится в течение 1–2 рабочих дней после подтверждения оплаты. Работаем с ПЭК, СДЭК, Деловые Линии и другими надежными перевозчиками.
                    </p>
                  </div>
                </div>
                
                <div className={styles.deliveryMethod}>
                  <div className={styles.iconWrapper}>
                    <FaStore className={styles.icon} />
                  </div>
                  <div className={styles.methodInfo}>
                    <h3 className={styles.methodTitle}>Самовывоз со склада</h3>
                    <p className={styles.methodDescription}>
                      Вы можете самостоятельно забрать заказ с нашего склада в будние дни. Пожалуйста, согласуйте время приезда с менеджером заранее.
                    </p>
                  </div>
                </div>
              </div>
              
              <div className={styles.additionalInfo}>
                <h3 className={styles.subtitle}>Дополнительная информация:</h3>
                
                <div className={styles.infoItems}>
                  <div className={styles.infoItem}>
                    <div className={styles.iconWrapper}>
                      <FaShieldAlt className={styles.icon} />
                    </div>
                    <p className={styles.infoText}>
                      Все товары перед отправкой проходят проверку на целостность и комплектацию.
                    </p>
                  </div>
                  
                  <div className={styles.infoItem}>
                    <div className={styles.iconWrapper}>
                      <FaBox className={styles.icon} />
                    </div>
                    <p className={styles.infoText}>
                      Мы тщательно упаковываем продукцию, чтобы исключить повреждения при транспортировке.
                    </p>
                  </div>
                  
                  <div className={styles.infoItem}>
                    <div className={styles.iconWrapper}>
                      <FaHandshake className={styles.icon} />
                    </div>
                    <p className={styles.infoText}>
                      В случае обнаружения повреждений при получении — обязательно составьте акт осмотра с представителем транспортной компании и свяжитесь с нами.
                    </p>
                  </div>
                  
                  <div className={styles.infoItem}>
                    <div className={styles.iconWrapper}>
                      <FaTruck className={styles.icon} />
                    </div>
                    <p className={styles.infoText}>
                      Вы можете отслеживать статус своего заказа по трек-номеру, предоставленному после отправки.
                    </p>
                  </div>
                </div>
              </div>
              
              <div className={styles.contactInfo}>
                <p className={styles.contactText}>
                  Если у вас остались вопросы по оплате или доставке, свяжитесь с нами по телефону, электронной почте или через форму обратной связи.
                </p>
                <div className={styles.contactButtons}>
                  <a href="tel:+78001234567" className={styles.contactButton}>
                    <FaPhoneAlt className={styles.contactIcon} />
                    <span>Позвонить</span>
                  </a>
                  <a href="mailto:info@example.com" className={styles.contactButton}>
                    <FaEnvelope className={styles.contactIcon} />
                    <span>Написать</span>
                  </a>
                  <a href="/contacts" className={styles.contactButton}>
                    <FaComments className={styles.contactIcon} />
                    <span>Обратная связь</span>
                  </a>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default PaymentDelivery; 