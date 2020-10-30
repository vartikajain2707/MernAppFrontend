import React, { useEffect, useState } from 'react';
import app from './Firebase';
import './Load.css'
export const AuthContext = React.createContext();
export const AuthProvider = ({  children }) => {
     const [currentUser, setCurrentUser] = useState(null);
     const [pending, setPending] = useState(true);
     useEffect(() => {
          if (pending) {
               return (
                    <div className="spin">
                         <img src="https://samherbert.net/svg-loaders/svg-loaders/puff.svg" alt="Loading"/>
                    </div>
               )
          }
          app.auth().onAuthStateChanged((user) => {
               if (user) {
                    setCurrentUser(user);
                    setPending(false);
               }
          });
     }, [pending]);
     return (
          <AuthContext.Provider
               value={ {currentUser} }
          >
               { children }
          </AuthContext.Provider>
     );
}