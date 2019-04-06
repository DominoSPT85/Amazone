import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import 'semantic-ui-css/semantic.min.css';
import { AuthProvider } from './components/providers/AuthProvider';
import {BrowserRouter } from 'react-router-dom';

ReactDOM.render(

<AuthProvider>
  <BrowserRouter>
    <App /> 
  </BrowserRouter>
</AuthProvider>,
  document.getElementById('root')
);


// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA

