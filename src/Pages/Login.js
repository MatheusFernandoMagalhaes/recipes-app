import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import Logo from '../images/logo_Recipes_App.svg';
import Tomates from '../images/tomate.svg';
import '../Styles/Login.css';

function Login() {
  const [form, setForm] = useState({
    email: '',
    password: '',
  });
  const [disabled, setDisabled] = useState(true);

  useEffect(() => {
    const validateEmail = /^\w+([-+.]\w+)*@\w+([-.]\w+)*\.\w+([-.]\w+)*$/gi;
    const minPassword = 7;
    if (validateEmail.test(form.email) && form.password.length >= minPassword) {
      setDisabled(false);
    } else {
      setDisabled(true);
    }
  }, [form.email, form.password, form]);

  function handleChange({ target }) {
    const { name, value } = target;
    setForm({ ...form, [name]: value });
  }

  function handleSubmit() {
    localStorage.setItem('user', JSON.stringify({ email: form.email }));

    localStorage.setItem('mealsToken', JSON.stringify(1));
    localStorage.setItem('cocktailsToken', JSON.stringify(1));
  }

  return (
    <div id="login-content">
      <img src={ Logo } alt="Logo" id="logo" />
      <div className="tomate-wrapper">
        <img src={ Tomates } alt="Tomates" id="tomates" />
      </div>
      <p className="login-title">Login</p>
      <div className="inputs-wrapper">
        <input
          className="login-input"
          type="email"
          placeholder="Email"
          data-testid="email-input"
          name="email"
          value={ form.email }
          onChange={ handleChange }
        />
        <input
          className="login-input"
          type="password"
          placeholder="Password"
          data-testid="password-input"
          name="password"
          value={ form.password }
          onChange={ handleChange }
        />
      </div>
      <Link to="/foods" className="login-btn">
        <button
          type="button"
          className="login-btn"
          data-testid="login-submit-btn"
          disabled={ disabled }
          onClick={ handleSubmit }
        >
          Enter
        </button>
      </Link>
    </div>
  );
}

export default Login;
