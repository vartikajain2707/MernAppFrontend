import React from 'react';
import { Route, Redirect } from 'react-router-dom';
import { useAuth } from '../Context/AuthContext';

const Inner = ({ component: Component, ...rest }) => {
     const { currentUser } = useAuth();

     return (
          <Route
               { ...rest }
               render={props => {
                    return currentUser ? <Component { ...props } /> : <Redirect to="/signin" />
               }}
          ></Route>
     );
}

export default Inner;