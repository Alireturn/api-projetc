// const { contentTracing } = require("electron");

const form               = document.getElementById('searchForm');
const searchInput        = document.getElementById('searchInput');
const result             = document.getElementById('result');
const btn                = document.querySelector('#btn');
const card               = document.querySelector('.cardContent');
const cardNext           = document.getElementById('effacer')
const resultNextMovies   = document.getElementById('next');
const tendance   = document.getElementById('tendances');


let search       = "";
let movies       = []; 
let next         = [];
let id           = 0;
let aaaa         = [];
let pageNext     = 2;
let videosMovies = [];
let popular = [];


const popularMovie = async () =>{
  popular = await fetch(`https://api.themoviedb.org/3/movie/popular?api_key=8111705f6e396ba3cd2e501a17915090&language=fr-FR&page=1`).then((res) => res.json());
  console.log(popular)
  result.innerHTML = popular.results.map((nex) => 

  `    
    <li>
    <a href="page-contenue.html?id=${nex.id}">
    <div class="cardContent">
      <img src="https://image.tmdb.org/t/p/w500${nex.poster_path}"></img>
      <div class="infos">
      <h2>${nex.original_title}</h2>
        <p>Anneé : ${nex.release_date}</p> 
      </div>
    </div>
    </a>
  </li>
 `
).join("");

};



const fetchNext = async () =>{
  next = await fetch(`https://api.themoviedb.org/3/movie/upcoming?api_key=8111705f6e396ba3cd2e501a17915090&language=fr-FR&page=${pageNext}`).then((res) => res.json());
  console.log(next)

  
};

const nexFilm = async () => {
  await fetchNext()
  resultNextMovies.innerHTML = next.results.map((nex) => 

    `    
      <li>
      <a href="page-contenue.html?id=${nex.id}">
      <div class="cardContent">
        <img src="https://image.tmdb.org/t/p/w500${nex.poster_path}"></img>
        <div class="infos">
        <h2>${nex.original_title}</h2>
          <p>Anneé : ${nex.release_date}</p> 
        </div>
      </div>
      </a>
    </li>
   `
  ).join("");
};

nexFilm();


const fetchMovies = async () => {
  
    movies = await fetch(`https://api.themoviedb.org/3/search/movie?api_key=8111705f6e396ba3cd2e501a17915090&query=${search}`).then((res) => res.json());
    aaaa = movies.results;
    console.log(movies);
};


const filmCarte = async () => {
    await fetchMovies()

    result.innerHTML = movies.results.map((movie) => 
        
    `
      <li>
      <a href="page-contenue.html?id=${movie.id}">
      <div class="cardContent">
        <img src="https://image.tmdb.org/t/p/w500${movie.poster_path}"></img>
        <div class="infos">
        <h2>${movie.original_title}</h2>
          <p>Anneé : ${movie.release_date}</p> 
        </div>
      </div>
      </a>
    </li>
   `
  ).join("");

    
  };

  tendance.addEventListener('click', () => {
    popularMovie();
    cardNext.style.display="none";
  });

form.addEventListener("submit", (e) => {
  e.preventDefault();
  cardNext.style.display="none";
  search = searchInput.value;
  filmCarte();
});


















