import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import Store from 'stores/Store';
import GlobalStyles from 'components/styles/Global';

ReactDOM.render(
  <React.StrictMode>
    <Store>
      <App />
    </Store>
  </React.StrictMode>,
  document.getElementById('root'),
);
