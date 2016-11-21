import React, { Component } from 'react';
import { connect } from 'react-redux';
import { browserHistory } from 'react-router';
import { getTradeById, insertTrade, updateTrade } from '../actions/trades';

class ManageTrades extends Component {
  constructor() {
    super();

    this.handleBack = this.handleBack.bind(this);
    this.submitClick = this.submitClick.bind(this);
  }

  handleBack() {
    browserHistory.goBack();
  }

  componentWillMount() {
    const { id } = this.props.params;

    if (id) {
      this.props.getTradeById(id);
    }
  }

  componentDidUpdate() {
    const { trades } = this.props;
    const { date, fund_id, kind, shares } = trades.tradeById;

    this.refs.date.value = date;
    this.refs.fund.value = fund_id;
    this.refs.shares.value = shares;
    this.refs.kind.value = kind;
  }

  submitClick(event) {
    event.preventDefault();
    const { id } = this.props.params;
    const { date, fund, shares, kind } = this.refs;
    const myObj = {
      trade: {
        date: date.value,
        fund: fund.value,
        kind: kind.value,
        shares: shares.value,
      }
    };

    if (id) {
      this.props.updateTrade(id, myObj);

      return;
    }

    this.props.insertTrade(myObj)
  }

  render() {
    const { params } = this.props;
    const btnText = params.id ? 'Save' : 'Add';

    return (
      <form onSubmit={this.submitClick} className="container">
        <h3>Manage my trade</h3>
        <div>
          <span>Fund</span>
          <input type="number" ref="fund" required/>
        </div>
        <div>
          <span>Date</span>
          <input type="date" ref="date" required/>
        </div>
        <div>
          <span>Shares</span>
          <input ref="shares" required/>
        </div>
        <div>
          <span>Kind</span>
          <input type="number" ref="kind" required/>
        </div>
        <button
          type="submit"
          className="waves-effect waves-light btn"
        >
          {btnText}
        </button>
        <button
          className="waves-effect waves-light btn grey"
          onClick={this.handleBack}
        >
          Back
        </button>
      </form>
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

export default connect(mapStateToProps, {
  getTradeById,
  insertTrade,
  updateTrade,
})(ManageTrades);
