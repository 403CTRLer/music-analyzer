import ReactDOM from 'react-dom'
import {Provider} from 'react-redux'
import store from 'store'
import App from 'components/App'
import React from 'react';

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.querySelector('#root'),
)
