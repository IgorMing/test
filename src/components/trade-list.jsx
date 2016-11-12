import React, { Component } from 'react';
import _ from 'lodash';

import Trade from './trade';

export default class TradeList extends Component {
  renderTrades() {
    const { trades } = this.props;

    return _.map(trades, (trade) => {
      return <Trade key={trade.id} {...trade} />;
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
