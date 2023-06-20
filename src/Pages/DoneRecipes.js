import React, { useContext, useEffect } from 'react';
import DoneRecipesCard from '../Components/DoneRecipesCard';
import Footer from '../Components/Footer';
import Header from '../Components/Header';
import Context from '../Context/Context';

function DoneRecipes() {
  const { setSearchButton, setTitle } = useContext(Context);

  useEffect(() => {
    setSearchButton(false);
    setTitle('Done Recipes');
  }, [setSearchButton, setTitle]);
  return (
    <>
      <Header />
      <DoneRecipesCard />
      <Footer />
    </>
  );
}

export default DoneRecipes;
