import React from 'react';
import Stock from './Stock';
import PropTypes from 'prop-types';

{/*var sampleStockList = [{
  stockSymbol: 'AAPL',
  companyName: 'Apple',
  sector:'Technology',
  latestPrice: '190.34',
  lastUpdated: 'today',
  key: '1'
}];*/}



function StockList(props){
  return (
    <div>
      <hr/>
      {props.stockList.map((stock) =>
        <Stock stockSymbol={stock.stockSymbol}
          companyName={stock.companyName}
          primaryExchange={stock.primaryExchange}
          sector={stock.sector}
          latestPrice={stock.latestPrice}
          lastUpdated={stock.lastUpdated}
          key={stock.id}/>
      )}
    </div>
  );
}

StockList.propTypes = {
  stockList: PropTypes.array
};

export default StockList;
