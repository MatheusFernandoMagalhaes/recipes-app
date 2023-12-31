import React, { useContext, useEffect } from 'react';
import FavoriteCard from '../Components/FavoriteCard';
import Footer from '../Components/Footer';
import Header from '../Components/Header';
import Context from '../Context/Context';

function Favorites() {
  const { setSearchButton, setTitle } = useContext(Context);

  useEffect(() => {
    setSearchButton(false);
    setTitle('Favorite Recipes');
  }, [setSearchButton, setTitle]);
  return (
    <>
      <Header />
      <FavoriteCard />
      <Footer />
    </>
  );
}

export default Favorites;
