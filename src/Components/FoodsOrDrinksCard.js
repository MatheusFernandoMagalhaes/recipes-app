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
      {/* <div className="categories">
        <button type="button" className="all-btn" />
        <button type="button" className="Beef-btn" />
        <button type="button" className="Goat-btn" />
        <button type="button" className="Chicken-btn" />
        <button type="button" className="Breakfast-btn" />
        <button type="button" className="Dessert-btn" />
      </div> */}
    </div>
  );
}
export default FoodsOrDrinksCard;
