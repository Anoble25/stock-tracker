import React from 'react';
import NewStockForm from './NewStockForm';
import PropTypes from 'prop-types';

class NewStockControl extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      formVisibleOnPage: true
    };
    this.handleTroubleshootingConfirmation = this.handleTroubleshootingConfirmation.bind(this);
  }

  handleTroubleshootingConfirmation(){
    this.setState({formVisibleOnPage: true});
  }

  render(){
    let currentlyVisibleContent = null;
    if (this.state.formVisibleOnPage){
      currentlyVisibleContent = <NewStockForm onNewStockCreation={this.props.onNewStockCreation}/>;
    }
    return (
      <div>
        {currentlyVisibleContent}
      </div>
    );
  }
}

NewStockControl.propTypes = {
  onNewStockCreation: PropTypes.func
};

export default NewStockControl;
