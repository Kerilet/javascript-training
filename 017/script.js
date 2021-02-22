export const fetchPokemon = async(name) => {
    const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${name}`);
    const json = await response.json();
    showInfo(json);
}

export function displayTypes(types) {
    const typeNames = [];
    for (let i = 0; i < types.length; i++) {
        const typeName = types[i].type.name;
        typeNames.push(typeName);
    }
    return typeNames.join('/');
}

export

function displayAbilities(abilities) {
    const abilityList = [];
    for (let x = 0; x < abilities.length; x++) {
        const abilityName = abilities[x].ability.name;
        abilityList.push(abilityName);
    }
    return abilityList.join('<br>');
}


export const showInfo = async(pokemon) => {
    const html = `<div class="col-sm cardCol">
              <div class="card" style="width: 18rem;">
              <div id="carouselExampleCaptions" class="carousel slide carousel-dark" data-bs-ride="carousel">
              <ol class="carousel-indicators">
                <li data-bs-target="#carouselExampleCaptions" data-bs-slide-to="0" class="active"></li>
                <li data-bs-target="#carouselExampleCaptions" data-bs-slide-to="1"></li>
                <li data-bs-target="#carouselExampleCaptions" data-bs-slide-to="2"></li>
                <li data-bs-target="#carouselExampleCaptions" data-bs-slide-to="3"></li>
              </ol>
              <div class="carousel-inner">
                <div class="carousel-item active">
                  <img src="${pokemon.sprites.front_default}" class="d-block w-100" alt="frontSprite">
                  <div class="carousel-caption d-none d-md-block">
                    <p>Gen 5 - Black & White</p>
                  </div>
                </div>
                <div class="carousel-item">
                  <img src="${pokemon.sprites.front_shiny}" class="d-block w-100" alt="frontShinySprite">
                  <div class="carousel-caption d-none d-md-block">
                    <p>Gen 5 - Black & White</p>
                  </div>
                </div>
                <div class="carousel-item">
                  <img src="${pokemon.sprites.back_default}" class="d-block w-100" alt="backSprite">
                  <div class="carousel-caption d-none d-md-block">
                    <p>Gen 5 - Black & White</p>
                  </div>
                </div>
                <div class="carousel-item">
                  <img src="${pokemon.sprites.back_shiny}" class="d-block w-100" alt="backSprite">
                  <div class="carousel-caption d-none d-md-block">
                    <p>Gen 5 - Black & White</p>
                  </div>
                </div>
              </div>
              <a class="carousel-control-prev" href="#carouselExampleCaptions" role="button" data-bs-slide="prev">
                <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                <span class="visually-hidden">Previous</span>
              </a>
              <a class="carousel-control-next" href="#carouselExampleCaptions" role="button" data-bs-slide="next">
                <span class="carousel-control-next-icon" aria-hidden="true"></span>
                <span class="visually-hidden">Next</span>
              </a>
            </div>
                  <div class="card-body">
                      <h5 class="card-title">${pokemon.name}</h5>
                      <p class="card-text" id="description">${displayInfo(url)}</p>
                  </div>
                  <ul class="list-group list-group-flush">
                      <li class="list-group-item" id="moves">Hapiness: ${species.base_happiness}</li>
                      <li class="list-group-item" id="moves">Hapiness: ${species.flavor_text_entries[1].flavor_text}</li>
                      <li class="list-group-item" id="types">${displayTypes(pokemon.types)}</li>
                      <li class="list-group-item" id="abilities"><b>abilities:</b><br />${displayAbilities(pokemon.abilities)}</li>
                  </ul>

              </div>
          </div>`;
    document.getElementById('list-info').innerHTML = html;
}

let currentNumber = 0;

export const getPokemon = async() => {
    const pokemon = await fetchPokemon('pikachu');
    console.log(pokemon);
}

export const fetchPokemons = async() => {
    const response = await fetch(`https://pokeapi.co/api/v2/pokemon?offset=${currentNumber}&limit=20`);
    const json = await response.json();
    return json.results;
}


export const getPokemons = async(el) => {
    const pokemons = await fetchPokemons();
    currentNumber = currentNumber + 20;
    const html = pokemons.map((e) => `<div>${e.name}</div>`).join('');
    document.getElementById(el).innerHTML += html;
}
