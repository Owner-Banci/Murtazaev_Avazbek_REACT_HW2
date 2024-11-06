import React, { useEffect, useState } from 'react';
import ProductCard from './ProductCard';
import Modal from './Modal';
import { Product } from '../types/product';

const ProductList: React.FC = () => {
  const [products, setProducts] = useState<Product[]>([]);
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);

  useEffect(() => {
    fetch('/products.json')
      .then((response) => response.json())
      .then((data) => setProducts(data));
  }, []);

  return (
    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(200px, 1fr))', gap: '20px', padding: '20px', marginLeft: '220px' }}>
      {products.map((product) => (
        <ProductCard key={product.id} product={product} onClick={() => setSelectedProduct(product)} />
      ))}
      <Modal isOpen={!!selectedProduct} onClose={() => setSelectedProduct(null)}>
        {selectedProduct && (
          <div>
            <h3>{selectedProduct.name}</h3>
            <p>{selectedProduct.description}</p>
            <p>Категория: {selectedProduct.category}</p>
            <p>Количество: {selectedProduct.quantity} {selectedProduct.unit}</p>
          </div>
        )}
      </Modal>
    </div>
  );
};

export default ProductList;