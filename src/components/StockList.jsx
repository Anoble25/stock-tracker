import React from 'react';
import Stock from './Stock';
import PropTypes from 'prop-types';

function StockList(props){
  return (
    <div>
      <hr/>
      {props.stockList.map((stock) =>
        <Stock stockSymbol={stock.stockSymbol}
          // location={stock.location}
          // issue={stock.issue}
          formattedWaitTime={stock.formattedWaitTime}
          key={stock.id}/>
      )}
    </div>
  );
}

StockList.propTypes = {
  stockList: PropTypes.array
};

export default StockList;
