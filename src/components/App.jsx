import React from 'react';
import Header from './Header';
import StockList from './StockList';
import NewStockControl from './NewStockControl';
import Error404 from './Error404';
import { Switch, Route } from 'react-router-dom';
import Moment from 'moment';

class App extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      masterStockList: []
    };
    this.handleAddingNewStockToList = this.handleAddingNewStockToList.bind(this);
  }

  componentDidMount() {
    this.waitTimeUpdateTimer = setInterval(() =>
      this.updateStockElapsedWaitTime(),
    60000
    );
  }

  componentWillUnmount(){
    clearInterval(this.waitTimeUpdateTimer);
  }

  updateStockElapsedWaitTime() {
    console.log('check');
    let newMasterStockList = this.state.masterStockList.slice();
    newMasterStockList.forEach((stock) =>
      stock.formattedWaitTime = (stock.timeOpen).fromNow(true)
    );
    this.setState({masterStockList: newMasterStockList});
  }

  handleAddingNewStockToList(newStock){
    var newMasterStockList = this.state.masterStockList.slice();
    newStock.lastUpdated= (newStock.timeOpen).fromNow(true);
    newMasterStockList.push(newStock);
    this.setState({masterStockList: newMasterStockList});
  }

  render(){
    return (
      <div>
        <Header/>
        <Switch>
          <Route exact path='/' render={()=><StockList stockList={this.state.masterStockList} />} />
          <Route path='/newstock' render={()=><NewStockControl onNewStockCreation={this.handleAddingNewStockToList} />} />
          <Route component={Error404} />
        </Switch>
      </div>
    );
  }

}

export default App;
