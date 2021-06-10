import React, { useContext } from 'react';
import { CartContext } from './CartContext';

const Cart = () => {
  const { state } = useContext(CartContext);

  const cartItems = state.items.map((product) => {
    return (
      <CartItem
        key={product.id}
        id={product.id}
        image={product.image}
        name={product.name}
        price={product.price}
        quantity={product.quantity}
      ></CartItem>
    );
  });

  return <div className='cart-container'>{cartItems}</div>;
};

export default Cart;
