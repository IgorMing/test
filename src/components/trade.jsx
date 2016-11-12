import React, { Component } from 'react';

export default class Trade extends Component {
  formatDate(date) {
    const dateObj = new Date(date);

    return `${dateObj.getDate() + 1}/${dateObj.getMonth() + 1}/${dateObj.getFullYear()}`;
  }

  render() {
    const {
      id,
      date,
      shares,
    } = this.props;

    return(
      <div>
        <li>
          Value: {shares} ({this.formatDate(date)})
        </li>
        <button>Edit</button>
        <button>Delete</button>
      </div>
    );
  }
}
