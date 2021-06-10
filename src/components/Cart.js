import React, { useContext } from 'react';
import { CartContext } from './CartContext';
import CartItem from './CartItem';
import styled from 'styled-components';

const Cart = () => {
  const { state } = useContext(CartContext);

  const cartItems = state.items.map((product) => {
    return (
      <CartDisplay>
        <CartItem key={product.id} id={product.id} image={product.image} name={product.name} price={product.price} quantity={product.quantity} />
      </CartDisplay>
    );
  });

  return <div className='cart-container'>{cartItems}</div>;
};

export default Cart;

const CartDisplay = styled.div`
  display: flex;
  flex-direction: column;
`;
