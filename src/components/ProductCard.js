import React, { useContext, useRef } from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { formatter } from './AppLogic';
import { CartContext } from './CartContext';

const ProductCard = (props) => {
  const itemRef = useRef();
  const { id, image, altText, name, price, description } = props;
  const { dispatch } = useContext(CartContext);

  return (
    <Card>
      <StyledLink to={{ pathname: `/products/${id}`, state: { props } }}>
        <ImageContainer>
          <Image src={image} alt={altText} />
        </ImageContainer>
        <ProductInfo>
          <ProductName>{name}</ProductName>
          <ProductPrice>{formatter.format(price)}</ProductPrice>
        </ProductInfo>
      </StyledLink>
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
    </Card>
  );
};

export default ProductCard;

const Card = styled.div`
  border-radius: 6px;
  margin: 2%;
  display: flex;
  flex-direction: column;
  box-shadow: rgba(99, 99, 99, 0.2) 0px 2px 8px 0px;
  padding: 15px;
`;

const ImageContainer = styled.div`
  display: flex;
  justify-content: center;
  height: 200px;
  margin-bottom: 10px;
`;

const Image = styled.img`
  max-width: 100%;
  object-fit: scale-down;
`;

const ProductInfo = styled.div`
  margin-top: auto;
`;

const ProductName = styled.div`
  text-align: center;
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  overflow: hidden;
`;

const ProductPrice = styled.div`
  text-align: center;
`;

const CartController = styled.div`
  display: flex;
  flex-align: row;
  justify-content: center;
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
  &:hover {
    background: palevioletred;
    color: white;
    transition: all 0.5s ease;
  }
`;

const StyledLink = styled(Link)`
  text-decoration: none;
  margin-top: auto;
  &:focus,
  &:hover,
  &:visited,
  &:link,
  &:active {
    text-decoration: none;
  }
`;
