import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import Calcuator from './components/calculator';
import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <div>

    <h1>Calcuator</h1>
        <Calcuator/>

  </div>
  );



reportWebVitals();
