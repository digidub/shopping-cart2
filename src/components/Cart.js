import React, { useContext } from 'react';
import { CartContext } from './CartContext';
import CartItem from './CartItem';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

const Cart = () => {
  const { state } = useContext(CartContext);

  const cartItems = state.items.map((product) => {
    return <CartItem key={product.id} id={product.id} image={product.image} name={product.name} price={product.price} quantity={product.quantity} />;
  });

  return (
    <CartDisplay>
      {cartItems.length ? (
        cartItems
      ) : (
        <NoItems>
          No Items In Cart! Add <Link to='/products'>products</Link> to proceed.
        </NoItems>
      )}
    </CartDisplay>
  );
};

export default Cart;

const CartDisplay = styled.div`
  width: 80vh;
  height: 60vh;
  margin: 0 auto;
  margin-top: 10vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: lightgrey;
`;

const NoItems = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;
