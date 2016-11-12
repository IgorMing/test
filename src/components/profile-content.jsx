import React, { Component, PropTypes } from 'react';
import TradeList from './trade-list';

export default class ProfileContent extends Component {
  render() {
    const { profile } = this.props;

    return (
      <div>
        <h1>My trades</h1>
        <button>Add new trade</button>

        <TradeList trades={profile} />
      </div>
    );
  }
}

ProfileContent.propTypes = { profile: PropTypes.object.isRequired };
