import React, { Component } from 'react';
import { connect } from 'react-redux';
import { getTradeById } from '../actions/trades';

class ManageTrades extends Component {
  constructor() {
    super();

    this.handleBack = this.handleBack.bind(this);
  }

  handleBack() {
    console.log(this.props);
    this.props.router.goBack();
  }

  componentWillMount() {
    const { id } = this.props.params;

    if (id) {
      this.props.getTradeById(id);
    }
  }

  componentDidUpdate() {
    const { trades } = this.props;
    const { date, fund_id, kind, shares } = trades;

    this.refs.date.value = date;
    this.refs.fund.value = fund_id;
    this.refs.shares.value = shares;
    this.refs.kind.value = kind;
  }

  render() {
    return (
      <div>
        <div>
          <span>Fund</span>
          <input ref="fund" />
        </div>
        <div>
          <span>Date</span>
          <input type="date" ref="date" />
        </div>
        <div>
          <span>Shares</span>
          <input ref="shares" />
        </div>
        <div>
          <span>Kind</span>
          <input type="number" ref="kind" />
        </div>
        <button>Save</button>
        <button onClick={this.handleBack}>Back</button>
      </div>
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

export default connect(mapStateToProps, { getTradeById })(ManageTrades);
