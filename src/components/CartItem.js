import React, { useContext } from 'react';
import { CartContext } from './CartContext';
import styled from 'styled-components';

const CartItem = (props) => {
  const { dispatch } = useContext(CartContext);

  return (
    <CartCard>
      <CartImage src={props.image} alt='changeme' />
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
    </CartCard>
  );
};

export default CartItem;

const CartCard = styled.div`
  display: grid;
  grid-template-columns: 10% 30% 5% 55%;
  height: 10vh;
`;

const ImageHolder = styled.div`
  height: 8vh;
`;

const CartImage = styled.img`
  max-height: 100%;
  overflow: hidden;
`;
