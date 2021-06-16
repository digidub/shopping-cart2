import React, { useContext, useRef } from 'react';
import { CartContext } from './CartContext';
import styled from 'styled-components';
import { formatter } from './AppLogic';
import { Link } from 'react-router-dom';
import deleteIcon from '../assets/delete.svg';

const CartItem = (props) => {
  const { dispatch } = useContext(CartContext);
  const { id, name, image, price, quantity } = props;
  const itemRef = useRef();

  const handleChange = (e) => {
    const newQuantity = Math.max(1, Number(e.target.value) || 1);
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
        <StyledLink to={{ pathname: `/products/${id}`, state: { props } }}>
          <p>{props.name}</p>
        </StyledLink>
      </div>
      <div className='cart-item-price'>
        <p>{formatter.format(price)}</p>
      </div>

      <QuantityController>
        <QuantityButtonDecrement
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
        </QuantityButtonDecrement>
        <Quantity type='number' min='1' value={quantity} ref={itemRef} onChange={handleChange} />
        <QuantityButtonIncrement
          onClick={() => {
            dispatch({
              type: 'increment',
              quantity: 1,
              cost: parseFloat(price),
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
        </QuantityButtonIncrement>
        <DeleteButton
          onClick={() => {
            dispatch({
              type: 'delete',
              cost: parseFloat(price),
              item: {
                id,
              },
            });
          }}
        >
          <img src={deleteIcon} alt='delete' />
        </DeleteButton>
      </QuantityController>
      <div>
        <p>{formatter.format(quantity * price)}</p>
      </div>
    </CartCard>
  );
};

export default CartItem;

const CartCard = styled.div`
  display: grid;
  grid-template-columns: 10% 30% 10% 35% 10%;
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

const QuantityButtonDecrement = styled.div`
  height: 30px;
  background: white;
  border-radius: 9px 0px 0px 9px;
  border: 2px solid palevioletred;
  color: palevioletred;
  ${'' /* padding: 0.25em 1em; */}
  width: 30px;
`;

const Quantity = styled.input`
  height: 30px;
  width: 40px;
  background: white;
  border: 2px solid palevioletred;
  border-right: 0px;
  border-left: 0px;
  color: palevioletred;
  display: inline-block;
  &:focus {
    outline: none;
  }
  padding: 0px;
`;

const QuantityButtonIncrement = styled.div`
  height: 30px;
  width: 30px;
  background: white;
  border-radius: 0px 9px 9px 0px;
  border: 2px solid palevioletred;
  color: palevioletred;
  ${'' /* padding: 0.25em 1em; */}
`;

const DeleteButton = styled.div``;

const StyledLink = styled(Link)`
  text-decoration: none;

  &:focus,
  &:hover,
  &:visited,
  &:link,
  &:active {
    text-decoration: none;
  }
`;
