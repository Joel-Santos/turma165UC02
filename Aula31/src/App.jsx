import { useState } from "react"
import style from "./App.module.css";
export default function App() {
  const [dark, setDark] = useState(false);
  return (
    <>
      <div className={dark ? style.dark : style.light}>
        <h1>Aula sobre useStates - DarkMode</h1>
        <h2>{dark ? "🌙 Modo Dark" : "☀️ Modo Light"}</h2>
        <button onClick={() => setDark(!dark)} className={style.botao}>
          {dark ? "Ativar Modo Claro" : "Ativar Modo Dark"}
        </button>
      </div>

    </>
  )

}