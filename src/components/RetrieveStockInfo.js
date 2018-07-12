import React, {Component} from 'react';


class RetrieveStockInfo extends React.Component {
  constructor(props) {
    super(props);
    this.numOfApiCalls=0;
    this.state = {
      error: null,
      isLoaded: false,
      data: []
    };
  }

  componentDidMount() {

    fetch('https://api.iextrading.com/1.0/stock/market/batch?symbols=msft&types=quote&last=5')
      .then(
      this.numOfApiCalls++
    )
      .then(res => res.json())
      .then(
        (result) => {
          this.setState({
            isLoaded: true,
            data: result
          });
        },
        // Note: it's important to handle errors here
        // instead of a catch() block so that we don't swallow
        // exceptions from actual bugs in components.
        (error) => {
          this.setState({
            isLoaded: true,
            error
          });
        }
      );
      console.log(this.numOfApiCalls);
  }

  render() {
    this.numOfApiCalls++
    const { error, isLoaded, data } = this.state;
    if (error) {
      return <div>Error: {error.message}</div>;
    } else if (!isLoaded) {
      return <div>Loading...</div>;
    } else {
      return (
        // console.log(data["AAPL"].quote.companyName),
        <ul>
          {Object.keys(data).map((stock) => {
            console.log(data[stock]);
            return <li key={data[stock].quote.symbol}>
              {data[stock].quote.symbol}<br/>
              {data[stock].quote.companyName}<br/>
              {data[stock].quote.sector}<br/>
              {data[stock].quote.latestPrice}<br/>
            </li>;
          })}
        </ul>
      );
    }
  }
}

export default RetrieveStockInfo;
