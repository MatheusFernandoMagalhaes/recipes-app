/* eslint-disable jsx-a11y/control-has-associated-label */
import React, { useContext } from 'react';
import Context from '../Context/Context';
import FoodsIcon from '../images/foods.svg';
import '../Styles/FoodsCard.css';
import SearchBar from './SearchBar';

function FoodsCard() {
  const { showInputPlace } = useContext(Context);

  return (
    <div className="meals-wrapper">
      <img src={ FoodsIcon } alt="meals icon" className="meals" />
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
export default FoodsCard;
