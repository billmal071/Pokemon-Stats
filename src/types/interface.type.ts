export type PokemonType = {
  pokemons: {}[];
  pokemon: {};
  pokemonSearch: {};
  loading: boolean;
  error: any;
};

export type PokemonContextType = {
  pokemons: {}[];
  pokemon: {};
  pokemonSearch: {};
  loading: boolean;
  error: any;
  getPokemon: () => void;
  getPokemonProfile: (name: string) => void;
  searchPokemon: (text: string) => void;
  clearPokemons: () => void;
  clearPokemon: () => void;
  clearError: () => void;
};
