// import React from "react"
// import ReactDOM from "react-dom"
// import {  observable, makeAutoObservable } from "mobx"
//import { observer } from "mobx-react-lite"

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
