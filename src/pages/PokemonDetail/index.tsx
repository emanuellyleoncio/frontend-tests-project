import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { PokemonType } from "../../types/PokemonType";
import styles from "./styles.module.scss";

interface IProps {
  loadDetailPokemon: (id: number) => Promise<PokemonType>;
}

export default function PokemonDetail({ loadDetailPokemon }: IProps) {
  const params = useParams();
  const [pokemon, setPokemon] = useState<PokemonType>({
    id: 0,
    image: "",
    name: "",
    type: "",
  });
  const [error, setError] = useState("");

  useEffect(() => {
    (async () => {
      setError("");

      if (!params.id || params.id === "0") {
        setError("O id não é válido!");
        return;
      }

      const response = await loadDetailPokemon(parseInt(params.id));
      setPokemon(response);
    })();
  }, []);

  return (
    <div className={styles.container}>
      <div>
        <h1>{pokemon.name}</h1>
        <img src={pokemon.image} alt={pokemon.name} />
        <strong>{pokemon.type}</strong>
      </div>
      <Link to="/dashboard">Voltar</Link>
      {error && <strong>{error}</strong>}
    </div>
  );
}
