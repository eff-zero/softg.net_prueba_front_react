import React from 'react';
import ReactDOM from 'react-dom/client';
import { HashRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import { store } from './app/store';
import App from './App';
import CustomToast from './components/CustomToast';
import Loader from './components/Loader';
import * as bootstrap from 'bootstrap';
import './index.scss';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <HashRouter>
      <Provider store={store}>
        <App />
        <CustomToast />
        <Loader />
      </Provider>
    </HashRouter>
  </React.StrictMode>,
);
