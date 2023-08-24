export type PokemonDataType = {
  abilities: Array<{
    ability: {
      name: string;
      url: string;
    };
    is_hidden: boolean;
    slot: number;
  }>;
  base_experience: number;
  forms: [
    {
      name: string;
      url: string;
    }
  ];
  game_indices: Array<{
    game_index: number;
    version: {
      name: string;
      url: string;
    };
  }>;
  height: number;
  held_items: [
    {
      item: {
        name: string;
        url: string;
      };
      version_details: Array<{
        rarity: number;
        version: {
          name: string;
          url: string;
        };
      }>;
    }
  ];
  id: number;
  is_default: boolean;
  location_area_encounters: string;
  moves: Array<{
    move: {
      name: string;
      url: string;
    };
  }>;
  name: string;
  order: number;
  past_types: [{}];
  species: {
    name: string;
    url: string;
  };
  sprites: {
    back_default: string;
    back_shiny: string;
    front_default: string;
    front_shiny: string;
    other: {
      dream_world: {
        front_default: string;
      };
    };
  };
  stats: [
    {
      base_stat: number;
      effort: number;
      stat: {
        name: string;
        url: string;
      };
    }
  ];
  types: [
    {
      type: {
        name: string;
        url: string;
      };
      slot: number;
    }
  ];
  weight: number;
};

export type PokemonsDataType = Array<{
  name: string;
  url: string;
}>;

export type PokemonType = {
  pokemons: PokemonsDataType;
  pokemon: PokemonDataType;
  pokemonSearch: PokemonDataType;
  loading: boolean;
  error: any;
};

export type PokemonContextType = {
  pokemons: PokemonsDataType;
  pokemon: PokemonDataType;
  pokemonSearch: PokemonDataType;
  loading: boolean;
  error: any;
  getPokemon: () => void;
  getPokemonProfile: (name: string) => void;
  searchPokemon: (text: string) => void;
  clearPokemons: () => void;
  clearPokemon: () => void;
  clearError: () => void;
};

export type AlertType = {
  msg: string;
  type: string;
  id: string;
};

export type AlertContextType = {
  setAlert: (msg: string, type: string) => void;
} & AlertType;
