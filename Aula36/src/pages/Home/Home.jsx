import { useState, useEffect } from "react";
import BuscaCep from "../../components/BuscaCep/BuscaCep";

export default function Home() {
    const [cep, setCep] = useState("");
    const [dadosEndereco, setDadosEndereco] = useState(null);
    const [erro, setErro] = useState("");

    useEffect(() => {
        if (cep === "") {
            return
        }
        async function buscarEndereco() {
            try {
                const resposta = await fetch(`https://viacep.com.br/ws/${cep}/json/`);
                if (!resposta.ok) {
                    throw new Error("Erro ao buscar o cep");
                }
                const dados = await resposta.json();
                if (dados.erro) {
                    setErro("❌ CEP não encontrado");
                } else {
                    setDadosEndereco(dados);
                    setErro("");
                    console.log(dados)
                }
            } catch (error) {
                setErro(error.message);
            }
        }
        buscarEndereco();
    }, [cep]);

    return (
        <>
            <input type="text"
                placeholder="Digite o CEP"
                onKeyDown={(e) => {
                    if (e.key === "Enter") setCep(e.target.value)
                }}
            />
            {erro && <p>{erro}</p>}
            {dadosEndereco &&
                <BuscaCep
                    cep={dadosEndereco.cep}
                    logradouro={dadosEndereco.logradouro}
                    bairro={dadosEndereco.bairro}
                    uf={dadosEndereco.uf}
                    localidade={dadosEndereco.localidade}
                />
            }
        </>
    )


}
