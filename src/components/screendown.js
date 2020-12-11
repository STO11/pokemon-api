import React, { useState, useEffect } from 'react';
import '../styles/screendown.css';
import {fetchPokemon, fetchDetailsPokemon} from  '../provider/api';
import { useObserver } from 'mobx-react';
import { usePokemonStore } from '../store/RootStateContext';

const ScreenDown = () => {   

    const [pokemonsList, setpokemonsList] = useState([]);
    const pokemonStore = usePokemonStore();

    useEffect(async () => {
        async function fetchData() { 
            var pokemons = await fetchPokemon();
            if(pokemons.results.length > 0){
                setpokemonsList(pokemons.results);
                pokemonStore.setListPokemon(pokemons.results);
            }
        }
        fetchData();
    }); //, [pokemonsList]

 

    async function detalsPokemon(pokemon) { 
        var pokemon = await fetchDetailsPokemon(pokemon.url);
        if(pokemon){
            console.log(pokemon);

            //forms
            // var forms = await fetchDetailsPokemon('https://pokeapi.co/api/v2/pokemon/'+pokemon.id+'/');

            // if(forms){
            //     pokemon.forms = forms;
            // }

            // //console.log(pokemon);
            pokemonStore.setPokeDetails(pokemon);
        }
        // if(pokemons.results.length > 0){
        //     setpokemonsList(pokemons.results);
        //     pokemonStore.setListPokemon(pokemons.results);
        // }
    }
    

    return (
        <div class="format-screen-two">
            {/* {JSON.stringify(pokemonsList)} */}
            {/* {JSON.stringify(pokemonStore.pokemons)} */}
            <div class="container-screen-two">
                <div class="stick-control"></div>
                    <div class="screen-two">
                        
                        <div class="scroll-table">
                            <table class="table">
                                <thead>
                                    <th>Choose a Pokemon</th>
                                </thead>
                                <tbody>
                                    {pokemonsList.length > 0 && pokemonsList.map(item => <tr onClick={() => detalsPokemon(item)} key={item.name}> <td>{item.name}</td></tr>) }
                                </tbody>
                            </table>
                            <div class="space-final-scroll"></div>
                        </div>
                </div>
                <div class="buttons-control">
                    <div class="bt"><span></span></div>
                    <div class="bt-row">
                        <div class="bt"><span></span></div>
                        <div class="bt"><span></span></div>
                    </div>
                    <div class="bt"><span></span></div>
                </div>
            </div>
        </div>
    );
}

export default ScreenDown;