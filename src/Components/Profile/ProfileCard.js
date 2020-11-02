import React from 'react';
import './ProfileCard.css';
import { useAuth } from '../../Context/AuthContext';
import firebase from 'firebase';
import { useHistory } from 'react-router-dom';

const ProfileCard = () => {
     const history = useHistory();
     const { currentUser } = useAuth();
     const signout = (e) => {
          e.preventDefault();
          firebase.auth().signOut();
          history.push("/signin");
     }
     return (
          <div className="ProfileCard">
               <img className="userPhoto" src={currentUser.photoURL} alt={currentUser.displayName}/>
               <h1 className="userName">{currentUser.displayName}</h1>
               <h3 className="userEmail">{currentUser.email}</h3>
               <button className="logout btn" onClick={signout}>Sign Out</button>
          </div>
     )
}

export default ProfileCard;