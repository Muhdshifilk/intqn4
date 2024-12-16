import React from 'react';
import { useCart } from '../context/CartContext';  // Use the Cart Context

const Cart = () => {
  const { cart, removeFromCart, clearCart } = useCart();  // Get cart data and actions from context

  return (
    <div>
      <h2>Your Cart</h2>
      {cart.length === 0 ? (
        <p>No items in cart</p>
      ) : (
        <ul>
          {cart.map((item, index) => (
            <li key={index}>
              {item.name} - ${item.price}
              <button onClick={() => removeFromCart(index)}>Remove</button>
            </li>
          ))}
        </ul>
      )}
      {cart.length > 0 && <button onClick={clearCart}>Clear Cart</button>}
      <h3>Total: ${cart.reduce((total, item) => total + item.price, 0)}</h3>
    </div>
  );
};

export default Cart;
