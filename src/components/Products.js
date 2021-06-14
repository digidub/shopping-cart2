import React, { Fragment } from 'react';
import ProductCard from './ProductCard';
import useFetch from './useFetch';
import styled from 'styled-components';
import Categories from './Categories';

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
          <Categories />
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
  display: flex;
  flex-wrap: wrap;
  margin-top: 50px;
`;
