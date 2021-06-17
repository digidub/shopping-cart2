import React from 'react';
import { NavLink } from 'react-router-dom';
import styled from 'styled-components';
import CartNavDisplay from './CartNavDisplay';

const Navbar = () => {
  return (
    <NavBar>
      <NavLinks>
        <li>
          <StyledLink
            exact
            to='/'
            activeStyle={{
              color: 'palevioletred',
            }}
          >
            Home
          </StyledLink>
        </li>
        <li>
          <StyledLink
            exact
            to='/products'
            activeStyle={{
              color: 'palevioletred',
            }}
          >
            Products
          </StyledLink>
        </li>
        <li>
          <StyledLink
            exact
            to='/cart'
            activeStyle={{
              color: 'palevioletred',
            }}
          >
            <CartNavDisplay />
          </StyledLink>
        </li>
      </NavLinks>
    </NavBar>
  );
};

export default Navbar;

const NavBar = styled.div`
  background-color: #353434;
  position: fixed;
  top: 0;
  width: 100%;
  height: 50px;
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

const NavLinks = styled.ul`
  width: 800px;
  max-width: 800px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  max-width: 600px;
  margin: 0 auto;
  list-style-type: none;
  padding: 0px;
  @media (max-width: 700px) {
    max-width: 300px;
  }
`;

const StyledLink = styled(NavLink)`
  color: white;
  text-decoration: none;
  font-weight: 600;
  &:focus,
  &:hover,
  &:visited,
  &:link,
  &:active {
    text-decoration: none;
  }
  &:hover {
    color: palevioletred;
    transition: all 0.5s ease;
  }
`;
