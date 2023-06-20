import React, { useContext, useEffect } from 'react';
import FoodsCard from '../Components/FoodsCard';
import Footer from '../Components/Footer';
import Header from '../Components/Header';
import Recipes from '../Components/Recipes';
import Context from '../Context/Context';

function Foods() {
  const { setSearchButton, setTitle } = useContext(Context);

  useEffect(() => {
    setSearchButton(true);
    setTitle('Foods');
  }, [setSearchButton, setTitle]);

  return (
    <>
      <Header />
      <FoodsCard />
      <Recipes />
      <Footer />
    </>
  );
}

export default Foods;
