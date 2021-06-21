import React from 'react';
import styled from 'styled-components';
import useFetch from './useFetch';
import { Loading, Error, Data } from './ProductFetchMap';
import { Link } from 'react-router-dom';

const Home = () => {
  const limit = '4';
  const { loading, error, data } = useFetch(limit);

  return (
    <HomePage>
      <StyledLink to='/products'>
        <Heading>SHOP LATEST SEASON</Heading>
      </StyledLink>
      <Featured>Featured Products:</Featured>
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

const Featured = styled.p`
  text-align: center;
`;

const Display = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  column-gap: 32px;
  row-gap: 16px;
  grid-auto-columns: auto;
  margin: 0px 16px 0px 16px;
  margin-top: 10px;
`;

const Heading = styled.h1`
  font-size: 3em;
  margin: 10px;
  margin-left: 19px;
  color: #1a1919;
`;

const StyledLink = styled(Link)`
  text-decoration: none;

  &:focus,
  &:hover,
  &:visited,
  &:link,
  &:active {
    text-decoration: none;
  }
`;
