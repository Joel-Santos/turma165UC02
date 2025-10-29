import Livro from "../../components/Livro/Livro";
import style from "./ListLivro.module.css";

export default function ListLivro({ livros = []}) {

    return (
        <>
            <div className={style.container}>
                {
                    livros.length > 0 ?
                        livros.map((liv, index) => (
                            <Livro
                                key={index}
                                titulo={liv.titulo}
                                autor={liv.autor}
                                ano={liv.ano}
                                genero={liv.genero}
                                capa={liv.capa}
                                disponivel={liv.disponivel}
                                badge={liv.badge}
                                children={liv.children}
                            />
                        ))
                    
                    : <p>Nenhum livro no Banco!</p>
                }
            </div>

        </>
    )

}