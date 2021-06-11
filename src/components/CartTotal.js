import React, { useContext } from 'react';
import { formatter } from './AppLogic';
import { CartContext } from './CartContext';

const CartTotal = (props) => {
  const { state } = useContext(CartContext);
  const { itemCount, costCount } = state;

  return (
    <p>
      TOTAL BEFORE SHIPPING: {itemCount} items ({formatter.format(costCount)})
    </p>
  );
};

export default CartTotal;
