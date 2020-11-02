import React from 'react';
import './Profile.css';
import ProfileCard from './ProfileCard';

import Navbar from '../Navbar/Navbar';

const Profile = () => {

     return (
          <div>
               <ProfileCard />
               <Navbar />
          </div>
     );
}

export default Profile;