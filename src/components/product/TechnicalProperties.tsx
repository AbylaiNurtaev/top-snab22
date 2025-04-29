import React from 'react';
import { TechnicalProperty } from '@/types/product';
import styles from './TechnicalProperties.module.css';

interface TechnicalPropertiesProps {
  properties: TechnicalProperty[];
}

export const TechnicalProperties: React.FC<TechnicalPropertiesProps> = ({ properties }) => {
  if (!properties?.length) {
    return null;
  }

  return (
    <div className={styles.container}>
      <h2 className={styles.title}>Технические свойства</h2>
      <div className={styles.propertiesList}>
        {properties.map((property, index) => (
          <div key={index} className={styles.propertyRow}>
            <div className={styles.propertyKey}>
              {property.key}
              <span className={styles.dotLine}></span>
            </div>
            <div className={styles.propertyValue}>{property.value}</div>
          </div>
        ))}
      </div>
    </div>
  );
}; 