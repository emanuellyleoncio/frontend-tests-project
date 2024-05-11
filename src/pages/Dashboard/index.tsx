import { useEffect, useState } from "react";
import { PokemonType } from "../../types/PokemonType";
import styles from "./styles.module.scss";

interface IProps {
  loadDataPokemon: () => Promise<PokemonType[]>
}

export default function Dashboard({loadDataPokemon}: IProps) {
  const [pokemon, setPokemon] = useState<PokemonType[]>([]);

  useEffect(() => {
    (async () => {
      const data = await loadDataPokemon();
      setPokemon(data);
    })();
  }, []);

  return (
    <div className={styles.container}>
      <h1>Dashboard</h1>

      <ul className={styles["container-pokemons"]}>
        {pokemon.map((item) => (
          <li key={item.id}>
            <h1>{item.name}</h1>
            <img src={item.image} alt={item.name} />
            <strong>{item.type}</strong>
          </li>
        ))}
      </ul>
    </div>
  );
}
