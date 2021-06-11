import React from 'react';
import { NavLink } from 'react-router-dom';
import styled from 'styled-components';
import CartNavDisplay from './CartNavDisplay';

const Navbar = () => {
  return (
    <NavBar>
      <NavLinks>
        <li>
          <StyledLink to='/'>Home</StyledLink>
        </li>
        <li>
          <StyledLink to='/products'>Products</StyledLink>
        </li>
        <li>
          <StyledLink to='/cart'>
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
`;

const NavLinks = styled.ul`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  max-width: 600px;
  margin: 0 auto;
  list-style-type: none;
`;

const StyledLink = styled(NavLink)`
  color: white;
  text-decoration: none;
  &:focus,
  &:hover,
  &:visited,
  &:link,
  &:active {
    text-decoration: none;
  }
`;
