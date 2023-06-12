import React from 'react';
import DessertIcon from '../images/Dessert.svg';
import Banner from '../images/Foods_banner.svg';
import LikeIcon from '../images/like.svg';
import ShareIcon from '../images/Share.svg';
import Recommended from '../images/teste_Recommended.svg';
import '../Styles/FoodsDetails.css';

function FoodsDetails() {
  return (
    <div className="foods-details-container">
      <div className="foods-details">
        <img src={ Banner } alt="Foods banner" className="banner" />
        <p className="food-name">Chelsea Buns</p>
        <img src={ DessertIcon } alt="Desert Icon" className="dessert-icon" />
        <div className="like-share-icons">
          <img src={ ShareIcon } alt="Share Icon" />
          <img src={ LikeIcon } alt="Like Icon" />
        </div>
      </div>
      <div className="food-details-block">
        <p>Ingredients</p>
        <ul className="ingredients-list">
          <li>
            • Lorem ipsum1 dolor sit amet
          </li>
          <li>
            • Lorem ipsum2 dolor sit amet
          </li>
          <li>
            • Lorem ipsum3 dolor sit amet
          </li>
          <li>
            • Lorem ipsum4 dolor sit amet
          </li>
        </ul>
      </div>
      <div className="food-details-block">
        <p>Instructions</p>
        <div className="instructions">
          <p>
            Lorem ipsum dolor sit amet, ondim Morbi dicdit non. Phasellus non pretium sem.
          </p>
          <p>In porttitor ris malesuada, efficlaoreet l in.cumsan arcu ut facilisis.</p>
        </div>
      </div>
      <div className="food-details-block">
        <p>Video</p>
        <img src={ Banner } className="video" alt="video" />
      </div>
      <div className="food-details-block">
        <p>Recomended</p>
        <div className="recommended-wrapper">
          <div className="recommended-content">
            <img src={ Recommended } alt="a" className="recommended-image" />
            <p>Ice Tea</p>
          </div>
          <div className="recommended-content">
            <img src={ Recommended } alt="a" className="recommended-image" />
            <p>Ice Tea</p>
          </div>
        </div>
      </div>
      <button className="start-btn" type="button">Start Recipe</button>
    </div>
  );
}

export default FoodsDetails;
