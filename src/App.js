import React from 'react';
import './App.css';

import { BrowserRouter as Router, Route } from 'react-router-dom';

import Login from './Components/Login/Login';

function App() {
  return (
    <Router>
        <Route path='/signin' exact component={ Login } />
    </Router>
  );
}

export default App;