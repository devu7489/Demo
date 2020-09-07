import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import 'bootstrap/dist/css/bootstrap.css';
import 'font-awesome/css/font-awesome.min.css';
import getAppStore from './store/store';
import { Provider } from 'react-redux';
 
const store = getAppStore();

const template = (
    <Provider store={store}>
        <App />
    </Provider>
);

ReactDOM.render(template, document.getElementById('root'));