import React from 'react';
import { Link } from 'react-router-dom';
import stockGraphic from '../assets/images/stockgraphic.jpg';

function Header(){
  var stockGraphicStyle = {
    width: '200px'
  };
  return (
    <div>
      <img style={stockGraphicStyle} src={stockGraphic}/>
      <h1>Stock Tracker</h1>
      <Link to="/">Home</Link> | <Link to="/newstock">Create new stock list</Link>
    </div>
  );
}

export default Header;
