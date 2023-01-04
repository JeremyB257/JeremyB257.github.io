import React from 'react';
import Header from '../components/Header';
import Navbar from '../components/Navbar';

const Home = () => {
  return (
    <>
      <Navbar />
      <Header breadcrumbs={['Accueil']} />
      <main>
        <h1>Accueil</h1>
      </main>
    </>
  );
};

export default Home;
