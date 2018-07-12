import React from 'react';
import PropTypes from 'prop-types';
import { v4 } from 'uuid';
import Moment from 'moment';

function NewStockForm(props){
  let _stockSymbol = null;
  let _companyName = null;
  let _primaryExchange = null;
  let _sector = null;
  let _latestPrice = null;

  function handleNewStockFormSubmission(event)
  {
    event.preventDefault();
    props.onNewStockCreation({stockSymbol:_stockSymbol.value, id: v4(), timeOpen: new Moment()});
    _stockSymbol.value = '';
  }

  return (
    <div>
      <form onSubmit={handleNewStockFormSubmission}>
        <input
          type='text'
          id='stockSymbol'
          placeholder='Stock Symbol'
          ref={(input) => {_stockSymbol = input;}}/>
        {/*<input
          type='text'
          id='location'
          placeholder='Location'
          ref={(input) => {_location = input;}}/>
        <textarea
          id='issue'
          placeholder='Describe your issue.'
          ref={(textarea) => {_issue = textarea;}}/>*/}
        <button type='submit'>Add</button>
      </form>
    </div>
  );
}

NewStockForm.propTypes = {
  onNewStockCreation: PropTypes.func
};

export default NewStockForm;
