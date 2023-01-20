import React from 'react';
import useFetch from '../../hooks/useFetch';
import { Link } from 'react-router-dom';

const APIURL = '../datas/products.json';

const Products = () => {
  const { data, loading, error } = useFetch(APIURL);

  return (
    <>
      <main>
        <div className="header">
          <h1>Produits</h1>
          <Link to="/produits/listeProduits/nouveauProduit">
            <button className="btn btn-outline-success" type="button">
              <i className="fa-solid fa-plus"></i>
              &nbsp;Ajouter un produit
            </button>
          </Link>
        </div>
        <div className="card">
          <div className="card-header">
            <strong>Liste des produits</strong>
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
                      <th scope="col">Stock</th>
                      <th scope="col">Collection</th>
                      <th scope="col">Modifier</th>
                      <th scope="col">Supprimer</th>
                    </tr>
                  </thead>
                  <tbody>
                    {loading ? (
                      <tr>
                        <td colSpan={7}>Loading</td>
                      </tr>
                    ) : (
                      data.map((product, index) => (
                        <tr key={product._id}>
                          <th scope="row">{index + 1}</th>
                          <td>
                            <img src={product.imageUrl[0]} alt={product.title} />
                          </td>
                          <td>{product.title}</td>
                          <td>{product.stock}</td>
                          <td>{product.collections}</td>
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

export default Products;
