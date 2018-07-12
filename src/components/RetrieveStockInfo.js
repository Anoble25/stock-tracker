import React, {Component} from 'react';


class RetrieveStockInfo extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      error: null,
      isLoaded: false,
      data: []
    };
  }

  componentDidMount() {
    fetch('https://api.iextrading.com/1.0/stock/market/batch?symbols=aapl&types=quote&last=5')
      .then(res => res.json())
      .then(
        (result) => {
          this.setState({
            isLoaded: true,
            data: result.AAPL.quote
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
  }

  render() {
    const { error, isLoaded, data } = this.state;
    if (error) {
      return <div>Error: {error.message}</div>;
    } else if (!isLoaded) {
      return <div>Loading...</div>;
    } else {
      return (
        console.log(data),
        <ul>
            <li key={data.symbol}>
              {data.companyName} {data.sector}
            </li>
        </ul>
      );
    }
  }
}

export default RetrieveStockInfo;
