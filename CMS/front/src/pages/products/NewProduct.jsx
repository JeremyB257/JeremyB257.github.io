import React, { useEffect, useState } from 'react';
import Editor from '../../components/Editor';
import useFetch from '../../hooks/useFetch';

const APIURL = './datas/collections.json';

const NewProduct = () => {
  const [editorLoaded, setEditorLoaded] = useState(false);
  const [info, setInfo] = useState({ isActif: true });
  const [files, setFiles] = useState('');
  const { data, loading, error } = useFetch(APIURL);

  useEffect(() => {
    setEditorLoaded(true);
  }, []);

  const handleFileChange = (e) => {
    let files = e.target.files;
    let validFiles = [];
    for (let i = 0; i < files.length; i++) {
      if (
        files[i].size <= 5 * 1024 * 1024 &&
        (files[i].type === 'image/jpeg' || files[i].type === 'image/png' || files[i].type === 'image/jpg')
      ) {
        validFiles.push(files[i]);
      }
    }
    setFiles(validFiles);
  };

  return (
    <>
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
                      onChange={handleFileChange}
                      style={{ display: 'none' }}
                    />

                    <div className="grid-img">
                      {Array.from({ length: 5 }, (_, i) => (
                        <label key={i} htmlFor="file" className="input-img">
                          <img src={files.length > i ? URL.createObjectURL(files[i]) : './img/defaultImg.svg'} alt="" />
                        </label>
                      ))}
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
                <div className="input">
                  <label htmlFor="actif" className="form-label">
                    Actif
                  </label>
                  <select
                    id="actif"
                    className="form-select"
                    onChange={(e) => {
                      setInfo({ ...info, isActif: JSON.parse(e.target.value) });
                    }}>
                    <option value={true}>Actif</option>
                    <option value={false}>Inactif</option>
                  </select>
                </div>
                <div className="input">
                  <label htmlFor="collection" className="form-label">
                    Collection
                  </label>
                  <select
                    id="collection"
                    className="form-select"
                    onChange={(e) => {
                      setInfo({ ...info, collection: e.target.value });
                    }}>
                    <option value="">Aucune</option>
                    {data.map((collection) => (
                      <option key={collection._id} value={collection._id}>
                        {collection.name}
                      </option>
                    ))}
                  </select>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </>
  );
};

export default NewProduct;
