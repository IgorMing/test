import React, { Component } from 'react';
import { connect } from 'react-redux';
import _ from 'lodash';

import { withRouter } from 'react-router';
import Trade from './trade';

class TradeList extends Component {

  renderTrades() {
    const { trades } = this.props;

    return _.map(trades.tradeList, (trade, index) => {
      return (
        <Trade
          key={index}
          {...trade}
        />
      );
    });
  }

  render() {
    return(
      <table className="striped">
        <thead className="text-center">
          <tr>
            <th>Fund</th>
            <th>Shares</th>
            <th>Date</th>
            <th>Kind</th>
            <th>Manage</th>
          </tr>
        </thead>
        <tbody>
          {this.renderTrades()}
        </tbody>
      </table>
    );
  }
}

/**
* Convert application state to props.
* @param {Object} state - Application state
* @returns {Object} Updated props
*/
const mapStateToProps = (state) => {
  return { trades: state.trades };
};

export default connect(mapStateToProps)(withRouter(TradeList));
