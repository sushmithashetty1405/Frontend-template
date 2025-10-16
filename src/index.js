import React from 'react';
import ReactDOM from 'react-dom/client';
import './styles.css'; // This imports the CSS file we just created
import App from './App';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);