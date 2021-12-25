import React from 'react';

import ReactDOM from 'react-dom';
// import App from './App.js';
import { BrowserRouter as Router } from 'react-router-dom';
import { Routes } from './routes'; // where we are going to specify our routes
import './index.css';
import './App.css'

ReactDOM.render(
  <Router>
    <Routes />
  </Router>,
  document.getElementById('root')
);

// import React from 'react';
// import ReactDOM from 'react-dom';
// import App from './App';
// import reportWebVitals from './reportWebVitals';

// ReactDOM.render(
//   <React.StrictMode>
//     <App />
//   </React.StrictMode>,
//   document.getElementById('root')
// );

// // If you want to start measuring performance in your app, pass a function
// // to log results (for example: reportWebVitals(console.log))
// // or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
// reportWebVitals();
