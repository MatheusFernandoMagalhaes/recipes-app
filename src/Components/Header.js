/* eslint-disable jsx-a11y/control-has-associated-label */
import React from 'react';
import recipesApp from '../images/logo_Header_Recipes_app.svg';
import icon from '../images/ícone_Recipes_app.svg';
import '../Styles/FoodsHeader.css';

function Header() {
  return (
    <header className="header-container">
      <div className="backgroundHeader">
        <div className="icons-wrapper">
          <img src={ icon } alt="purple table touch" className="icon" />
          <img src={ recipesApp } alt="Recipes App" className="recipes-app" />
        </div>
        <div className="buttons-wrapper">
          <button type="button" className="perfil-btn" />
        </div>
      </div>
    </header>
  );
}

export default Header;
