import React from 'react';
import Logo from '../images/logo_Recipes_App.svg';
import Tomates from '../images/tomate.svg';
import '../Styles/Login.css';

function Login() {
  return (
    <div id="login-content">
      <img src={ Logo } alt="Logo" id="logo" />
      <img src={ Tomates } alt="Tomates" id="tomates" />
      <h1>Login</h1>
      <input type="email" placeholder="Email" />
      <input type="password" placeholder="Password" />
      <button type="button" id="login-btn">Enter</button>
    </div>
  );
}

export default Login;
