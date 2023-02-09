const result             = document.getElementById('result');
const resultRent         = document.getElementById('resultRent');
const resultAutre        = document.getElementById('resultAutre');
const moviesInfo         = document.getElementById('moviesInfo');
const similarMovie       = document.getElementById('similarMovie');

const paramsString = window.location.search
const searchParams = new URLSearchParams(paramsString)
let chapterId = searchParams.get('id');
let movies              = []; 
let id                  = chapterId;
let moviesRent          = [];
let moviesBuy           = [];
let moviesAutre         = [];
let moreInfos           = [];
let movieSimilar        = [];
let videosMovies        = [];

// let infos = [];
const fetchVideos = async () =>{
  videosMovies = await fetch(`https://api.themoviedb.org/3/movie/${id}?api_key=8111705f6e396ba3cd2e501a17915090&append_to_response=videos`).then((res) => res.json());
  videosMovies.videos.results.length = 1;
  let tot = videosMovies.videos;
  console.log(tot);

  // moviesInfo.innerHTML = 
  // `
  // <video src="https://www.youtube.com/watch?v=${tot.key}"></video>
  // `
  
  
};
// fetchVideos();


const fetchMore = async () =>{
  moreInfos = await fetch(`https://api.themoviedb.org/3/movie/${id}?api_key=8111705f6e396ba3cd2e501a17915090&language=fr-FR`).then((res) => res.json());
  console.log(moreInfos);
  moviesInfo.innerHTML = 
  `
  <div class="caca">
  <h2>${moreInfos.title}</h2>
  <div class="infoAll">
    <img src="https://image.tmdb.org/t/p/w500${moreInfos.poster_path}"></img>
    <p>${moreInfos.overview}</p>
    <h3>nombre d'avis: ${moreInfos.popularity}</h3>
  <h4> Realiser en : ${moreInfos.release_date}</h4>
  </div>
  </div>
    
  `
};

fetchMore();


const fetchSimilar = async () => {
  movieSimilar = await fetch(`https://api.themoviedb.org/3/movie/${id}/credits?api_key=8111705f6e396ba3cd2e501a17915090&language=en-US`).then((res) => res.json());
  movieSimilar.cast.length = 10;
    console.log(movieSimilar.cast);
    similarMovie.innerHTML = movieSimilar.cast.map((movie) =>
    
    `
    <div class="containerSimilar">
    <img src="https://image.tmdb.org/t/p/w500${movie.profile_path}"></img>
    <p>${movie.original_name}</p>

    </div>


    
    `
    
    
    ).join("");
};





const fetchInfos = async () => {
  
  movies = await fetch(`https://api.themoviedb.org/3/movie/${id}/watch/providers?api_key=8111705f6e396ba3cd2e501a17915090`).then((res) => res.json());
  moviesBuy   = movies.results.FR.buy;
  moviesRent  = movies.results.FR.rent;
  moviesAutre = movies.results.FR.flatrate;
  console.log(moviesAutre);

  

};



// fetchInfos();


const movieRents = async () => {

  

  resultRent.innerHTML = moviesRent.map((movie) => 
    `
  <li>
  <div class="cardInfos">
    <img src="https://image.tmdb.org/t/p/w500${movie.logo_path}"></img>
    <div class="infosStream">
    <h2>${movie.provider_name}</h2>
    </div>
  </div>
</li>
`

  ).join("");
};



  
const movieBuy = async () => {
    await fetchInfos();
    await movieRents();
    await fetchSimilar();
  result.innerHTML = moviesBuy.map((movie) => 
    `
  <li>
  <div class="cardInfos">
    <img src="https://image.tmdb.org/t/p/w500${movie.logo_path}"></img>
    <div class="infosStream">
    <h2>${movie.provider_name}</h2>
    </div>
  </div>
</li>


`

  ).join("");
};



movieBuy();

// var str = "page-contenue.html";
// var url = new URL(str);
// var name = url.searchParams.get("name");
// console.log(name);


























// `
//   <li>
//   <div class="cardContent">
//     <img src="https://image.tmdb.org/t/p/w500${nex.logo_path}"></img>
//     <div class="infos">
//     <h2>${nex.provider_name}</h2>
//     </div>
//   </div>
// </li>
// `




// result.innerHTML =

//   `
//     <a href="${movies.link}">ou regarder le film ?</a>
//   `
//   console.log(movies);


























