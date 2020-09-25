import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux'
// import './index.css';
import CssBaseline from '@material-ui/core/CssBaseline';
import App from './components/App';
import { getStore } from './store'
import * as serviceWorker from './serviceWorker';

ReactDOM.render(
  <Provider store={getStore()}>
    <CssBaseline />
    <App />
  </Provider>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
