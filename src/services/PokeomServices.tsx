import { PokemonType } from "../types/PokemonType";

const baseUrl = "http://localhost:3000";

export async function loadDataPokemon(): Promise<PokemonType[]> {
  const response = await fetch(`${baseUrl}/pokemon`);
  return await response.json();
}

export async function loadDetailPokemon(id: number): Promise<PokemonType> {
  const response = await fetch(`${baseUrl}/pokemon/${id}`);
  return await response.json();
}