export default function BuscaCep({cep, logradouro, bairro, uf, localidade}){
    return(
        <>
            <div>
                <p>Cep:{cep}</p>
                <p>Logradouro:{logradouro}</p>
                <p>Bairro: {bairro}</p>
                <p>UF: {uf}</p>
                <p>Localidade: {localidade}</p>
            </div>
        </>
    )
    
}