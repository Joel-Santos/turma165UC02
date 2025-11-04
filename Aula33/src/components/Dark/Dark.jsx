import { useState, useEffect } from "react";
import style from "./Dark.module.css";

export default function Dark(){
    const [dark, setDark] = useState(false);

    useEffect(()=>{
        const hora = new Date().getHours();
        if(hora >=18 || hora < 5){
            setDark(true);
        }else{
            setDark(false);
        }
    },[])


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