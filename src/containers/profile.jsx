import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
// import { withRouter } from 'react-router';

import { getTrades } from '../actions/trades';
import ProfileContent from '../components/profile-content';

class Profile extends Component {
  componentWillMount() {
    this.props.getTrades();
  }

  render() {
    const { profile } = this.props;

    return(
      <ProfileContent profile={profile} />
    );
  }
}

/**
* Convert application state to props.
* @param {Object} state - Application state
* @returns {Object} Updated props
*/
const mapStateToProps = state => ({ profile: state.profile });

export default connect(mapStateToProps, { getTrades })(Profile);
