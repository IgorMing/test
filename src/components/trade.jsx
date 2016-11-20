import React, { Component } from 'react';
import { withRouter } from 'react-router';
import { connect } from 'react-redux';
import { deleteTrade } from '../actions/trades';

class Trade extends Component {
  constructor(props) {
    super(props);

    this.handleEdit = this.handleEdit.bind(this);
    this.handleDelete = this.handleDelete.bind(this);
  }

  handleEdit() {
    const { id } = this.props;

    this.props.router.push(`/manage-trades/${id}`);
  }

  handleDelete() {
    const { id } = this.props;

      this.props.deleteTrade(id);
  }

  formatDate(date) {
    const dateObj = new Date(date);

    return `${dateObj.getDate() + 1}/${dateObj.getMonth() + 1}/${dateObj.getFullYear()}`;
  }

  render() {
    const {
      date,
      fund_id,
      id,
      kind,
      shares,
    } = this.props;

    return (
      <div>
        <div>
          Fund: {fund_id}
        </div>
        <div>
          Shares: {shares}
        </div>
        <div>
          Date: {this.formatDate(date)}
        </div>
        <div>
          Kind: {kind}
        </div>
        <button onClick={this.handleEdit}>Edit</button>
        <button onClick={this.handleDelete}>Delete</button>
      </div>
    );
  }
}

export default connect(null, { deleteTrade })(withRouter(Trade));
