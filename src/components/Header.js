import React from 'react';
import { Link } from 'react-router-dom';
import '../css/header.css';

function Header() {
  return (
    <div className="header">
      <h1>Math Magicians</h1>
      <nav>
        <Link className="links" to="/math-magicians">Home</Link>
        <Link className="links center" to="/calculator">Calculator</Link>
        <Link className="links" to="/quote">Quote</Link>
      </nav>
    </div>
  );
}

export default Header;
