export const GET_POKEMONS = "GET_POKEMONS";
export const GET_POKEMON_PROFILE = "GET_POKEMON_PROFILE";
export const SEARCH_POKEMON = "SEARCH_POKEMON";
export const CLEAR_POKEMONS = "CLEAR_POKEMONS";
export const CLEAR_POKEMON = "CLEAR_POKEMON";
export const POKEMON_ERROR = "POKEMON_ERROR";
export const SET_ALERT = "SET_ALERT";
export const REMOVE_ALERT = "REMOVE_ALERT";
export const CLEAR_ERROR = "CLEAR_ERROR";

export type REDUCER_ACTION_TYPE =
  | typeof GET_POKEMONS
  | typeof GET_POKEMON_PROFILE
  | typeof SEARCH_POKEMON
  | typeof CLEAR_POKEMONS
  | typeof CLEAR_POKEMON
  | typeof POKEMON_ERROR
  | typeof SET_ALERT
  | typeof REMOVE_ALERT
  | typeof CLEAR_ERROR;

export type ReducerAction = {
  type: REDUCER_ACTION_TYPE;
  payload?: any;
};
