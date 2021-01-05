import { combineReducers } from 'redux';
import {
  ADD_TYPE,
  REMOVE_TYPE,
  LOADING_STARTED,
  LOADING_DONE,
  X_STAT,
  Y_STAT,
  ONE_TYPE,
} from '../actions';

const pokemon = (state = [], action) => {
    if (action.type === LOADING_DONE) {
        return action.pokemon;
    }
    return state;
}

const includedTypes = (state = [], action) => {
    if (action.type === ADD_TYPE) {
        if (state.length <= 1) {
            return state.concat([action.pokemonType]);
        }
        return [state[0], action.pokemonType];
    } else if (action.type === REMOVE_TYPE) {
        return state.filter(d => d !== action.pokemonType);
    }
    return state;
}


const loading = (state = true, action) => {
    switch (action.type) {
        case LOADING_STARTED:
            return true;
        case LOADING_DONE:
            return false;
        default:
            return state;
    }
    /*if (action.type === LOADING_STARTED) {
        return true;
    } else if (action.type === LOADING_DONE) {
        return false;
    }
    return state;*/
}

const xStat = (state = "Attack", action) => {
    if (action.type === X_STAT) {
        return action.stat;
    }
    return state;
}

const yStat = (state = "Defense", action) => {
    if (action.type === Y_STAT) {
        return action.stat;
    }
    return state;
}

const oneType = (state = false, action) => {
    switch (action.type) {
        case ONE_TYPE:
            return true;
        case ADD_TYPE:
        case REMOVE_TYPE:
            return false;
        default:
            return state;
    }
}


const reducer = combineReducers({
    pokemon,
    includedTypes,
    loading,
    xStat,
    yStat,
    oneType,
})

export default reducer;
