import React from 'react';
import { Product } from '../types/product';
import styles from './ProductCard.module.css';

interface ProductCardProps {
  product: Product;
  onClick: () => void;
}

const ProductCard: React.FC<ProductCardProps> = ({ product, onClick }) => (
  <div className={styles.card} onClick={onClick}>
    {product.imageUrl ? (
      <img src={product.imageUrl} alt={product.name} className={styles.cardImage} />
    ) : (
      <div className={styles.cardImage}>Изображение отсутствует</div>
    )}
    <h3 className={styles.cardTitle}>{product.name}</h3>
    <p className={styles.cardDescription}>{product.description}</p>
    <p>Категория: {product.category}</p>
    <p>Количество: {product.quantity} {product.unit}</p>
  </div>
);

export default ProductCard;