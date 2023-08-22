import { createContext } from "react";
import { PokemonContextType } from "../../types/interface.type";

const PokemonContext = createContext<PokemonContextType | null>(null);

export default PokemonContext;
