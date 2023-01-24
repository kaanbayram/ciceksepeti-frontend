import ReactDOM from 'react-dom';
import { App } from './App';
import './styles.css';
import { Provider } from 'react-redux';
import { setupStore } from './store/store';
import React from 'react';

const store = setupStore()
ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
)
