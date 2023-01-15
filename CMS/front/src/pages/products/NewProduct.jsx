import React, { useEffect, useState } from 'react';
import Header from '../../components/Header';
import Navbar from '../../components/Navbar';
import Editor from '../../components/Editor';

const NewProduct = () => {
  const [editorLoaded, setEditorLoaded] = useState(false);
  const [info, setInfo] = useState({ isActif: true });
  const [files, setFiles] = useState('');

  useEffect(() => {
    setEditorLoaded(true);
  }, []);

  return (
    <>
      <Navbar productMenu="true" />
      <Header breadcrumbs={['Theme', 'Produits', 'Les Produits', 'Nouveau Produit']} />
      <main>
        <div className="new-container">
          <div className="left-part">
            <div className="card">
              <div className="card-header">
                <strong>Nouveau Produit</strong>
              </div>
              <div className="card-body">
                <div className="input">
                  <label htmlFor="Title" className="form-label">
                    Titre
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    id="Title"
                    placeholder="p. ex. Tee-shirt à manches courtes"
                    onChange={(e) => {
                      setInfo({ ...info, title: e.target.value });
                    }}
                  />
                </div>

                <div className="input">
                  <label htmlFor="description" className="form-label">
                    Description
                  </label>
                  <Editor
                    name="description"
                    onChange={(data) => {
                      setInfo({ ...info, description: data });
                    }}
                    editorLoaded={editorLoaded}
                  />
                </div>
              </div>
            </div>

            <div className="card">
              <div className="card-header">
                <strong>Images produit</strong>
              </div>
              <div className="card-body">
                <div className="input">
                  <div className="input-file">
                    <input
                      type="file"
                      id="file"
                      multiple
                      accept=".jpg,.png,.jpeg"
                      onChange={(e) => setFiles(e.target.files)}
                      style={{ display: 'none' }}
                    />

                    <div className="grid-img">
                      <label htmlFor="file" className="input-img">
                        <img src={files.length >= 1 ? URL.createObjectURL(files[0]) : './img/defaultImg.svg'} alt="" />
                      </label>
                      <label htmlFor="file" className="input-img">
                        <img src={files.length >= 2 ? URL.createObjectURL(files[1]) : './img/defaultImg.svg'} alt="" />
                      </label>
                      <label htmlFor="file" className="input-img">
                        <img src={files.length >= 3 ? URL.createObjectURL(files[2]) : './img/defaultImg.svg'} alt="" />
                      </label>
                      <label htmlFor="file" className="input-img">
                        <img src={files.length >= 4 ? URL.createObjectURL(files[3]) : './img/defaultImg.svg'} alt="" />
                      </label>
                      <label htmlFor="file" className="input-img">
                        <img src={files.length >= 5 ? URL.createObjectURL(files[4]) : './img/defaultImg.svg'} alt="" />
                      </label>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="card">
              <div className="card-header">
                <strong>Prix</strong>
              </div>
              <div className="card-body">
                <label htmlFor="Price" className="form-label">
                  Prix affiché
                </label>
                <div className="input-group">
                  <input
                    type="text"
                    className="form-control"
                    id="Price"
                    placeholder="0.00"
                    onChange={(e) => {
                      setInfo({ ...info, price: e.target.value });
                    }}
                  />
                  <span className="input-group-text" id="basic-addon2">
                    €
                  </span>
                </div>

                <label htmlFor="discountPrice" className="form-label">
                  Prix avant reduction
                </label>
                <div className="input-group">
                  <input
                    type="text"
                    className="form-control"
                    id="discountPrice"
                    placeholder="0.00 (laisser vide si non concerné)"
                    onChange={(e) => {
                      setInfo({ ...info, discountPrice: e.target.value });
                    }}
                  />
                  <span className="input-group-text" id="basic-addon2">
                    €
                  </span>
                </div>

                <label htmlFor="cost" className="form-label">
                  Coût par produit
                </label>
                <div className="input-group">
                  <input
                    type="text"
                    className="form-control"
                    id="cost"
                    placeholder="0.00 (Les clients ne verront pas cela)"
                    onChange={(e) => {
                      setInfo({ ...info, cost: e.target.value });
                    }}
                  />
                  <span className="input-group-text" id="basic-addon2">
                    €
                  </span>
                </div>
              </div>
            </div>
          </div>
          <div className="right-part">
            <div className="card">
              <div className="card-header">
                <strong>Statut du produit</strong>
              </div>
              <div className="card-body">
                <select
                  className="form-select"
                  onChange={(e) => {
                    setInfo({ ...info, isActif: JSON.parse(e.target.value) });
                  }}>
                  <option value={true}>Actif</option>
                  <option value={false}>Inactif</option>
                </select>
              </div>
            </div>
          </div>
        </div>
      </main>
    </>
  );
};

export default NewProduct;
