import React, { Component } from 'react';

export default class ManageTrades extends Component {
  render() {
    return(
      <form>
        <div>
          <input required />
        </div>
        <div>
          <input type="date" required />
        </div>
        <div>
          <input required />
        </div>
        <div>
          <input type="number" required />
        </div>
        <button>Save</button>
      </form>
    );
  }
}
