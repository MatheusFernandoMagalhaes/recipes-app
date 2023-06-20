import React, { useContext, useEffect } from 'react';
import Footer from '../Components/Footer';
import Header from '../Components/Header';
import ProfileCard from '../Components/ProfileCard';
import Context from '../Context/Context';

function Profile() {
  const { setSearchButton, setTitle } = useContext(Context);

  useEffect(() => {
    setSearchButton(false);
    setTitle('Profile');
  }, [setSearchButton, setTitle]);
  return (
    <>
      <Header />
      <ProfileCard />
      <Footer />
    </>
  );
}

export default Profile;
