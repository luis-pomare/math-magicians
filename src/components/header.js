import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => (
  <header>
    <h1>Math Magicians</h1>
    <nav>
      <ul>
        <Link to="/">Home</Link>
        <Link to="/calculator" id="calculator">
          Calculator
        </Link>
        <Link to="/quote">Quote</Link>
      </ul>
    </nav>
  </header>
);

export default Header;
