export default function Card({pergunta, resposta}){
    return(
        <>
            <div>
                <h2>{pergunta}</h2>
                <p>{resposta}</p>
            </div>
        </>
    )
}