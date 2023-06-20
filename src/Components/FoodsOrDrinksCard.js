/* eslint-disable jsx-a11y/control-has-associated-label */
import React, { useContext } from 'react';
import Context from '../Context/Context';
import DrinksIcon from '../images/drinks2.svg';
import FoodsIcon from '../images/foods.svg';
import '../Styles/FoodsOrDrinksCard.css';
import SearchBar from './SearchBar';

function FoodsOrDrinksCard() {
  const { title, showInputPlace } = useContext(Context);
  const iconSrc = title === 'Foods' ? FoodsIcon : DrinksIcon;
  const altText = title === 'Foods' ? 'Meals' : 'Drinks';

  return (
    <div className="meals-or-drinks-wrapper">
      <img src={ iconSrc } alt={ altText } className="meals-or-drinks" />
      { showInputPlace && <SearchBar />}
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
export default FoodsOrDrinksCard;
