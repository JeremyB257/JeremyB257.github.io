import React from 'react';
import Header from '../components/Header';
import Navbar from '../components/Navbar';

const Orders = () => {
  return (
    <>
      <Navbar />
      <Header breadcrumbs={['Theme', 'Commandes']} />
      <main>
        <h1>Comandes</h1>
      </main>
    </>
  );
};

export default Orders;
