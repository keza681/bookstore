import React from 'react';
import { Link } from 'react-router-dom';

function Navbar() {
  return (
    <nav>
      <div className="mainNav">
        <h1>My book store </h1>
        <ul className="navMenu">
          <li><Link to="/">Books</Link></li>
          <li><Link to="/categories">My Categories</Link></li>
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;
