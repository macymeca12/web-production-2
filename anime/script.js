const base_url = "https://api.jikan.moe/v3";


function searchAnime(event){

    event.preventDefault();

    const form = new FormData(this);
    const query = form.get("search");
    // attempted to exclude certain genres but I'm not sure if it worked but I used the correct path
     fetch(`${base_url}/search/anime?q=${query}&page=1&genre_exclude=9,12,49`)
    .then(res=>res.json())
    .then(updateDom)
    .catch(err=>console.warn(err.message));
}

function updateDom(data){

    const searchResults = document.getElementById('search-results');

    const animeByCategories = data.results
        .reduce((acc, anime)=>{

            const {type} = anime;
            if(acc[type] === undefined) acc[type] = [];
            acc[type].push(anime);
            return acc;

        }, {});

        searchResults.innerHTML = Object.keys(animeByCategories).map(key=>{

            const animesHTML = animeByCategories[key]
            .map(anime=>{
                return `
                    <div class="card">
                        <div class="card-image">
                            <img src="${anime.image_url}">
                        </div>
                        <div class="card-content">
                            <span class="card-title">${anime.title}</span>
                            <p>${anime.synopsis}</p>
                        </div>
                        <div class="card-action">
                            <a href="${anime.url}">Find out more</a>
                        </div>
                    </div>
                `
            }).join("");


            return `
                <section>
                    <h3>${key.toUpperCase()}</h3>
                    <div class="kemicofa-row">${animesHTML}</div>
                </section>
            `
        }).join("");
}

function pageLoaded(){
    const form = document.getElementById('search_form');
    form.addEventListener("submit", searchAnime);
    form.addEventListener("click", searchAnime);
}


window.addEventListener("load", pageLoaded);



// links
//https://github.com/zuritor/jikanjs/tree/6a11bcf1d07dfc046e56ddf3ed94adc5db6ac822#installation
//https://www.youtube.com/watch?v=0edUd9m3tVU&t=377s
//https://www.youtube.com/watch?v=AI5lsNeVyO8&t=758s
//https://uicookies.com/html-search-box/
//https://coolors.co
//https://uicookies.com/html-search-box/
