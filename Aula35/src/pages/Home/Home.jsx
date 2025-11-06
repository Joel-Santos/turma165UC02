import { useState, useEffect } from "react";
import PokemonCard from "../../components/PokemonCard/PokemonCard";
import style from "./Home.module.css";

export default function Home() {
  const [nomeBusca, setNomeBusca] = useState("");
  const [pokemon, setPokemon] = useState(null);
  const [erro, setErro] = useState("");

  useEffect(() => {
    if (nomeBusca === "") return;

    async function buscarPokemon() {
      try {
        const resposta = await fetch(
          `https://pokeapi.co/api/v2/pokemon/${nomeBusca.toLowerCase()}`
        );

        if (!resposta.ok) {
          throw new Error("Pokemón não encontrado!");
        }

        const dados = await resposta.json();
        const info = {
          nome: dados.name,
          imagem: dados.sprites.front_default,
          tipo: dados.types[0].type.name,
        };

        setPokemon(info);
        setErro("");
      } catch (error) {
        setErro(error.message);
        setPokemon(null);
      }
    }

    buscarPokemon();
  }, [nomeBusca]);

  return (
    <div className={style.home}>
      <h1>🔎 Buscar Pokemón</h1>
      <input
        type="text"
        placeholder="Digite o nome do Pokemón e pressione Enter"
        onKeyDown={(e) => {
          if (e.key === "Enter") setNomeBusca(e.target.value);
        }}
      />

      {erro && <p>{erro}</p>}

      {pokemon && (
        <PokemonCard
          nome={pokemon.nome}
          tipo={pokemon.tipo}
          imagem={pokemon.imagem}
        />
      )}
    </div>
  );
}
