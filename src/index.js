import React from 'react';
import ReactDOM from 'react-dom';
import 'bootstrap/dist/css/bootstrap.css';
import './index.css';
import registerServiceWorker from './registerServiceWorker';
import App from './App';
import { articles } from './fixtures';
import store from './store';
import { Provider } from 'react-redux';

ReactDOM.render(
  <Provider store={store}>
    <App articles={articles} />
  </Provider>, 
  document.getElementById('root'));
registerServiceWorker();
