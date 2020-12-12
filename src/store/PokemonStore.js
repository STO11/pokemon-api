export function createPokemonStore() {
    return {
        pokemons : [],
        pokeDetails : {},
        setListPokemon(list) {
            this.pokemons = list;
        },
        setPokeDetails(pokemon) {
            this.pokeDetails = pokemon;
        }
    }
}
