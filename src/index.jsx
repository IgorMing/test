import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import { applyMiddleware, createStore } from 'redux';
import thunk from 'redux-thunk';
import reducer from './reducers';

import App from './containers/app';

const store = createStore(reducer, applyMiddleware(thunk))

render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.querySelector('#app')
);
