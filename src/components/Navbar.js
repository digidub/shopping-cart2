import React from 'react';
import { NavLink } from 'react-router-dom';
import styled from 'styled-components';
import CartNavDisplay from './CartNavDisplay';

const Navbar = () => {
  return (
    <NavBar>
      <NavLinks>
        <li>
          <NavLink to='/'>Home</NavLink>
        </li>
        <li>
          <NavLink to='/products'>Products</NavLink>
        </li>
        <li>
          <NavLink to='/cart'>
            <CartNavDisplay />
          </NavLink>
        </li>
      </NavLinks>
    </NavBar>
  );
};

export default Navbar;

const NavBar = styled.div`
  background-color: grey;
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
