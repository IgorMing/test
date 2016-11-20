import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import { applyMiddleware, createStore } from 'redux';
import thunk from 'redux-thunk';
import reducer from './reducers';

import { browserHistory, IndexRedirect, Route, Router } from 'react-router';

import App from './containers/app';
import ManageTrades from './containers/manage-trades';

const store = createStore(reducer, applyMiddleware(thunk))

render(
  <Provider store={store}>
    <Router history={browserHistory}>
      <Route path="/" component={App}>
      </Route>
      <Route path="manage-trades/:id" component={ManageTrades} />
    </Router>
  </Provider>,
  document.querySelector('#app')
);
