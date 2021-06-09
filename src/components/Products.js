import React from 'react';
import ProductCard from './ProductCard';
import useFetch from './useFetch';
import styled from 'styled-components';

const Loading = () => <p>Loading...</p>;

const Error = (error) => <p>Oops! Something went wrong: {error}</p>;

const Data = ({ products }) =>
  products.map((product) => {
    return <ProductCard key={product.id} id={product.id} image={product.image} name={product.title} price={product.price}></ProductCard>;
  });

const Products = () => {
  const { loading, error, data } = useFetch();

  return (
    <Display>
      {loading && <Loading />}
      {error && <Error error={error} />}
      {data.length && <Data products={data} />}
    </Display>
  );
};

export default Products;

const Display = styled.div`
  display: flex;
  flex-wrap: wrap;
`;
