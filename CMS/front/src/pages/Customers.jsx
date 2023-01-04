import React from 'react';
import Header from '../components/Header';
import Navbar from '../components/Navbar';

const Customers = () => {
  return (
    <>
      <Navbar />
      <Header breadcrumbs={['Theme', 'Clients']} />
      <main>
        <h1>clients</h1>
      </main>
    </>
  );
};

export default Customers;
