import React, { useContext } from 'react';
import { CartContext } from './CartContext';
import cartIcon from '../assets/cart.svg';
import styled from 'styled-components';

const CartNavDisplay = () => {
  const { state } = useContext(CartContext);
  const { itemCount } = state;

  return (
    <CartDisplay>
      <img src={cartIcon} alt='cart' />
      {itemCount ? '(' + itemCount + ')' : ''}
    </CartDisplay>
  );
};

export default CartNavDisplay;

const CartDisplay = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
`;
