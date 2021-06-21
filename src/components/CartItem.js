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
      <CartImageHolder>
        <CartImage src={props.image} alt='changeme' />
      </CartImageHolder>
      <CartName>
        <StyledLink to={{ pathname: `/products/${id}`, state: { props } }}>
          <p>{props.name}</p>
        </StyledLink>
      </CartName>
      <CartPrice>
        <p>{formatter.format(price)}</p>
      </CartPrice>
      <CartQuantity>
        <Buttons>
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
        </Buttons>
      </CartQuantity>
      <CartCost>
        <p>{formatter.format(quantity * price)}</p>
      </CartCost>
    </CartCard>
  );
};

export default CartItem;

const CartCard = styled.div`
  display: grid;
  grid-template-columns: 15% 48% 10% 18% 10%;
  height: 100px;
  margin: 10px 0 10px 0;

  @media (max-width: 700px) {
    grid-template-columns: 15% 35% 14% 22% 14%;
  }
  @media (max-width: 600px) {
    grid-template-columns: 25% 17% 33% 25%;
    grid-template-rows: 50% 50%;
    grid-template-areas:
      'image name name name'
      'image price quantity cost';
  }
`;

const CartImageHolder = styled.div`
  display: flex;
  height: 100px;
  flex-diretion: column;
  justify-content: center;
`;

const CartImage = styled.img`
  max-height: 100%;
  max-width: 95%;
  overflow: hidden;
  @media (max-width: 600px) {
    grid-area: image;
  }
`;

const CartName = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  @media (max-width: 600px) {
    grid-area: name;
  }
`;

const CartPrice = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  @media (max-width: 600px) {
    grid-area: price;
  }
`;

const CartQuantity = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: stretch;
  @media (max-width: 600px) {
    grid-area: quantity;
  }
`;

const CartCost = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  @media (width: 600px) {
    grid-area: cost;
  }
`;

const QuantityButtonDecrement = styled.div`
  cursor: pointer;
  &:hover {
    transition: all 0.2s ease;
    filter: invert(76%) sepia(76%) saturate(2224%) hue-rotate(295deg) brightness(87%) contrast(98%);
  }
`;

const Quantity = styled.input`
  max-width: 35px;
  text-align: center;
  padding: 0px;
  cursor: pointer;
  &:focus {
    outline: none;
  }
  &:hover {
    transition: all 0.2s ease;
    filter: invert(76%) sepia(76%) saturate(2224%) hue-rotate(295deg) brightness(87%) contrast(98%);
  }
`;

const QuantityButtonIncrement = styled.div`
  cursor: pointer;
  &:hover {
    transition: all 0.2s ease;
    filter: invert(76%) sepia(76%) saturate(2224%) hue-rotate(295deg) brightness(87%) contrast(98%);
  }
`;

const DeleteButton = styled.div`
  cursor: pointer;
  &:hover {
    transition: all 0.2s ease;
    filter: invert(76%) sepia(76%) saturate(2224%) hue-rotate(295deg) brightness(87%) contrast(98%);
  }
`;

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

const Buttons = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
`;
