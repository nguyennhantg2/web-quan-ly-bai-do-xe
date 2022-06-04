import React from 'react';
import { createRoot } from 'react-dom/client';
import Home from './Component/Home/index.js';
import HomeIndex from './ComponentHome/index.js';
import './index.css';
import { BrowserRouter } from 'react-router-dom';
import { Switch } from 'react-router-dom';
import { Router, Route } from 'react-router';
import reportWebVitals from "./reportWebVitals";

// const root = ReactDOM.createRoot(document.getElementById('root'));

const rootElement = document.getElementById("root");
const root = createRoot(rootElement);


root.render(
  <BrowserRouter>
    <Switch>
      <Router path="/home">
        <HomeIndex />
      </Router>
      <Router path="/admin">
        <Home />
      </Router>
      <Router path="/">
        <HomeIndex />
      </Router>
    </Switch>
  </BrowserRouter>
);

reportWebVitals();