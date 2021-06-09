import React from 'react';
import { NavLink } from 'react-router-dom';
import CartNavDisplay from './CartNavDisplay';

const Navbar = () => {
  return (
    <ul>
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
    </ul>
  );
};

export default Navbar;
