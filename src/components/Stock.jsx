import React from 'react';
import PropTypes from 'prop-types';

function Stock(props){
  return (
    <div>
      <h3>{props.stockSymbol}</h3>
      <h4>{props.lastUpdated}</h4>
      
      <hr/>
    </div>
  );
}


Stock.propTypes = {
  stockSymbol: PropTypes.string.isRequired,
  companyName: PropTypes.string.isRequired,
  primaryExchange: PropTypes.string,
  sector: PropTypes.string,
  latestPrice: PropTypes.string,
  lastUpdated: PropTypes.string.isRequired,
};

export default Stock;
