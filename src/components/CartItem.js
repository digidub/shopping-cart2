import React, { useContext } from 'react';
import { CartContext } from './CartContext';

const CartItem = (props) => {
  const { dispatch } = useContext(CartContext);

  return (
    <div className='cart-item'>
      <div className='cart-item-img'>
        <img src={props.image} alt='changeme' />
      </div>
      <div className='cart-item-name'>
        <p>{props.name}</p>
      </div>
      <div className='cart-item-price'>
        <p>£{props.price}</p>
      </div>
      <div className='cart-item-quantity'>
        <button
          onClick={() => {
            dispatch({
              type: 'decrement',
              quantity: 1,
              cost: parseFloat(props.price),
              item: {
                id: props.id,
                name: props.name,
                image: props.image,
                price: props.price,
                quantity: 1,
              },
            });
          }}
        >
          -
        </button>
        <p>{props.quantity}</p>
        <button
          onClick={() => {
            dispatch({
              type: 'increment',
              quantity: 1,
              cost: parseFloat(props.price),
              item: {
                id: props.id,
                name: props.name,
                image: props.image,
                price: props.price,
                quantity: 1,
              },
            });
          }}
        >
          +
        </button>
        <button
          onClick={() => {
            dispatch({
              type: 'delete',
              cost: parseFloat(props.price),
              item: {
                id: props.id,
              },
            });
          }}
        >
          delete
        </button>
      </div>
    </div>
  );
};

export default CartItem;
