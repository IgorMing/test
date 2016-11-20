import React, { Component } from 'react';
import _ from 'lodash';

import Trade from './trade';

export default class TradeList extends Component {
  renderTrades() {
    const { trades } = this.props;

    return _.map(trades, (trade, index) => {
      return <Trade key={index} {...trade} />;
    });
  }

  render() {
    return(
      <ul>
        {this.renderTrades()}
      </ul>
    );
  }
}
