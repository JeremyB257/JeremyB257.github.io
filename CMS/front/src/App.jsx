import React from 'react';
import { HashRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Products from './pages/products/Products';
import Collections from './pages/collections/Collections';
import Orders from './pages/Orders';
import Pages from './pages/Pages';
import Customers from './pages/Customers';
import NewCollection from './pages/collections/NewCollection';
import NewProduct from './pages/products/NewProduct';

const App = () => {
  return (
    <HashRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/home" element={<Home />} />
        <Route path="/products" element={<Products />} />
        <Route path="/newproduct" element={<NewProduct />} />
        <Route path="/collections" element={<Collections />} />
        <Route path="/newcollection" element={<NewCollection />} />
        <Route path="/orders" element={<Orders />} />
        <Route path="/pages" element={<Pages />} />
        <Route path="/customers" element={<Customers />} />
        <Route path="*" element={<Home />} />
      </Routes>
    </HashRouter>
  );
};

export default App;
