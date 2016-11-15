import React, { Component } from 'react';
import { withRouter } from 'react-router';

class Trade extends Component {
  constructor(props) {
    super(props);

    this.edit = this.edit.bind(this);
  }

  edit() {
    this.props.router.push('/manage-trades');
  }

  formatDate(date) {
    const dateObj = new Date(date);

    return `${dateObj.getDate() + 1}/${dateObj.getMonth() + 1}/${dateObj.getFullYear()}`;
  }

  render() {
    const {
      date,
      id,
      shares,
    } = this.props;

    return(
      <div>
        <li>
          Value: {shares} ({this.formatDate(date)})
        </li>
        <button onClick={this.edit}>Edit</button>
        <button>Delete</button>
      </div>
    );
  }
}

export default withRouter(Trade);
