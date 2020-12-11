import React, {useState, useEffect} from 'react';
import {fetchPokemon} from  '../provider/api';
import { useObserver } from 'mobx-react';
import { usePokemonStore } from '../store/RootStateContext';

import useScript from '../util/useScript';

const ScreenTop = () => {      
    
    useScript('https://unpkg.com/@lottiefiles/lottie-player@latest/dist/lottie-player.js');

    const loading = true;

    const [pokeDetails, setpokeDetails] = useState([]);
    
    const pokemonStore = usePokemonStore();

    useEffect(async () => {
        // async function fetchData() { 
        //     var pokemons = await fetchPokemon();
        //     if(pokemons.results.length > 0){
        //         setpokemonsList(pokemons.results);
        //         pokemonStore.setListPokemon(pokemons.results);
        //     }
        // }
        // fetchData();
       


        console.log(pokemonStore.pokeDetails);

    });

    //console.log(pokemonStore.pokeDetails);

    return useObserver(() => 
        <div class="format-screen-one">
            <div class="screen-one">
{ loading && <lottie-player src="https://assets9.lottiefiles.com/private_files/lf30_rBOODA.json"  background="transparent"  speed="1"  loop  autoplay></lottie-player> }
                { JSON.stringify(pokemonStore.pokeDetails) }
            </div>
        </div>
    );
}

export default ScreenTop;
 