import { GET_POKEMONS, GET_POKEMON_PROFILE, POKEMON_ERROR, SEARCH_POKEMON, CLEAR_POKEMON, CLEAR_POKEMONS, CLEAR_ERROR } from '../types';

export default (state, action) => {
    switch (action.type) {
        case GET_POKEMONS:
            return {
                ...state,
                loading: false,
                pokemons: action.payload
            };
        case GET_POKEMON_PROFILE:
            return {
                ...state,
                loading: false,
                pokemon: action.payload
            };
        case SEARCH_POKEMON:
            return {
                ...state,
                loading: false,
                pokemonSearch: action.payload
            };
        case CLEAR_POKEMONS:
            return {
                ...state,
                loading: false,
                pokemons: []
            };
        case CLEAR_POKEMON:
            return {
                ...state,
                loading: false,
                pokemon: {}
            };
        case POKEMON_ERROR:
            return {
                ...state,
                loading: false,
                error: action.payload
            };
        case CLEAR_ERROR:
            return {
                ...state,
                error: null
            }
        default:
            return {
                state
            };
    }
}