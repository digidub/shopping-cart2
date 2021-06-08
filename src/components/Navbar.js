import React from 'react';
import { NavLink } from 'react-router-dom';

const Navbar = () => {
  return (
    <ul>
      <li>
        <NavLink to='/'>Home</NavLink>
      </li>
      <li>
        <NavLink to='/'>Products</NavLink>
      </li>
      <li>
        <NavLink to='/'>View Cart</NavLink>
      </li>
    </ul>
  );
};

export default Navbar;
