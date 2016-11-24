import React from 'react';
import { render } from 'react-dom';
import { applyMiddleware, createStore } from 'redux';
import { Provider } from 'react-redux';
import thunk from 'redux-thunk';
import { browserHistory, IndexRedirect, Route, Router } from 'react-router';
import { IntlProvider } from 'react-intl';

import reducer from './reducers';
import App from './containers/app';
import Profile from './containers/profile';
import ManageTrades from './containers/manage-trades';

const store = createStore(reducer, applyMiddleware(thunk))

render(
  <Provider store={store}>
    <IntlProvider defaultLocale="pt">
      <Router history={browserHistory}>
        <Route path="/" component={App}>
          <IndexRedirect to="profile" />
          <Route path="profile" component={Profile} />
          <Route path="manage-trades(/:id)" component={ManageTrades} />
        </Route>
      </Router>
    </IntlProvider>
  </Provider>,
  document.querySelector('#app')
);
