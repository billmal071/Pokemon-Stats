export const GET_POKEMONS = "GET_POKEMONS";
export const GET_POKEMON_PROFILE = "GET_POKEMON_PROFILE";
export const SEARCH_POKEMON = "SEARCH_POKEMON";
export const CLEAR_POKEMONS = "CLEAR_POKEMONS";
export const CLEAR_POKEMON = "CLEAR_POKEMON";
export const POKEMON_ERROR = "POKEMON_ERROR";
export const SET_ALERT = "SET_ALERT";
export const REMOVE_ALERT = "REMOVE_ALERT";
export const CLEAR_ERROR = "CLEAR_ERROR";

export type POKEMON_REDUCER_ACTION_TYPE =
  | typeof GET_POKEMONS
  | typeof GET_POKEMON_PROFILE
  | typeof SEARCH_POKEMON
  | typeof CLEAR_POKEMONS
  | typeof CLEAR_POKEMON
  | typeof POKEMON_ERROR
  | typeof CLEAR_ERROR;

export type PokemonReducerAction = {
  type: POKEMON_REDUCER_ACTION_TYPE;
  payload?: any;
};

export type ALERT_REDUCER_ACTION_TYPE = typeof SET_ALERT | typeof REMOVE_ALERT;

export type AlertReducerAction = {
  type: ALERT_REDUCER_ACTION_TYPE;
  payload: { msg: string; id: string; type: string };
};
