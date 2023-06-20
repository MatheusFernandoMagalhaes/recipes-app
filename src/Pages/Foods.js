import React, { useContext, useEffect } from 'react';
import FoodsOrDrinksCard from '../Components/FoodsOrDrinksCard';
import Footer from '../Components/Footer';
import Header from '../Components/Header';
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
      <FoodsOrDrinksCard />
      <Footer />
    </>
  );
}

export default Foods;
