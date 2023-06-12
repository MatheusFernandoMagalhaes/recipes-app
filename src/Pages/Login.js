import React from 'react';
import Logo from '../images/logo_Recipes_App.svg';
import Tomates from '../images/tomate.svg';
import '../Styles/Login.css';

function Login() {
  return (
    <div id="login-content">
      <img src={ Logo } alt="Logo" id="logo" />
      <div className="tomate-wrapper">
        <img src={ Tomates } alt="Tomates" id="tomates" />
      </div>
      <p className="login-title">Login</p>
      <div className="inputs-wrapper">
        <input className="login-input" type="email" placeholder="Email" />
        <input className="login-input" type="password" placeholder="Password" />
      </div>
      <button type="button" id="login-btn">Enter</button>
    </div>
  );
}

export default Login;
