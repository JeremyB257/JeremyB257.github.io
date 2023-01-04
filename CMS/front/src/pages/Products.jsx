import React from 'react';
import Header from '../components/Header';
import Navbar from '../components/Navbar';

const Products = () => {
  return (
    <>
      <Navbar productMenu="true" />
      <Header breadcrumbs={['Theme', 'Produits', 'Les Produits']} />
      <main>
        <div className="header">
          <h1>Produits</h1>
          <button className="btn btn-outline-success" type="button">
            <i className="fa-solid fa-plus"></i>
            &nbsp;Ajouter un produit
          </button>
        </div>
        <div className="card">
          <div className="card-header">
            <strong>Liste des produits</strong>
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
                      <th scope="col">Stock</th>
                      <th scope="col">Collection</th>
                      <th scope="col">Modifier</th>
                      <th scope="col">Supprimer</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <th scope="row">1</th>
                      <td>Montre 1</td>
                      <td>12</td>
                      <td>Montres</td>
                      <td>
                        <i className="fa-solid fa-pen-to-square"></i>
                      </td>
                      <td>
                        <i className="fa-solid fa-trash"></i>
                      </td>
                    </tr>
                    <tr>
                      <th scope="row">2</th>
                      <td>Bracelet 1</td>
                      <td>23</td>
                      <td>Bracelets</td>
                      <td>
                        <i className="fa-solid fa-pen-to-square"></i>
                      </td>
                      <td>
                        <i className="fa-solid fa-trash"></i>
                      </td>
                    </tr>
                    <tr>
                      <th scope="row">3</th>
                      <td>Bracelet 2</td>
                      <td>11</td>
                      <td>Bracelets</td>
                      <td>
                        <i className="fa-solid fa-pen-to-square"></i>
                      </td>
                      <td>
                        <i className="fa-solid fa-trash"></i>
                      </td>
                    </tr>
                    <tr>
                      <th scope="row">4</th>
                      <td>Bracelet 3</td>
                      <td>17</td>
                      <td>Bracelets</td>
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

export default Products;
