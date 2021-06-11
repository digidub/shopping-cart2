import React, { useContext } from 'react';
import { CartContext } from './CartContext';

const CartTotal = (props) => {
  const { state } = useContext(CartContext);
  const { itemCount, costCount } = state;

  return (
    <p>
      {itemCount} items (£${costCount.toFixed(2)})
    </p>
  );
};

export default CartTotal;
