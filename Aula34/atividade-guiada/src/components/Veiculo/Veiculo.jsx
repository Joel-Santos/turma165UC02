import { useState, useEffect } from "react";
import styles from "./Veiculo.module.css";

export default function Veiculo() {
  // 1️⃣ Estado do motor
  const [ligado, setLigado] = useState(false);

  // 2️⃣ Estado da velocidade
  const [velocidade, setVelocidade] = useState(0);

  // 3️⃣ Estado do combustível
  const [combustivel, setCombustivel] = useState(100);

  // 4️⃣ Efeito para velocidade
  useEffect(() => {
    if (ligado) {
      console.log(`Velocidade atual: ${velocidade} km/h`);

      if (velocidade === 100) {
        alert("🚀 Cuidado! Alta velocidade!");
      }
    }
  }, [velocidade, ligado]);

  // 5️⃣ Efeito para ligar/desligar
  useEffect(() => {
    if (ligado) {
      console.log("🚗 O carro foi ligado!");
    } else {
      console.log("🛑 O carro foi desligado!");
      setVelocidade(0);
      alert("🔴 O carro foi desligado!");
    }
  }, [ligado]);

  // 5.1 Monitorar combustível
  useEffect(() => {
    if (combustivel<=20){
      alert("⚠️ Nível de combustível baixo! Vai ficar a pé! Procure um posto de gasolina.");
    }
  }, [combustivel]);



  // 6️⃣ Função ligar/desligar
  function ligarDesligar() {
    if (!ligado && combustivel <= 0) {
      alert("⛽ Sem combustível! Abasteça antes de ligar.");
      return;
    }
    if (!ligado && combustivel < 10) {
      alert("⛽ Combustível insuficiente! Abasteça antes de ligar o carro.");
      return;
    }
    setLigado(!ligado);
  }

  // 7️⃣ Função acelerar
  function acelerar() {
    if (!ligado) {
      return;
    }
    if (combustivel > 0) {
      setVelocidade(velocidade + 10);
      setCombustivel(Math.max(combustivel - 5, 0));
    } else {
      alert("⛽ Acabou o combustível!");
      setLigado(false);
    }
  }

  // 8️⃣ Função frear
  function frear() {
    if (!ligado) return;

    if (velocidade > 0) {
      setVelocidade(velocidade - 10);
      setCombustivel(Math.min(combustivel - 1, 100));
    }
  }
//8.1 Função para tirar o carro do prego (abastecer)
function abastecer(){
  setCombustivel(100);
  alert("⛽ Tanque cheio! Arrocha");
}


  // 9️⃣ JSX
  return (
    <>
      <div className={styles.painel}>
        <h2>Painel do Veículo</h2>
        <p><strong>Status:</strong> {velocidade===0 ?  "❌ Parado" : ligado ? "🚗 Ligado" : "🛑 Desligado"}</p>
        <p><strong>Velocidade:</strong> {velocidade} km/h</p>
        <p><strong>Combustível:</strong> {combustivel.toFixed(0)}%</p>
        <progress
  className={
    combustivel <= 20
      ? styles.combustivelCritico
      : combustivel <= 40
      ? styles.combustivelBaixo
      : styles.combustivel
  }
  value={combustivel}
  max="100"
/>

        <div className={styles.botoes}>
          <button onClick={ligarDesligar}>
            {ligado ? "Desligar" : "Ligar"}
          </button>
          <button onClick={acelerar} disabled={!ligado}>Acelerar</button>
          <button onClick={frear} disabled={!ligado || velocidade === 0}>Frear</button>
          <button onClick={abastecer} disabled={ligado || combustivel===100}>Abastecer</button>
        </div>
      </div>
    </>
  );
}