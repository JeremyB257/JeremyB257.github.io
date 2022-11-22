// CONST
const APIURL = 'https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&api_key=04c35731a5ee918f014970082a0088b1&page=1';
const APISEARCH = 'https://api.themoviedb.org/3/search/movie?&api_key=04c35731a5ee918f014970082a0088b1&query=';
const IMGPATH = 'https://image.tmdb.org/t/p/w1280';
const main = document.querySelector('main');
const form = document.getElementById('form');
const search = document.getElementById('search');
//SELECTOR




//FUNCTION

async function getMovies(url) {
    const resp = await fetch(url);
    const respData = await resp.json();

    console.log(respData);

    showMovies(respData.results);
}
getMovies(APIURL);

function showMovies(movies) {
    // clear main
    main.innerHTML = '';
    movies.forEach(movie => {
        const movieEl = document.createElement('div');
        movieEl.innerHTML = `
        <div class="movie">
            <img src="${IMGPATH + movie.poster_path}" alt="${movie.title}">
        <div class="movie-info">
            <h3>${movie.title}</h3>
            <span class=${getClassByRate(movie.vote_average)}>${movie.vote_average}</span>
        </div>
        <div class="overview">
        <h3>Overview</h3>
        ${movie.overview}
        </div>
    </div>
    `
      main.appendChild(movieEl);
    });
}

function getClassByRate(vote) {
    if ( vote >= 8) {
        return 'green';
    } else if ( vote >=5) {
        return 'orange';
    } else {
        return 'red';
    }
}

form.addEventListener('submit', (e) => {
    e.preventDefault();

    if (search.value) {
        getMovies(APISEARCH + search.value);

        search.value = '';
    }
});