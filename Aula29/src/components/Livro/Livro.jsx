import style from "./Livro.module.css";

export default function Livro({titulo, autor, ano, genero, capa, disponivel, badge, children="Nenhuma informação a mais disponivel"}){

    return(
        <>
            <div className={style.card}>
                <img src={capa} alt={titulo} />
                <h2>{titulo}</h2>
                <p>Autor: {autor}</p>
                <p>Ano: {ano}</p>
                <p>Gênero: {genero}</p>
                <p>{badge}</p>
                {disponivel ? <p className={style.disponivel}>Status: Disponível</p> : <p className={style.indisponivel}>Status: Indiponível</p>}
                {children}
            </div>
        
        </>
    )

}