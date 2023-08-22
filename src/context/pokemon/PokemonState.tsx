import React, { ReactElement, ReactNode, useReducer } from "react";
import axios from "axios";
import PokemonReducer from "./pokemonReducer";
import PokemonContext from "./pokemonContext";
import {
  GET_POKEMONS,
  GET_POKEMON_PROFILE,
  POKEMON_ERROR,
  SEARCH_POKEMON,
  CLEAR_POKEMON,
  CLEAR_POKEMONS,
  CLEAR_ERROR,
} from "../types";

interface Props {
  children: ReactNode;
}

const PokemonState: React.FC<Props> = ({ children }): ReactElement => {
  const initialState = {
    pokemons: [{}],
    pokemon: {},
    pokemonSearch: {},
    loading: true,
    error: null,
  };

  const [state, dispatch] = useReducer(PokemonReducer, initialState);

  // get pokemon
  const getPokemon = async () => {
    try {
      const res = await axios.get(
        `https://pokeapi.co/api/v2/pokemon?limit=2000`
      );
      //console.log(res.data.results);
      dispatch({
        type: GET_POKEMONS,
        payload: res.data.results,
      });
    } catch (err: any) {
      console.log(err.response);
      dispatch({
        type: POKEMON_ERROR,
        payload: err.response,
      });
    }
  };

  // get specific pokemon
  const getPokemonProfile = async (name: string) => {
    try {
      const res = await axios.get(`https://pokeapi.co/api/v2/pokemon/${name}`);
      //console.log(res.data);
      dispatch({
        type: GET_POKEMON_PROFILE,
        payload: res.data,
      });
    } catch (err: any) {
      console.log(err);
      dispatch({
        type: POKEMON_ERROR,
        payload: err.response,
      });
    }
  };

  // search for pokemon
  const searchPokemon = async (text: string) => {
    try {
      const res = await axios.get(`https://pokeapi.co/api/v2/pokemon/${text}`);
      //console.log(res.data);
      dispatch({
        type: SEARCH_POKEMON,
        payload: res.data,
      });
    } catch (err: any) {
      console.log(err.response.data);
      dispatch({
        type: POKEMON_ERROR,
        payload: err.response.data,
      });
    }
  };

  // clear error
  const clearError = () => dispatch({ type: CLEAR_ERROR });

  // clear pokemon
  const clearPokemons = () => dispatch({ type: CLEAR_POKEMONS });

  // clear pokemon
  const clearPokemon = () => dispatch({ type: CLEAR_POKEMON });

  return (
    <PokemonContext.Provider
      value={{
        pokemons: state.pokemons,
        pokemon: state.pokemon,
        pokemonSearch: state.pokemonSearch,
        loading: state.loading,
        error: state.error,
        getPokemon,
        getPokemonProfile,
        searchPokemon,
        clearPokemons,
        clearPokemon,
        clearError,
      }}
    >
      {children}
    </PokemonContext.Provider>
  );
};

export default PokemonState;
