import style from "./Card.module.css";

export default function Card({conteudo}){
    return(
        <>
            <div className={style.container}>
                <p>{conteudo}</p>
            </div>
        </>
    )

}