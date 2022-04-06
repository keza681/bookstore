import React from 'react';
import ReactDOM from 'react-dom';
import { Provider} from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import store from './Redux/configureStore';
import './index.css';
import App from './App';

ReactDOM.render(
  <BrowserRouter>
    <Provider >
      <App />
    </Provider>
  </BrowserRouter>,
  document.getElementById('root'),
);
