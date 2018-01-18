import React from 'react';
import { render } from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import App from './App';
import 'bootstrap/dist/css/bootstrap.css';
import './index.css';

render((
    <div className="webPage">
    <BrowserRouter>
      <App />
    </BrowserRouter>
    </div>
  ), document.getElementById('root'));