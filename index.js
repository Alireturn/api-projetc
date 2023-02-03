// const { contentTracing } = require("electron");

const form = document.getElementById('searchForm');
const searchInput = document.getElementById('searchInput');
const result = document.getElementById('result');


let search = "";
let movies = []; 


const fetchMovies = async () => {
    movies = await fetch(`https://api.themoviedb.org/3/search/movie?api_key=8111705f6e396ba3cd2e501a17915090&query=${search}`).then((res) => res.json());

    console.log(movies);
};

const filmCarte = async () => {
    await fetchMovies();
    


    result.innerHTML = movies.results.map((movie) => 
    
     `
        <li>
        <div class="cardContent">
          <img src="https://image.tmdb.org/t/p/w500${movie.poster_path}"></img>
          <div class="infos">
          <h2>${movie.original_title}</h2>
            <p>${movie.overview}</p>
            <p>Popularité : ${movie.popularity} ⭐</p>
            
          </div>
        </div>
      </li>
     `
    ).join("");
};

const card = document.querySelector('.cardContent');


form.addEventListener("submit", (e) => {
    e.preventDefault();
    search = searchInput.value;
    filmCarte();
    
});


card.addEventListener('click', () => {
    document.location.href="./page-contenue.html";
});





// card.addEventListener('click', () => {
//     location('page-contenue.html');
// })