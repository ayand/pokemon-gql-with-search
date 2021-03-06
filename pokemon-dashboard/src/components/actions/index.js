import axios from 'axios';

export const ADD_TYPE = "ADD_TYPE";
export const REMOVE_TYPE = "REMOVE_TYPE";
export const SELECT_POKEMON = "SELECT_POKEMON";
export const LOADING_STARTED = "LOADING_STARTED";
export const LOADING_DONE = "LOADING_DONE";
export const X_STAT = "X_STAT";
export const Y_STAT = "Y_STAT";
export const ONE_TYPE = "ONE_TYPE";

export const showOneType = () => {
    return {
        type: ONE_TYPE
    }
}

export const changeXStat = (stat) => {
    return {
        type: X_STAT,
        stat: stat
    }
}

export const changeYStat = (stat) => {
    return {
        type: Y_STAT,
        stat: stat
    }
}

export const initPokemon = () => {
    console.log("INIT");
    return {
        type: LOADING_STARTED
    }
}

export const getPokemon = (pokemonArray) => {
    return {
        type: LOADING_DONE,
        pokemon: pokemonArray
    }
}



export const addType = (type) => {
    return {
        type: ADD_TYPE,
        pokemonType: type
    }
}

export const removeType = (type) => {
    return {
        type: REMOVE_TYPE,
        pokemonType: type
    }
}

export const selectPokemon = (pokemon) => {
    return {
        type: SELECT_POKEMON,
        pokemon: pokemon
    }
}

export function fetchPokemon() {
    return function(dispatch) {
        dispatch(initPokemon());
        return axios.get("http://localhost:3001/pokemon")
            .then(
                response => { dispatch(getPokemon(response.data)) },
                error => console.log('An error occurred ' + error)
            )
    }
}
