import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import {RealApp} from './realApp.js';
import reportWebVitals from './reportWebVitals';
import 'semantic-ui-css/semantic.min.css'
import {Provider} from 'react-redux'
import {createStore, applyMiddleware, compose} from 'redux'
import reducers from './reducers/reducers'

const composeEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(
  reducers,
  composeEnhancer(applyMiddleware()) );
ReactDOM.render(
  <Provider store={store}>
    <RealApp />
  </Provider>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
