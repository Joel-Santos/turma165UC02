import { useState } from "react";

export default function Mensagem() {
    const [mensagem, setMensagem] = useState("Olá!");

    return (
        <>
            <h2>{mensagem}</h2>

            <input
                type="text"
                placeholder="Digite uma mensagem"
                onChange={
                    (e) =>
                        e.target.value.length === 0 ?
                            setMensagem("Olá!") :
                            setMensagem(e.target.value)
                }
            />
        </>
    )

}