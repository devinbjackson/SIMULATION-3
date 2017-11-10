import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import Login from './Login'
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';


import store from './store';

ReactDOM.render(
    <Provider store={store}>
    
        <Login />
        
    
    </Provider>
, document.getElementById('root'));
registerServiceWorker();
