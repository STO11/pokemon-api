const url = 'https://pokeapi.co/api/v2/pokemon';

export function fetchPokemon() {
    return fetch(url + "?limit=151").then(response => response.json());
    // .then(response => response.json())
    // .then(pokemons => pokemons);
  
}

export function fetchDetailsPokemon(url) {
    return fetch(url).then(response => response.json());
}