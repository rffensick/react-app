import React from 'react';
import ReactDOM from 'react-dom';
import 'bootstrap/dist/css/bootstrap.css';
import './index.css';
import registerServiceWorker from './registerServiceWorker';
import App from './App';
import { articles } from './fixtures';
import store from './store';

ReactDOM.render(<App articles={articles} />, document.getElementById('root'));
registerServiceWorker();
