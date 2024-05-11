import { PokemonType } from "../types/PokemonType";

const baseUrl = "http://localhost:3000";

export async function loadDataPokemon(): Promise<PokemonType[]> {
  const response = await fetch(`${baseUrl}/pokemon`);
  return await response.json();
}
