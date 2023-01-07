import React from 'react';
import Header from '../../components/Header';
import Navbar from '../../components/Navbar';

const NewCollection = () => {
  return (
    <>
      <Navbar productMenu="true" />
      <Header breadcrumbs={['Theme', 'Produits', 'Les Collections', 'Nouvelle Collections']} />
      <main>
        <div>New collec</div>
      </main>
    </>
  );
};

export default NewCollection;
