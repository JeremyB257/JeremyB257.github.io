import React, { useEffect, useState } from 'react';
import Card from '../components/Card';
import Header from '../components/Header';

const UserList = () => {
  const [favoriteList, setFavoriteList] = useState([]);

  function getList(moviesId) {
    return fetch(
      `https://api.themoviedb.org/3/movie/${moviesId}?api_key=ed82f4c18f2964e75117c2dc65e2161d&language=fr-FR`
    ).then((data) => data.json());
  }
  useEffect(() => {
    let mounted = true;
    let moviesId = window.localStorage.movies ? window.localStorage.movies.split(',') : [];
    for (let i = 0; i < moviesId.length; i++) {
      getList(moviesId[i]).then((items) => {
        if (mounted) {
          setFavoriteList((favoriteList) => [...favoriteList, items]);
        }
      });
    }
    return () => (mounted = false);
  }, []);

  return (
    <div className="user-list-page">
      <Header />
      <h2>
        Coup de coeur <span>💖</span>
      </h2>
      <div className="result">
        {favoriteList.length > 0 ? (
          favoriteList.map((movie) => <Card movie={movie} key={movie.id} />)
        ) : (
          <h2>Aucun coup de coeur pour le moment</h2>
        )}
      </div>
    </div>
  );
};

export default UserList;
