import './polyfill';
import React from 'react';
import { render } from 'react-dom'
import { Provider } from 'react-redux';
import App from './containers/App';
import configureStore from './store/configureStore';

// The Store is the object that brings them together.
// The responsibilities:
//  - Holds application state
//  - Allows access to state via `getState()`
//  - Allows state to be updated via `dispatch(action)`
//  - Registers listeners via `subscribe(listener)`
const store = configureStore();

// Every time the state changes, log it
let unsubscribe = store.subscribe(() =>
  console.log(store.getState())
)

render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
);
