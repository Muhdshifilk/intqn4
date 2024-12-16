import React from 'react';
import { useCart } from '../context/CartContext';  // Use the Cart Context

const products = [
  { id: 1, name: 'Apple', price: 1 },
  { id: 2, name: 'Banana', price: 0.5 },
  { id: 3, name: 'Orange', price: 1.2 },
];

const ProductList = () => {
  const { addToCart } = useCart();  // Get addToCart function from context

  return (
    <div>
      <h2>Products</h2>
      {products.map((product) => (
        <div key={product.id}>
          <span>{product.name} - ${product.price}</span>
          <button onClick={() => addToCart(product)}>Add to Cart</button>
        </div>
      ))}
    </div>
  );
};

export default ProductList;
