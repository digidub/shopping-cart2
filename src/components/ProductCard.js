import React, { useRef } from 'react';
import styled from 'styled-components';

const ProductCard = (props) => {
  const itemRef = useRef();
  const priceRef = useRef();
  const { image, altText, name, price } = props;

  return (
    <Card>
      <div className='product-image'>
        <Image src={image} alt={altText} />
      </div>
      <ProductInfo>
        <div className='product-name'>{name}</div>
        <div className='product-price' ref={priceRef}>
          £{price}
        </div>
      </ProductInfo>
      <input type='number' min='1' defaultValue={1} ref={itemRef} />
      <AddToCart type='submit' value='Add to Cart' />
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

const Image = styled.img`
  max-width: 100%;
  height: 200px;
`;

const ProductInfo = styled.div`
  margin-top: auto;
`;

const AddToCart = styled.input`
  background: white;
  border-radius: 3px;
  border: 2px solid palevioletred;
  color: palevioletred;
  margin: 0 1em;
  padding: 0.25em 1em;
`;
