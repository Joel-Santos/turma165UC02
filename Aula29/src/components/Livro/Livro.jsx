export default function Livro({titulo, autor, ano, genero, capa, disponivel, badge, children="Nenhuma informação a mais disponivel"}){

    return(
        <>
            <div>
                <img src={capa} alt={titulo} />
                <h2>{titulo}</h2>
                <p>Autor: {autor}</p>
                <p>Ano: {ano}</p>
                <p>Gênero: {genero}</p>
                <p>{badge}</p>
                {disponivel ? <p>Status: Disponível</p> : <p>Status: Indiponível</p>}
                {children}
            </div>
        
        </>
    )

}