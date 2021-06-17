import React, { Fragment } from 'react';
import useFetch from './useFetch';
import styled from 'styled-components';
import { Loading, Error, Data } from './ProductFetchMap';

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
