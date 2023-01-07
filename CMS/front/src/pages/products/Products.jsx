import React, { useEffect } from 'react';
import Header from '../../components/Header';
import Navbar from '../../components/Navbar';
import useFetch from '../../hooks/useFetch';
import { Link } from 'react-router-dom';
import { useState } from 'react';
const APIURL = './datas/products.json';

const Products = () => {
  const { data, loading, error } = useFetch(APIURL);
  const [tabHeader, setTabHeader] = useState({
    edit: window.innerWidth < 768 ? 'M' : 'Modifier',
    delete: window.innerWidth < 768 ? 'S' : 'Supprimer',
  });

  useEffect(() => {
    function handleResize() {
      if (window.innerWidth < 768) {
        setTabHeader({
          edit: 'M',
          delete: 'S',
        });
      } else {
        setTabHeader({
          edit: 'Modifier',
          delete: 'Supprimer',
        });
      }
    }

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  });

  return (
    <>
      <Navbar productMenu="true" />
      <Header breadcrumbs={['Theme', 'Produits', 'Les Produits']} />
      <main>
        <div className="header">
          <h1>Produits</h1>
          <Link to="/newproduct">
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
                      <th scope="col">{tabHeader.edit}</th>
                      <th scope="col">{tabHeader.delete}</th>
                    </tr>
                  </thead>
                  <tbody>
                    {loading ? (
                      <tr>
                        <td colSpan={6}>Loading</td>
                      </tr>
                    ) : (
                      data.map((product, index) => (
                        <tr key={product._id}>
                          <th scope="row">{index + 1}</th>
                          <td>{product.name}</td>
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
