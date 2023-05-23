/* eslint-disable jsx-a11y/control-has-associated-label */
import React from 'react';
import headerBackground from '../images/BackgroundHeader.svg';
import foodsIcon from '../images/foods.svg';
import recipesApp from '../images/logo_Header_Recipes_app.svg';
import icon from '../images/ícone_Recipes_app.svg';
import '../Styles/Foods.css';

function FoodsHeader() {
  return (
    <header>
      <div className="header-container">
        <img
          src={ headerBackground }
          alt="Yellow header background"
          className="background-image"
        />
        <img src={ icon } alt="purple table touch" className="icon" />
        <img src={ recipesApp } alt="Recipes App" className="recipes-app" />
        <button type="button" className="search-btn" />
        <button type="button" className="perfil-btn" />
        <img src={ foodsIcon } alt="meals icon" className="meals" />
        <div className="categories">
          <button type="button" className="all-btn" />
          <button type="button" className="beef-btn" />
          <button type="button" className="goat-btn" />
          <button type="button" className="chicken-btn" />
          <button type="button" className="breakfast-btn" />
          <button type="button" className="desert-btn" />
        </div>
      </div>
    </header>
  );
}

export default FoodsHeader;
