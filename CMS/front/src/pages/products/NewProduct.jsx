import React from 'react';
import Header from '../../components/Header';
import Navbar from '../../components/Navbar';

const NewProduct = () => {
  return (
    <>
      <Navbar productMenu="true" />
      <Header breadcrumbs={['Theme', 'Produits', 'Les Produits', 'Nouveau Produit']} />
      <main>
        <div>New product</div>
      </main>
    </>
  );
};

export default NewProduct;
