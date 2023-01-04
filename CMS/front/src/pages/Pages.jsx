import React from 'react';
import Header from '../components/Header';
import Navbar from '../components/Navbar';

const Pages = () => {
  return (
    <>
      <Navbar />
      <Header breadcrumbs={['Theme', 'Pages']} />
      <main>
        <h1>Pages</h1>
      </main>
    </>
  );
};

export default Pages;
