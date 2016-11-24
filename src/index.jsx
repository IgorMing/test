import React from 'react';
import { render } from 'react-dom';
import { applyMiddleware, createStore } from 'redux';
import { connect, Provider } from 'react-redux';
import { IntlProvider } from 'react-intl';
import thunk from 'redux-thunk';
import reducer from './reducers';
import { browserHistory, IndexRedirect, Route, Router } from 'react-router';

import App from './containers/app';
import ManageTrades from './containers/manage-trades';

const store = createStore(reducer, applyMiddleware(thunk))

render(
  <Provider store={store}>
    <IntlProvider locale="en">
      <Router history={browserHistory}>
        <Route path="/" component={App} />
        <Route path="manage-trades(/:id)" component={ManageTrades} />
      </Router>
    </IntlProvider>
  </Provider>,
  document.querySelector('#app')
);
