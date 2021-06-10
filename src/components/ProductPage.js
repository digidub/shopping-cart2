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
  border-radius: 3px;
  border: 2px solid palevioletred;
  color: palevioletred;
`;

const AddToCart = styled.input`
  background: white;
  border-radius: 3px;
  border: 2px solid palevioletred;
  color: palevioletred;
  margin: 0 1em;
  padding: 0.25em 1em;
`;
