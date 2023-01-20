import React, { useEffect, useState } from 'react';
import Editor from '../../components/Editor';

const NewCollection = () => {
  const [editorLoaded, setEditorLoaded] = useState(false);
  const [data, setData] = useState('');

  useEffect(() => {
    setEditorLoaded(true);
  }, []);

  return (
    <>
      <main>
        <div className="card">
          <div className="card-header">
            <strong>Nouvelles collections</strong>
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
                placeholder="p. ex. Collection estivale, promotions, coups de cœur de l'équipe"
              />
            </div>

            <div className="input">
              <label htmlFor="description" className="form-label">
                Description
              </label>
              <Editor
                name="description"
                onChange={(data) => {
                  setData(data);
                }}
                editorLoaded={editorLoaded}
              />
            </div>
            {/*     {console.log(JSON.stringify(data))} */}
          </div>
        </div>

        <div className="card">
          <div className="card-header">
            <strong>Image collection</strong>
          </div>
          <div className="card-body">
            <div className="input">
              <label htmlFor="Title" className="form-label">
                Image
              </label>
              <div className="input-group">
                <input className="form-control" id="inputGroupFile02" type="file" />
                <label className="input-group-text" htmlFor="inputGroupFile02">
                  Upload
                </label>
              </div>
            </div>
          </div>
        </div>
      </main>
    </>
  );
};

export default NewCollection;
