import { useState, useEffect } from "react";

export default function Saudacao(){
    const [mensagem, setMensagem] = useState("");

    useEffect(()=>{
        const hora = new Date().getHours();
        if(hora >=18 || hora < 5){
           setMensagem("Bom dia!");
        }else{
            setMensagem("Boa tarde!");
        }
    },[])


    return (
      <>
       <h2>Mensagem: {mensagem}</h2>
  
      </>
    )
}