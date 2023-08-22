import { createContext } from "react";
import {
  PokemonContextType,
  PokemonDataType,
  PokemonsDataType,
} from "../../types/interface.type";

const initial = {
  pokemons: [] as PokemonsDataType,
  pokemon: {} as PokemonDataType,
  pokemonSearch: {},
  loading: false,
  error: null,
  getPokemon: () => {},
  getPokemonProfile: (_name: string) => {},
  searchPokemon: (_text: string) => {},
  clearPokemons: () => {},
  clearPokemon: () => {},
  clearError: () => {},
};

const PokemonContext = createContext<PokemonContextType>(initial);

export default PokemonContext;
