import React, { Component, PropTypes } from 'react';
import TradeList from './trade-list';
import { withRouter } from 'react-router';

class ProfileContent extends Component {
  constructor() {
    super();

    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    this.props.router.push('/manage-trades');
  }

  render() {
    return (
      <div>
        <h3>My trades</h3>

        <button
          className="waves-effect waves-light btn"
          onClick={this.handleClick}
        >
          New trade
          <i className="material-icons right">add</i>
        </button>

        <TradeList />
      </div>
    );
  }
}

export default withRouter(ProfileContent);
