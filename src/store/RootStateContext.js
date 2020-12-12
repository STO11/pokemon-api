import React from 'react';
import {useLocalStore} from 'mobx-react';
import { createPokemonStore } from './PokemonStore';
const PokemonStoreContext  = React.createContext(null);
export const PokemonProvider = ({children}) => {
    const pokemonStore = useLocalStore(createPokemonStore);
    return <PokemonStoreContext.Provider value={pokemonStore}>
        {children}
    </PokemonStoreContext.Provider>
}
export const usePokemonStore = () => React.useContext(PokemonStoreContext);