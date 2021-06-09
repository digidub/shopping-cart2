import React, { useContext } from 'react';
import { CartContext } from './CartContext';
import cartIcon from '../assets/cart.svg';

const CartNavDisplay = () => {
  const { state } = useContext(CartContext);
  const { itemCount, costCount } = state;

  return (
    <div className='cart'>
      <img src={cartIcon} alt='cart' />
      <p>
        {itemCount} items {itemCount ? `(£${costCount.toFixed(2)})` : ''}
      </p>
    </div>
  );
};

export default CartNavDisplay;
