/* eslint-disable jsx-a11y/control-has-associated-label */
import React from 'react';
import FoodsIcon from '../images/foods.svg';
import '../Styles/FoodsCard.css';

function FoodsCard() {
  return (
    <div className="meals-wrapper">
      <img src={ FoodsIcon } alt="meals icon" className="meals" />
      <div className="categories">
        <button type="button" className="all-btn" />
        <button type="button" className="beef-btn" />
        <button type="button" className="goat-btn" />
        <button type="button" className="chicken-btn" />
        <button type="button" className="breakfast-btn" />
        <button type="button" className="desert-btn" />
      </div>
    </div>
  );
}
export default FoodsCard;
