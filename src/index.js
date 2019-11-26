import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { Router, Route } from 'react-router';
import { PersistGate } from 'redux-persist/integration/react';
import './assets/css/index.scss';
import history from './history';
import store, { persistor } from './store';
import App from './App';

ReactDOM.render(
  <Provider store={store}>
    <PersistGate loading={null} persistor={persistor}>
      <Router history={history}>
        <Route component={App} />
      </Router>
    </PersistGate>
  </Provider>,
  document.getElementById('root')
);
