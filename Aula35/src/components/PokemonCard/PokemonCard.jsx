import style from "./PokemonCard.module.css";

export default function PokemonCard({ nome, tipo, imagem }) {
  return (
    <div className={style.card}>
      <h2>{nome}</h2>
      <img src={imagem} alt={nome} />
      <p><strong>Tipo:</strong> {tipo}</p>
    </div>
  );
}
