export const fetchPokemon = async (name) => {
    const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${name}`);
    const json = await response.json();
    return json;
}

let currentNumber = 0;

export const getPokemon = async () => {
    const pokemon = await fetchPokemon('pikachu');
    console.log(pokemon);
}

export const fetchPokemons = async () => {
    const response = await fetch(`https://pokeapi.co/api/v2/pokemon?offset=${currentNumber}&limit=20`);
    const json = await response.json();
    return json.results;
}


export const getPokemons = async (el) => {
    const pokemons = await fetchPokemons();
    currentNumber = currentNumber + 20;
    const html = pokemons.map((e) => `<div>${e.name}</div>`).join('');
    document.getElementById(el).innerHTML += html;
}
