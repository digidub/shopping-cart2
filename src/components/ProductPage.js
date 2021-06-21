import React, { useContext, useRef } from 'react';
import { useLocation, useParams } from 'react-router';
import styled from 'styled-components';
import { CartContext } from './CartContext';
import { formatter } from './AppLogic';

const ProductPage = () => {
  let { id } = useParams();
  const location = useLocation();
  const { props } = location.state;
  const { image, altText, name, price, description } = props;
  const { dispatch } = useContext(CartContext);
  const itemRef = useRef();

  return (
    <ProductDisplay>
      <ImageHolder>
        <Image src={image} alt={altText} />
      </ImageHolder>
      <div className='product-details'>
        <div className='product-title'>
          <h1>{name}</h1>
        </div>
        <div className='product-description'>
          <h3>{description}</h3>
        </div>
        <PriceAndCart>
          <div className='product-price'>
            <Price>{formatter.format(price)}</Price>
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
        </PriceAndCart>
      </div>
    </ProductDisplay>
  );
};

export default ProductPage;

const ProductDisplay = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  column-gap: 32px;
  row-gap: 16px;
  grid-auto-columns: auto;
  margin: 0px 200px 0px 200px;
  margin-top: 70px;
  @media (max-width: 700px) {
    margin: 70px 16px 0px 16px;
  }
`;

const ImageHolder = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

const Image = styled.img`
  max-height: 50vh;
  object-fit: scale-down;
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

const PriceAndCart = styled.div`
  display: flex;
  flex-align: row;
  justify-content: space-around;
  margin-bottom: 15px;
`;

const Price = styled.h1`
  margin: 0px;
`;
