import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import './styles/index.scss';
import { HashRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Products from './pages/products/Products';
import Collections from './pages/collections/Collections';
import Orders from './pages/Orders';
import Pages from './pages/Pages';
import Customers from './pages/Customers';
import NewCollection from './pages/collections/NewCollection';
import NewProduct from './pages/products/NewProduct';
import NotFound from './pages/NotFound';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <HashRouter>
      <Routes>
        <Route path="/" element={<App />}>
          <Route index element={<Home />} />
          <Route path="/produits/listeProduits" element={<Products />} />
          <Route path="/produits/listeProduits/nouveauProduit" element={<NewProduct />} />
          <Route path="/produits/listeCollections" element={<Collections />} />
          <Route path="/produits/listeCollections/nouvelleCollection" element={<NewCollection />} />
          <Route path="/commandes" element={<Orders />} />
          <Route path="/pages" element={<Pages />} />
          <Route path="/clients" element={<Customers />} />
          <Route path="*" element={<NotFound />} />
        </Route>
      </Routes>
    </HashRouter>
  </React.StrictMode>
);
