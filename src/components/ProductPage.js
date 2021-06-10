import React from 'react';
import { useLocation, useParams } from 'react-router';

const ProductPage = (props) => {
  let { id } = useParams();
  const location = useLocation();
  const { name } = location.state;

  return (
    <p>
      Hi I am {id}, {name}
    </p>
  );
};

export default ProductPage;
