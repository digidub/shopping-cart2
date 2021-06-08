import React, { useRef } from 'react';

const ProductCard = (props) => {
  const itemRef = useRef();
  const priceRef = useRef();

  return (
    <div className='product-card'>
      <div className='product-image'>
        <img src={props.image} alt={props.altText} />
      </div>
      <div className='product-info'>
        <div className='product-name'>{props.name}</div>
        <div className='product-price' ref={priceRef}>
          £{props.price}
        </div>
      </div>
      <input type='number' min='1' defaultValue={1} ref={itemRef} />
      <input type='submit' value='Add to Cart' />
    </div>
  );
};

export default ProductCard;
