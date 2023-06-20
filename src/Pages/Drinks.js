import React, { useContext, useEffect } from 'react';
import FoodsOrDrinksCard from '../Components/FoodsOrDrinksCard';
import Footer from '../Components/Footer';
import Header from '../Components/Header';
import Recipes from '../Components/Recipe';
import Context from '../Context/Context';

function Drinks() {
  const { setSearchButton, setTitle } = useContext(Context);

  useEffect(() => {
    setSearchButton(true);
    setTitle('Drinks');
  }, [setSearchButton, setTitle]);
  return (
    <>
      <Header />
      <FoodsOrDrinksCard />
      <Recipes />
      <Footer />
    </>
  );
}

export default Drinks;
