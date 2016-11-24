import React, { Component } from 'react';
import { connect } from 'react-redux';

class App extends Component {
  render() {
    console.log(this.props);
    return(
      <div className="container">
        <h2>Magnetis</h2>
        {this.props.children}
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
  return { intl: state.intl };
};

export default connect(mapStateToProps)(App);
