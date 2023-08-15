
import React from 'react';
import { useHistory } from 'react-router-dom';
import '../Styles/Footer.css';

function Footer() {
  const history = useHistory();
  return (
    <footer className="footer-container" data-testid="footer">
      <button
        type="button"
        className="drinks-btn"
        data-testid="drinks-bottom-btn"
        onClick={ () => history.push('/drinks') }
      />
      <button
        type="button"
        className="foods-btn"
        data-testid="food-bottom-btn"
        onClick={ () => history.push('/foods') }
      />
    </footer>
  );
}

export default Footer;
