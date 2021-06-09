import React from 'react';
import { useParams } from 'react-router';

const ProductPage = (props) => {
  let { id } = useParams();

  return <p>Hi I am {id}</p>;
};

export default ProductPage;
