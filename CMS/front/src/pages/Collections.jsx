import React from 'react';
import Header from '../components/Header';
import Navbar from '../components/Navbar';

const Collections = () => {
  return (
    <>
      <Navbar productMenu="true" />
      <Header breadcrumbs={['Theme', 'Produits', 'Les Collections']} />
      <main>
        <div className="header">
          <h1>Collections</h1>
          <button className="btn btn-outline-success" type="button">
            <i className="fa-solid fa-plus"></i>
            &nbsp;Ajouter une collection
          </button>
        </div>
        <div className="card">
          <div className="card-header">
            <strong>Liste des collections</strong>
          </div>
          <div className="card-body">
            <div className="tab-content">
              <div className="tab-pane">
                <table className="table">
                  <thead>
                    <tr>
                      <th scope="col">#</th>
                      <th width="250px" scope="col">
                        Titre
                      </th>
                      <th scope="col">Produits</th>
                      <th scope="col">Modifier</th>
                      <th scope="col">Supprimer</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <th scope="row">1</th>
                      <td>Montres</td>
                      <td>3</td>
                      <td>
                        <i className="fa-solid fa-pen-to-square"></i>
                      </td>
                      <td>
                        <i className="fa-solid fa-trash"></i>
                      </td>
                    </tr>
                    <tr>
                      <th scope="row">2</th>
                      <td>Bracelets</td>
                      <td>2</td>
                      <td>
                        <i className="fa-solid fa-pen-to-square"></i>
                      </td>
                      <td>
                        <i className="fa-solid fa-trash"></i>
                      </td>
                    </tr>
                    <tr>
                      <th scope="row">3</th>
                      <td>Bagues</td>
                      <td>0</td>
                      <td>
                        <i className="fa-solid fa-pen-to-square"></i>
                      </td>
                      <td>
                        <i className="fa-solid fa-trash"></i>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      </main>
    </>
  );
};

export default Collections;
