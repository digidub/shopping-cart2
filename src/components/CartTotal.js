import React, { useContext } from 'react';
import styled from 'styled-components';
import { formatter } from './AppLogic';
import { CartContext } from './CartContext';

const CartTotal = (props) => {
  const { state } = useContext(CartContext);
  const { itemCount, costCount } = state;

  return (
    <Total>
      TOTAL BEFORE SHIPPING: {itemCount} items ({formatter.format(costCount)})
    </Total>
  );
};

export default CartTotal;

const Total = styled.p`
  font-weight: bold;
`;
