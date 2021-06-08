import React from 'react';
import { NavLink } from 'react-router-dom';

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
        <NavLink to='/cart'>View Cart</NavLink>
      </li>
    </ul>
  );
};

export default Navbar;
