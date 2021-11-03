import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { Provider } from 'react-redux';
import store from './Redux/Store';
import Layout from './Container/Layout';

ReactDOM.render(
  <React.StrictMode>
      <Provider store={store}>
     <Layout>
        <App />
      </Layout>
  </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);
reportWebVitals();
