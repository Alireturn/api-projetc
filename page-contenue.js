const paramsString       = window.location.search;
const searchParams       = new URLSearchParams(paramsString);

let moviesInfo           = document.getElementById('moviesInfo');

let chapterId           = searchParams.get('id');
let moreInfos = [];
let nameGenre = "";

console.log(chapterId);

const fetchMore = async () =>{
    moreInfos = await fetch(`https://api.themoviedb.org/3/tv/${chapterId}?api_key=8111705f6e396ba3cd2e501a17915090&language=fr-FR`).then((res) => res.json());
    console.log(moreInfos);

    moviesInfo.innerHTML = 
  
    `
   
    <div class="infoAll">
    
    <div class="infoallLeft"> 
    <img src="https://image.tmdb.org/t/p/w500${moreInfos.poster_path}"></img>
    </div>
    <div class="infoallRight"> 
    <div class="rightTop"> 
    <h2>${moreInfos.original_name}</h2> 
    <p>${moreInfos.genres[0].name} </p>
    </div>
    <div class="infoBot"> 
    <h2>Synopsis</H2>
    <p>${moreInfos.overview}</p>
    <h3>Nombre d'avis</h3>
    <p>${moreInfos.popularity}</p>
    <h3> Realiser en </h3>
    <p>${moreInfos.first_air_date
    }</p>
    <h3>Nombre de saisons</h3>
    <p>${moreInfos.number_of_seasons}</p>
    </div>
    </div>
    </div>
    
    `
  };

  fetchMore();