const url = 'https://pokeapi.co/api/v2/pokemon';

function fetchPokemon() {
    fetch(url + "?limit=151")
    .then(response => response.json())
    .then(pokemons => console.log(pokemons));
}