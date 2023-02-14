let result               = document.getElementById('result');
let searchInput          = document.getElementById('searchInput');
let form                 = document.getElementById('searchForm'); 
let resultContainer      = document.getElementsByClassName('result-container'); 
let titlePopular        = document.getElementById('titlePopular'); 

let search               = "";
let tvShow               = [];
let showPopular          = [];















const fetchPopular = async () => {
  
    showPopular = await fetch(`https://api.themoviedb.org/3/tv/popular?api_key=8111705f6e396ba3cd2e501a17915090&language=fr-FR`).then((res) => res.json());
    console.log(showPopular.results);
};


// fetchPopular();
const popularCarte = async () =>{
    await fetchPopular();
    result.innerHTML = showPopular.results.map((popular) => 
        
    `
     <li>
        <a href="page-contenue-tv.html?id=${popular.id}">
        <div class="cardContent">
        <img src="https://image.tmdb.org/t/p/w500${popular.poster_path}"></img>
        <div class="infos">
        <h2>${popular.name}</h2>
          <p>Anneé : ${popular.first_air_date}</p> 
        </div>
      </div>
      </a>
    </li>
  
   `
  ).join("");

    
  };

popularCarte();



const fetchTv = async () => {
  
    tvShow = await fetch(`https://api.themoviedb.org/3/search/tv?api_key=8111705f6e396ba3cd2e501a17915090&language=fr-FR&query=${search}`).then((res) => res.json());
    console.log(tvShow.results);
};

const tvCarte = async () => {
    await fetchTv()

    result.innerHTML = tvShow.results.map((tv) => 
        
    `
      <li>
      <a href="page-contenue-tv.html?id=${tv.id}">
      <div class="cardContent">
        <img src="https://image.tmdb.org/t/p/w500${tv.poster_path}"></img>
        <div class="infos">
        <h2>${tv.name}</h2>
          <p>Anneé : ${tv.first_air_date}</p> 
        </div>
      </div>
      </a>
    </li>
   `
  ).join("");

    
  };



  form.addEventListener('submit', (e) =>{
    e.preventDefault();
    titlePopular.style.display="none";
    search = searchInput.value;
    tvCarte();
  })