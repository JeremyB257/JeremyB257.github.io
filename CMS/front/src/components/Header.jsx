import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';

const Header = (props) => {
  const darkMod = () => {
    const darkMode = document.querySelector('.darkMode');
    document.body.classList.toggle('dark');

    darkMode.children[0].classList.toggle('fa-sun');
    darkMode.children[0].classList.toggle('fa-moon');
  };

  const hideSideBar = () => {
    document.body.classList.toggle('hideSB');
  };

  return (
    <header>
      <div className="header-container">
        <i className="fa-solid fa-bars" onClick={hideSideBar}></i>

        <h1>header</h1>
        <div className="darkMode" onClick={darkMod}>
          <i className={document.body.classList.contains('dark') ? 'fa-regular fa-sun' : 'fa-regular fa-moon'}></i>
        </div>
      </div>

      <div className="header-divider"></div>

      <div className="header-container">
        <nav aria-label="breadcrumb">
          <ol className="breadcrumb">
            {props.breadcrumbs?.map((breadcrumb, index) => {
              return (
                <li key={index} className="breadcrumb-item">
                  {breadcrumb}
                </li>
              );
            })}
          </ol>
        </nav>
      </div>
    </header>
  );
};

export default Header;
