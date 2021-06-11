import React, { useContext } from 'react';
import { CartContext } from './CartContext';
import cartIcon from '../assets/cart.svg';
import styled from 'styled-components';
import { formatter } from './AppLogic';

const CartNavDisplay = () => {
  const { state } = useContext(CartContext);
  const { itemCount, costCount } = state;

  return (
    <CartDisplay>
      <img src={cartIcon} alt='cart' />
      <p>
        {itemCount} items {itemCount ? formatter.format(costCount) : ''}
      </p>
    </CartDisplay>
  );
};

export default CartNavDisplay;

const CartDisplay = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
`;
