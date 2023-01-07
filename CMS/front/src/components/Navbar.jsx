import React from 'react';
import { NavLink } from 'react-router-dom';

const Navbar = (props) => {
  const showGroup = (e) => {
    e.target.parentNode.classList.toggle('show');
  };

  if (window.innerWidth < 768) document.body.classList.add('hideSB');

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
      <div className="sidebar-logo">CMS</div>
      <ul className="sidebar-nav">
        <li className="nav-item">
          <NavLink className="nav-link" to="/home">
            <i className="fa-solid fa-gauge-high nav-icon"></i>
            &nbsp;Dashboard
          </NavLink>
        </li>
        <li className="nav-title">Theme</li>
        <li id="productMenu" className={props?.productMenu ? 'nav-group show' : 'nav-group'} onClick={showGroup}>
          <a href="#" className="nav-link nav-group-toggle">
            <img className="nav-icon" src="img/ecommerce-price.svg" alt="produit" />
            &nbsp;Produits
          </a>
          <ul className="nav-group-items">
            <li className="nav-item">
              <NavLink className="nav-link" to="/products">
                <span className="nav-icon"></span> Les produits
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link" to="/collections">
                <span className="nav-icon"></span> Les collections
              </NavLink>
            </li>
          </ul>
        </li>
        <li className="nav-item">
          <NavLink className="nav-link" to="/orders">
            <img className="nav-icon" src="img/product-shipping.svg" alt="commande" />
            &nbsp;Commandes
          </NavLink>
        </li>
        <li className="nav-item">
          <NavLink className="nav-link" to="/customers">
            <img className="nav-icon" src="img/customer.svg" alt="client" />
            &nbsp;Clients
          </NavLink>
        </li>
        <li className="nav-item">
          <NavLink className="nav-link" to="/pages">
            <img className="nav-icon" src="img/paper.svg" alt="client" />
            &nbsp;Pages
          </NavLink>
        </li>
      </ul>
      <div className="sidebar-logo">CMS</div>
    </nav>
  );
};

export default Navbar;
