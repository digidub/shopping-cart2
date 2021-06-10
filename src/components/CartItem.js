import React, { useContext, useRef } from 'react';
import { CartContext } from './CartContext';
import styled from 'styled-components';

const CartItem = (props) => {
  const { dispatch } = useContext(CartContext);
  const { id, name, image, price, quantity } = props;
  const itemRef = useRef();

  const handleChange = async (e) => {
    const newQuantity = parseInt(e.target.value);
    console.log(newQuantity);
    dispatch({
      type: 'custom',
      quantity: newQuantity,
      cost: parseFloat(props.price),
      item: {
        id,
        name,
        image,
        price,
        quantity: newQuantity,
      },
    });
  };

  return (
    <CartCard>
      <CartImage src={props.image} alt='changeme' />
      <div className='cart-item-name'>
        <p>{props.name}</p>
      </div>
      <div className='cart-item-price'>
        <p>£{props.price}</p>
      </div>
      <QuantityController>
        <QuantityButton
          onClick={() => {
            dispatch({
              type: 'decrement',
              quantity: 1,
              cost: parseFloat(props.price),
              item: {
                id,
                name,
                image,
                price,
                quantity: 1,
              },
            });
          }}
        >
          -
        </QuantityButton>
        <Quantity type='number' min='1' value={quantity} ref={itemRef} onChange={handleChange} />
        <QuantityButton
          onClick={() => {
            dispatch({
              type: 'increment',
              quantity: 1,
              cost: parseFloat(props.price),
              item: {
                id,
                name,
                image,
                price,
                quantity: 1,
              },
            });
          }}
        >
          +
        </QuantityButton>
        <button
          onClick={() => {
            dispatch({
              type: 'delete',
              cost: parseFloat(props.price),
              item: {
                id,
              },
            });
          }}
        >
          delete
        </button>
      </QuantityController>
    </CartCard>
  );
};

export default CartItem;

const CartCard = styled.div`
  display: grid;
  grid-template-columns: 10% 30% 5% 55%;
  height: 10vh;
  margin: 1vh 0 1vh 0;
`;

const CartImage = styled.img`
  max-height: 100%;
  overflow: hidden;
`;

const QuantityController = styled.div`
  display: flex;
  flex-direction: row;
`;

const QuantityButton = styled.div`
  height: 50%;
  background: white;
  border-radius: 3px;
  border: 2px solid palevioletred;
  color: palevioletred;
  margin: 0 1em;
  padding: 0.25em 1em;
`;

const Quantity = styled.input`
  width: 25px;
`;
