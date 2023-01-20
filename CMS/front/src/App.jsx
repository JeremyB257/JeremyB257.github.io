import React from 'react';
import { Outlet } from 'react-router-dom';
import Navbar from './components/Navbar';
import Header from './components/Header';

const App = () => {
  return (
    <>
      <Navbar />
      <Header />
      <Outlet />
    </>
  );
};

export default App;
