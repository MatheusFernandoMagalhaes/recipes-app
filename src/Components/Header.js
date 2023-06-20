/* eslint-disable jsx-a11y/control-has-associated-label */
import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import Context from '../Context/Context';
import recipesApp from '../images/logo_Header_Recipes_app.svg';
import icon from '../images/ícone_Recipes_app.svg';
import '../Styles/Header.css';
import SearchBar from './SearchBar';

function FoodsHeader() {
  const { searchButton, showInputPlace,
    setShowInputPlace } = useContext(Context);

  const handleClick = () => {
    if (showInputPlace) {
      setShowInputPlace(false);
    } else {
      setShowInputPlace(true);
    }
  };

  return (
    <header className="header-container">
      <div className="backgroundHeader">
        <div className="icons-wrapper">
          <img src={ icon } alt="purple table touch" className="icon" />
          <img src={ recipesApp } alt="Recipes App" className="recipes-app" />
        </div>
        <div className="buttons-wrapper">
          {searchButton && (<button
            type="button"
            className="search-btn"
            data-testid="search-top-btn"
            onClick={ handleClick }
          />)}
          <Link to="profile">
            <button
              type="button"
              className="perfil-btn"
              data-testid="profile-top-btn"
            />
          </Link>
        </div>
      </div>
      { showInputPlace && <SearchBar />}
    </header>
  );
}

export default FoodsHeader;
