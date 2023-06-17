import React from 'react';
import Check from '../images/Group_10.svg';
import Logout from '../images/Group_8.svg';
import Heart from '../images/Group_9.svg';
import ProfileIcon from '../images/Perfil.svg';
import Profile from '../images/Profile.svg';
import '../Styles/Profile.css';

function ProfileCard() {
  return (
    <div className="profile-container">
      <img src={ ProfileIcon } alt="Profile Icon" className="perfil-icon" />
      <img src={ Profile } alt="Profile" />
      <div className="email-container">
        <p>email@email.com.br</p>
      </div>
      <div className="icons-container">
        <div>
          <div className="check-container">
            <img src={ Check } alt="Yellow Check" />
            <p>Done Recipes</p>
          </div>
          <div className="line" />
          <div className="favorite-container">
            <img src={ Heart } alt="Yellow Heart" />
            <p>Favorite Recipes</p>
          </div>
          <div className="line" />
          <div className="logout-container">
            <img src={ Logout } alt="Yellow Logout" />
            <p>Logout</p>
          </div>
        </div>

      </div>

    </div>
  );
}

export default ProfileCard;
