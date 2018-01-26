import React from 'react';
import ReactDOM from 'react-dom';
import 'semantic-ui-css/semantic.min.css';
import 'bootstrap/dist/css/bootstrap.css';
import './index.css';
import registerServiceWorker from './registerServiceWorker';
import App from './App';
import store from './store';
import { Provider } from 'react-redux';
import { AppContainer } from "react-hot-loader";

const render = Component => {
  ReactDOM.render(
    <AppContainer>
      <Provider store={store}>
        <Component />
      </Provider>
    </AppContainer>,
  document.getElementById('root'));
}

render(App);

if (module.hot) {
  module.hot.accept('./App', () => {
    render(App);
  })
}
  
registerServiceWorker();
