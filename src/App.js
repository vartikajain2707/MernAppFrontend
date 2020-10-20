import React from 'react';
import './App.css';

import { BrowserRouter as Router, Route } from 'react-router-dom';

import Cart from './Components/Cart/Cart';
import Home from './Components/Home/Home';
import Login from './Components/Login/Login';
import Menu from './Components/Menu/Menu';
import Profile from './Components/Profile/Profile';
import Search from './Components/Search/Search';

function App() {
  return (
    <Router>
        <Route path='/cart' exact component={ Cart } />
        <Route path='/' exact component={ Home } />
        <Route path='/signin' exact component={ Login } />
        <Route path='/shop/:id' exact component={ Menu } />
        <Route path='/profile/:id' exact component={ Profile } />
        <Route path='/search' exact component={ Search } />
    </Router>
  );
}

export default App;