import React from 'react';
import PropTypes from 'prop-types';

function Stock(props){
  return (
    <div>
      <h3>{props.stockSymbol}</h3>
      <h4>{props.formattedWaitTime}</h4>
      // <p><em>{props.issue}</em></p>
      <hr/>
    </div>
  );
}


Stock.propTypes = {
  stockSymbol: PropTypes.string.isRequired,
  location: PropTypes.string.isRequired,
  issue: PropTypes.string,
  formattedWaitTime: PropTypes.string.isRequired,
};

export default Stock;
