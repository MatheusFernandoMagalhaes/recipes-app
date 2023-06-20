import React, { useContext, useEffect } from 'react';
import Footer from '../Components/Footer';
import Header from '../Components/Header';
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
      <Footer />
    </>
  );
}

export default Drinks;
