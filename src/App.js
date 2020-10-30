import React, { useEffect, useState } from 'react';
import './App.css';

import { BrowserRouter as Router } from 'react-router-dom';

import Cart from './Components/Cart/Cart';
import Home from './Components/Home/Home';
import Login from './Components/Login/Login';
import Menu from './Components/Menu/Menu';
import Profile from './Components/Profile/Profile';
import Search from './Components/Search/Search';
import Stripe from './Components/Cart/Stripe';

import app from './Components/Firebase/Firebase';
import ProtectedRoute from './Components/Firebase/ProtectedRoute';
import AuthenticatedRoute from './Components/Firebase/AuthenticatedRoute';
import { AuthProvider } from './Components/Firebase/Auth';

function App() {
  const [user, setUser] = useState([]);
  useEffect(() => {
    app.auth().onAuthStateChanged((user) => {
      if(user) {
        setUser(user);
      }
    })
  })
  return (
    <AuthProvider>
      <Router>
          <ProtectedRoute path='/cart' exact component={ Cart } />
          <ProtectedRoute path='/' exact component={ Home } />
          <ProtectedRoute path='/home' exact component={ Home } />
          <AuthenticatedRoute path='/signin' exact component={ Login } />
          <ProtectedRoute path='/shop/:id' exact component={ Menu } />
          <ProtectedRoute path={ "/"+user.uid } exact component={ Profile } />
          <ProtectedRoute path='/search' exact component={ Search } />
          <ProtectedRoute path='/payment' exact component={ Stripe } />
      </Router>
    </AuthProvider>
  );
}

export default App;