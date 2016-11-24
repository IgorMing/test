import React, { Component } from 'react';
import { withRouter } from 'react-router';
import { FormattedDate } from 'react-intl';
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
      <tr>
        <td>
          Fund: {fund_id}
        </td>
        <td>
          Shares: {shares}
        </td>
        <td>
          Date: {
            <FormattedDate
              value={new Date()}
              year="numeric"
              month="numeric"
              day="numeric"
            />
          }
        </td>
        <td>
          Kind: {kind}
        </td>
        <td>
          <button
            className="waves-effect waves-light btn"
            onClick={this.handleEdit}
          >
            Edit
            <i className="material-icons right">edit</i>
          </button>
          <button
            className="waves-effect waves-light btn red"
            onClick={this.handleDelete}
          >
            Delete
            <i className="material-icons right">delete</i>
          </button>
        </td>
      </tr>
    );
  }
}

export default connect(null, { deleteTrade })(withRouter(Trade));
