import React, { useRef } from 'react';

const ProductCard = (props) => {
  const itemRef = useRef();
  const priceRef = useRef();
  const { image, altText, name, price } = props;

  return (
    <div className='product-card'>
      <div className='product-image'>
        <img src={image} alt={altText} />
      </div>
      <div className='product-info'>
        <div className='product-name'>{name}</div>
        <div className='product-price' ref={priceRef}>
          £{price}
        </div>
      </div>
      <input type='number' min='1' defaultValue={1} ref={itemRef} />
      <input type='submit' value='Add to Cart' />
    </div>
  );
};

export default ProductCard;
