import React from 'react';
import styled from 'styled-components';
import useFetch from './useFetch';
import { Loading, Error, Data } from './ProductFetchMap';

const Home = () => {
  const limit = '4';
  const { loading, error, data } = useFetch(limit);

  return (
    <HomePage>
      <h1>General Store</h1>
      <h2>Shop our latest products:</h2>
      {loading && <Loading />}
      {error && <Error error={error} />}
      {data.length && (
        <Display>
          <Data products={data} />
        </Display>
      )}
    </HomePage>
  );
};

export default Home;

const HomePage = styled.div`
  margin: 0 auto;
  margin-top: 70px;
  max-width: 768px;
`;

const Display = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  column-gap: 32px;
  row-gap: 16px;
  grid-auto-columns: auto;
  margin: 0px 16px 0px 16px;
  margin-top: 20px;
`;
