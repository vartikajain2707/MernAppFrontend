import React from 'react';
import { useHistory } from 'react-router-dom';
import './Profile.css';
import firebase from 'firebase';

import Navbar from '../Navbar/Navbar';

const Profile = () => {
     const history = useHistory();

     const signout = (e) => {
          e.preventDefault();
          firebase.auth().signOut();
          history.push("/signin");
     }

     return (
          <div>
               Profile Works!
               <button onClick={signout}> Logout </button>
               <Navbar />
          </div>
     );
}

export default Profile;