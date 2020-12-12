import React, {useState, useEffect} from 'react';
import {fetchPokemon} from  '../provider/api';
import { useObserver } from 'mobx-react';
import { usePokemonStore } from '../store/RootStateContext';
import '../styles/screentop.css';

import useScript from '../util/useScript';

const ScreenTop = () => {      
    
    useScript('https://unpkg.com/@lottiefiles/lottie-player@latest/dist/lottie-player.js');

    const [loading, setloading] =  useState(true);

    const [pokeDetails, setpokeDetails] = useState([]);
    
    const pokemonStore = usePokemonStore();

    useEffect(async () => {

        if(pokemonStore.pokeDetails?.id) {
            setloading(false);
        }
    });

    //console.log(pokemonStore.pokeDetails);

    return useObserver(() => {
        //console.log(pokemonStore.pokeDetails);

        return <div class="format-screen-one">
            <div class="screen-one">
           
            <div class="scroll-top">
        { loading && <lottie-player src="https://assets9.lottiefiles.com/private_files/lf30_rBOODA.json"  background="transparent"  speed="1"  loop  autoplay></lottie-player> }
    
                    
                    { !loading && 
                    <div class="detals-display">  
                    { pokemonStore.pokeDetails?.id &&
                        <div class="footer">
                            <div class="abilitys">
                                <span>#{pokemonStore.pokeDetails?.id}</span>
                                <span><span class="description-stats">Name</span> {pokemonStore.pokeDetails?.name.toUpperCase()}</span>
                                <span><span class="description-stats">Weight</span> {pokemonStore.pokeDetails?.weight}</span>
                                <span><span class="description-stats">Height</span> {pokemonStore.pokeDetails?.height}</span>
                            </div>
                            <div class="abilitys">
                                <span><span class="description-stats">HP</span> { pokemonStore.pokeDetails?.stats && pokemonStore.pokeDetails?.stats[0]?.base_stat}</span>
                                <span><span class="description-stats">Attack</span> { pokemonStore.pokeDetails?.stats && pokemonStore.pokeDetails?.stats[1]?.base_stat}</span>
                                <span><span class="description-stats">Defesa</span> { pokemonStore.pokeDetails?.stats && pokemonStore.pokeDetails?.stats[2]?.base_stat}</span>
                                <span><span class="description-stats">Speed</span> { pokemonStore.pokeDetails?.stats && pokemonStore.pokeDetails?.stats[3]?.base_stat}</span>
                            </div>
                        </div>
                    }

                     

                        <div class="description"></div>
                        <div class="imgPoke">
                            { pokemonStore.pokeDetails?.sprites?.front_default && <img class="img-details" src={pokemonStore.pokeDetails?.sprites?.front_default} /> }
                        </div>
                      
                    </div>
                    }

                    
                    

                </div>
            </div>
        </div>
    });
}

export default ScreenTop;
 