import React, { Fragment } from 'react';
import ProductCard from './ProductCard';
import useFetch from './useFetch';
import styled from 'styled-components';

const Loading = () => <p>Loading...</p>;

const Error = (error) => <p>Oops! Something went wrong: {error}</p>;

const Data = ({ products }) =>
  products.map((product) => {
    return (
      <ProductCard
        key={product.id}
        id={product.id}
        image={product.image}
        name={product.title}
        price={product.price}
        description={product.description}
      ></ProductCard>
    );
  });

const Products = () => {
  const { loading, error, data } = useFetch();

  return (
    <Fragment>
      {loading && <Loading />}
      {error && <Error error={error} />}
      {data.length && (
        <Fragment>
          <Display>
            <Data products={data} />
          </Display>
        </Fragment>
      )}
    </Fragment>
  );
};

export default Products;

const Display = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  column-gap: 32px;
  row-gap: 16px;
  grid-auto-columns: auto;
  margin: 0px 16px 0px 16px;
  margin-top: 70px;
`;
