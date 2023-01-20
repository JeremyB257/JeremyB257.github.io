import React from 'react';
import { useLocation } from 'react-router-dom';

const Header = () => {
  const darkMod = () => {
    const darkMode = document.querySelector('.darkMode');
    document.body.classList.toggle('dark');

    darkMode.children[0].classList.toggle('fa-sun');
    darkMode.children[0].classList.toggle('fa-moon');
  };

  const hideSideBar = () => {
    document.body.classList.toggle('hideSB');
    if (window.innerWidth < 768) {
      let backdrop = document.createElement('div');
      backdrop.classList = 'sidebar-backdrop fade show';
      document.body.appendChild(backdrop);
      backdrop.addEventListener('click', () => {
        backdrop.remove();
        document.body.classList.add('hideSB');
      });
    }
  };

  let location = useLocation();
  let breadcrumbs = location.pathname.split('/');

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
            {breadcrumbs.map((breadcrumb, index) => {
              return index > 0 ? (
                <li key={index} className="breadcrumb-item">
                  {breadcrumb}
                </li>
              ) : (
                <li key={index} className="breadcrumb-item">
                  Accueil
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
