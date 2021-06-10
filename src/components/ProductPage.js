import React, { Fragment } from 'react';
import { useLocation, useParams } from 'react-router';

const ProductPage = () => {
  let { id } = useParams();
  const location = useLocation();
  const { props } = location.state;
  const { image, altText, name, price, description } = props;

  return (
    <Fragment>
      <div className='product-display'>
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
        </div>
      </div>
    </Fragment>
  );
};

export default ProductPage;
