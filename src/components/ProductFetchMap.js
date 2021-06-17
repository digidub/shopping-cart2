import React from 'react';
import ProductCard from './ProductCard';

export const Loading = () => <p>Loading...</p>;

export const Error = (error) => <p>Oops! Something went wrong: {error}</p>;

export const Data = ({ products }) =>
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
