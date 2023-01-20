import React from 'react';
import useFetch from '../../hooks/useFetch';
import { Link } from 'react-router-dom';

const APIURL = '../datas/collections.json';

const Collections = () => {
  const { data, loading, error } = useFetch(APIURL);

  return (
    <>
      <main>
        <div className="header">
          <h1>Collections</h1>
          <Link to="/produits/listeCollections/nouvelleCollection">
            <button className="btn btn-outline-success" type="button">
              <i className="fa-solid fa-plus"></i>
              &nbsp;Ajouter une collection
            </button>
          </Link>
        </div>
        <div className="card">
          <div className="card-header">
            <strong>Liste des collections</strong>
          </div>
          <div className="card-body">
            <div className="tab-content">
              <div className="tab-pane overflowX">
                <table className="table">
                  <thead>
                    <tr>
                      <th width="40px" scope="col">
                        #
                      </th>
                      <th width="30px"></th>
                      <th width="300px" scope="col">
                        Titre
                      </th>
                      <th scope="col">Produits</th>
                      <th scope="col">Modifier</th>
                      <th scope="col">Supprimer</th>
                    </tr>
                  </thead>
                  <tbody>
                    {loading ? (
                      <tr>
                        <td colSpan={6}>Loading</td>
                      </tr>
                    ) : (
                      data.map((collec, index) => (
                        <tr key={collec._id}>
                          <th scope="row">{index + 1}</th>
                          <td>
                            <img src={collec.imageUrl} alt={collec.name} />
                          </td>
                          <td>{collec.name}</td>
                          <td>{collec.product}</td>
                          <td>
                            <i className="fa-solid fa-pen-to-square"></i>
                          </td>
                          <td>
                            <i className="fa-solid fa-trash"></i>
                          </td>
                        </tr>
                      ))
                    )}
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
