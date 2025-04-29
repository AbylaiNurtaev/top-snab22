export interface TechnicalProperty {
  key: string;
  value: string;
}

export interface Product {
  id: string;
  name: string;
  description?: string;
  price: number;
  technicalProperties?: TechnicalProperty[];
  // ... другие существующие поля
} 