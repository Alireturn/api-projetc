const result             = document.getElementById('result');
const resultRent         = document.getElementById('resultRent');
const resultAutre        = document.getElementById('resultAutre');
const moviesInfo         = document.getElementById('moviesInfo');
const similarMovie       = document.getElementById('similarMovie');
const rightTop           = document.getElementsByClassName('rightTop');
console.log(rightTop);


const paramsString = window.location.search
const searchParams = new URLSearchParams(paramsString)
let chapterId = searchParams.get('id');
let moviesWatch              = []; 
let id                  = chapterId;
let moviesRent          = [];
let moviesBuy           = [];
let moviesAutre         = [];
let moreInfos           = [];
let movieSimilar        = [];
let videosMovies        = [];
let cacao               = [];

// let infos = [];



const fetchMore = async () =>{
  moreInfos = await fetch(`https://api.themoviedb.org/3/movie/${id}?api_key=8111705f6e396ba3cd2e501a17915090&language=fr-FR`).then((res) => res.json());
  console.log(moreInfos);
  moviesInfo.innerHTML = 
  `
 
  <div class="infoAll">
  
  <div class="infoallLeft"> 
  <img src="https://image.tmdb.org/t/p/w500${moreInfos.poster_path}"></img>
  </div>
  <div class="infoallRight"> 
  <div class="rightTop"> 
  <h2>${moreInfos.title}</h2> 
  <p>${moreInfos.genres[0].name}</p>
  </div>
  <div class="infoBot"> 
  <h2>Synopsis</H2>
  <p>${moreInfos.overview}</p>
  <h3>Nombre d'avis</h3>
  <p>${moreInfos.popularity}</p>
  <h3> Realiser en </h3>
  <p>${moreInfos.release_date}</p>
  </div>
  </div>
  </div>
    
  `
};
// const fetchVideos = async () =>{
//   videosMovies = await fetch(`https://api.themoviedb.org/3/movie/${id}?api_key=8111705f6e396ba3cd2e501a17915090&append_to_response=videos`).then((res) => res.json());
//   console.log(videosMovies);
//   rightTop.innerHTML = 
//   `
//     <p>caca</p>
  
//   `
// };




const fetchSimilar = async () => {
  movieSimilar = await fetch(`https://api.themoviedb.org/3/movie/${id}/credits?api_key=8111705f6e396ba3cd2e501a17915090&language=en-US`).then((res) => res.json());
  movieSimilar.cast.length = 11;
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
  
  moviesWatch = await fetch(`https://api.themoviedb.org/3/movie/${id}/watch/providers?api_key=8111705f6e396ba3cd2e501a17915090`).then((res) => res.json());

 console.log(moviesWatch);
  if (moviesWatch.results.FR.buy == moviesWatch.results.FR.buy) {
    result.innerHTML = moviesWatch.results.FR.buy.map((movie) => 
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

  }else{
    console.log(moviesWatch)
  }
  
};



fetchInfos();


// const movieRents = async () => {

//   resultRent.innerHTML = moviesRent.map((movie) => 
//     `
//   <li>
//   <div class="cardInfos">
//     <img src="https://image.tmdb.org/t/p/w500${movie.logo_path}"></img>
//     <div class="infosStream">
//     <h2>${movie.provider_name}</h2>
//     </div>
//   </div>
// </li>
// `

//   ).join("");
// };



  




// movieBuy();
// movieRents();
// fetchInfos();
 fetchSimilar();
 fetchMore();
//  fetchVideos();


























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


























