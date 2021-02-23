export const fetchPokemon = async(name) => {
    const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${name}`);
    const json = await response.json();
    showInfo(json);
}

export const displayTypes = (types) => {
    const typeNames = [];
    for (let i = 0; i < types.length; i++) {
        const typeName = types[i].type.name;
        typeNames.push(typeName);
    }
    return typeNames.join('/');
}

export const displayAbilities = (abilities) => {
    const abilityList = [];
    for (let x = 0; x < abilities.length; x++) {
        const abilityName = abilities[x].ability.name;
        abilityList.push(abilityName);
    }
    return abilityList.join('<br>');
}

export const showInfo = async(event) => {
    console.log(`${event.name}`)
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
                  <img src="${event.sprites.front_default}" class="d-block w-100" alt="frontSprite">
                  <div class="carousel-caption d-none d-md-block">
                    <p>Gen 5 - Black & White</p>
                  </div>
                </div>
                <div class="carousel-item">
                  <img src="${event.sprites.front_shiny}" class="d-block w-100" alt="frontShinySprite">
                  <div class="carousel-caption d-none d-md-block">
                    <p>Gen 5 - Black & White</p>
                  </div>
                </div>
                <div class="carousel-item">
                  <img src="${event.sprites.back_default}" class="d-block w-100" alt="backSprite">
                  <div class="carousel-caption d-none d-md-block">
                    <p>Gen 5 - Black & White</p>
                  </div>
                </div>
                <div class="carousel-item">
                  <img src="${event.sprites.back_shiny}" class="d-block w-100" alt="backSprite">
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
                      <h5 class="card-title">${event.name}</h5>
                      <p class="card-text" id="description">DEX ENTRY</p>
                  </div>
                  <ul class="list-group list-group-flush">
                      <li class="list-group-item" id="types">${displayTypes(event.types)}</li>
                      <li class="list-group-item" id="abilities"><b>abilities:</b><br />${displayAbilities(event.abilities)}</li>
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
    pokemons.forEach((e) => {
        const button = document.createElement('button');
        button.addEventListener('click', () => fetchPokemon(e.name));
        button.className = 'btn btn-primary';
        button.innerHTML = e.name;
        const line = document.createElement('div');
        line.append(button);
        document.getElementById(el).append(line);
    });

    // pager
    document.getElementById('pager').innerHTML = `Page ${(currentNumber / 20)}`;

}