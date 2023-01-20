import React from 'react';
import { NavLink } from 'react-router-dom';
import logo from '../img/logo.svg#full';
import logoProducts from '../img/ecommerce-price.svg';
import LogoOrders from '../img/product-shipping.svg';
import LogoCustomers from '../img/customer.svg';
import LogoPages from '../img/paper.svg';

const Navbar = () => {
  const showGroup = (e) => {
    e.target.parentNode.classList.toggle('show');
  };

  if (window.innerWidth < 768) {
    const backdrop = document.body.querySelector('.sidebar-backdrop');
    document.body.classList.add('hideSB');
    backdrop?.remove();
  }

  window.addEventListener('resize', handleWindowResize);

  function handleWindowResize() {
    if (window.innerWidth < 768) {
      document.body.classList.add('hideSB');
    } else {
      document.body.classList.remove('hideSB');
    }
  }

  return (
    <nav className="sidebar">
      <div className="sidebar-logo">
        <svg className="sidebar-brand-full" width="118" height="46" alt="CoreUI Logo">
          <use xlinkHref={logo}></use>
        </svg>
      </div>
      <ul className="sidebar-nav">
        <li className="nav-item">
          <NavLink className="nav-link" to="/">
            <i className="fa-solid fa-gauge-high nav-icon"></i>
            &nbsp;Dashboard
          </NavLink>
        </li>
        <li className="nav-title">Theme</li>
        <li id="productMenu" className="nav-group" onClick={showGroup}>
          <div className="nav-link nav-group-toggle">
            <img className="nav-icon" src={logoProducts} alt="produit" />
            &nbsp;Produits
          </div>
          <ul className="nav-group-items">
            <li className="nav-item">
              <NavLink className="nav-link" to="/produits/listeProduits">
                <span className="nav-icon"></span> Les produits
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link" to="/produits/listeCollections">
                <span className="nav-icon"></span> Les collections
              </NavLink>
            </li>
          </ul>
        </li>
        <li className="nav-item">
          <NavLink className="nav-link" to="/commandes">
            <img className="nav-icon" src={LogoOrders} alt="commandes" />
            &nbsp;Commandes
          </NavLink>
        </li>
        <li className="nav-item">
          <NavLink className="nav-link" to="/clients">
            <img className="nav-icon" src={LogoCustomers} alt="clients" />
            &nbsp;Clients
          </NavLink>
        </li>
        <li className="nav-item">
          <NavLink className="nav-link" to="/pages">
            <img className="nav-icon" src={LogoPages} alt="pages" />
            &nbsp;Pages
          </NavLink>
        </li>
      </ul>
      <div className="sidebar-logo">
        <svg className="sidebar-brand-full" width="118" height="46" alt="CoreUI Logo">
          <use xlinkHref="../../img/logo.svg#full"></use>
        </svg>
      </div>
    </nav>
  );
};

export default Navbar;
