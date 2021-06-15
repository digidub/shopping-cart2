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
  margin-bottom: auto;
  margin-top: auto;
`;

const Image = styled.img`
  max-width: 100%;
  object-fit: scale-down;
`;

const ProductInfo = styled.div`
  margin-top: auto;
  color: black;
`;

const ProductName = styled.div`
  text-align: center;
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  overflow: hidden;
  margin: 0.8rem;
`;

const ProductPrice = styled.div`
  text-align: center;
  margin: 0.8rem;
`;

const CartController = styled.div`
  ${
    '' /* display: flex;
  flex-align: row;
  justify-content: center; */
  }
  display: flex;
  justify-content: center;
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

const StyledLink = styled(Link)`
  display: flex;
  flex-direction: column;
  text-decoration: none;
  margin-bottom: auto;
  &:focus,
  &:hover,
  &:visited,
  &:link,
  &:active {
    text-decoration: none;
  }
`;
