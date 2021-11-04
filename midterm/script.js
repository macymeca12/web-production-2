const jikanjs  = fetch('jikanjs');
const slice_of_life_btn = document.getElementById('slice_of_life_btn');
const shounen_btn = document.getElementById('shounen_btn');
const shojo_btn = document.getElementById('shojo_btn');
const horror_btn = document.getElementById('horror_btn');
const slice_of_life_results = document.getElementById('slice_of_life_results');
const shounen_results = document.getElementById('shounen_results');
const shojo_results = document.getElementById('shojo_results');
const horror_results = document.getElementById('horror_results');


slice_of_life_btn.addEventListener('click', getRandomSlice);
shounen_btn.addEventListener('click', getRandomShounen);
shojo_btn.addEventListener('click', getRandomShojo);
horror_btn.addEventListener('click', getRandomHorror);

function getRandomInt(max) {
  return Math.floor(Math.random() * max);
}

function getRandomSlice(){
    jikanjs.loadGenre('anime', 36 [ 1]).then((response) => {
      response.anime.forEach(element => {
        console.log(`${element.mal_id}: ${element.title} - ${element.img_url} - ${element.sypnosis}`);
      })
    }).catch((err) => {
    console.error(err); // in case a error happens
          });

}
function getRandomShounen(){

}
function getRandomShojo(){

}
function getRandomHorror(){

}
