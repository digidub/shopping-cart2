import React, { useContext, useRef } from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { CartContext } from './CartContext';

const ProductCard = (props) => {
  const itemRef = useRef();
  const { id, image, altText, name, price } = props;
  const { dispatch } = useContext(CartContext);

  return (
    <Card>
      <ImageContainer>
        <Link to={{ pathname: `/products/${id}`, state: { props } }}>
          <Image src={image} alt={altText} />
        </Link>
      </ImageContainer>
      <ProductInfo>
        <ProductName>{name}</ProductName>
        <div className='product-price'>£{price}</div>
      </ProductInfo>
      <CartController>
        <Quantity type='number' min='1' defaultValue={1} ref={itemRef} />
        <AddToCart
          type='submit'
          value='Add to Cart'
          onClick={() => {
            dispatch({
              type: 'increment',
              quantity: parseInt(itemRef.current.value),
              cost: parseFloat(props.price),
              item: {
                id: props.id,
                name: props.name,
                image: props.image,
                price: props.price,
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
  flex: 1 16%;
  margin: 2%;
  display: flex;
  flex-direction: column;
`;

const ImageContainer = styled.div`
  display: flex;
  justify-content: center;
`;

const Image = styled.img`
  max-width: 95%;
  height: 200px;
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

const CartController = styled.div`
  display: flex;
  flex-align: row;
  justify-content: center;
`;

const Quantity = styled.input`
  width: 25px;
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
