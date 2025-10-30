import { useState } from "react";
import styles from "./Exemplo.module.css";

export default function Exemplo() {
  const [valor, setValor] = useState(0);

  return (
    <div className={styles.container}>
      <p className={styles.valor}>O valor atual é: {valor}</p>
      <div className={styles.botoes}>
        <button className={styles.botao} onClick={() => setValor(valor + 1)}>Aumentar</button>
        <button className={styles.botao} onClick={() => setValor(valor - 1)}>Diminuir</button>
        <button className={styles.botao} onClick={() => valor > 0 ? setValor(valor - 1) : setValor(0)}>Diminuir v2</button>
        <button className={styles.botao} onClick={() => setValor(valor > 0 ? valor - 1 : 0)}>Diminuir v3</button>
        <button className={styles.botao} onClick={() => setValor(valor - 1)} disabled={valor <= 0}>Diminuir v4</button>
        <button className={styles.botao} onClick={() => setValor(0)}>Zerar</button>
      </div>
    </div>
  );
}