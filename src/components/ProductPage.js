import React, { Fragment, useContext, useRef } from 'react';
import { useLocation, useParams } from 'react-router';
import styled from 'styled-components';
import { CartContext } from './CartContext';

const ProductPage = () => {
  let { id } = useParams();
  const location = useLocation();
  const { props } = location.state;
  const { image, altText, name, price, description } = props;
  const { dispatch } = useContext(CartContext);
  const itemRef = useRef();

  return (
    <Fragment>
      <ProductDisplay>
        <div className='image'>
          <img src={image} alt={altText} />
        </div>
        <div className='product-details'>
          <div className='product-title'>
            <h1>{name}</h1>
          </div>
          <div className='product-description'>
            <h3>{description}</h3>
          </div>
          <div className='product-price'>
            <h1>£{price}</h1>
          </div>
          <CartController>
            <Quantity type='number' min='1' defaultValue={1} ref={itemRef} />
            <AddToCart
              type='submit'
              value='Add to Cart'
              onClick={() => {
                dispatch({
                  type: 'increment',
                  quantity: parseInt(itemRef.current.value),
                  cost: parseFloat(price),
                  item: {
                    id,
                    name,
                    description,
                    image,
                    price,
                    quantity: parseInt(itemRef.current.value),
                  },
                });
              }}
            />
          </CartController>
        </div>
      </ProductDisplay>
    </Fragment>
  );
};

export default ProductPage;

const ProductDisplay = styled.div`
  width: 80vw;
  margin: 0 auto;
  margin-top: 50px;
  display: flex;
  flex-direction: row;
`;

const CartController = styled.div`
  display: flex;
  flex-align: row;
`;

const Quantity = styled.input`
  width: 40px;
  background: white;
  border: 5px solid #1c6ea4;
  border-radius: 9px 0px 0px 9px;
  border: 2px solid palevioletred;
  border-right: 0px;
  color: palevioletred;
  display: inline-block;
  &:focus {
    outline: none;
  }
`;

const AddToCart = styled.input`
  display: inline-block;
  background: white;
  border-radius: 0px 9px 9px 0px;
  border: 2px solid palevioletred;
  color: palevioletred;
  padding: 0.25em 1em;
  &:hover {
    background: palevioletred;
    color: white;
    transition: all 0.5s ease;
  }
`;
