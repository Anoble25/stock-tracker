import React from 'react';
import { Link } from 'react-router-dom';

function Header(){
  return (
    <div>
      <h1>Stock Tracker</h1>
      <Link to="/">Home</Link> | <Link to="/newstock">Create new stock list</Link>
    </div>
  );
}

export default Header;
