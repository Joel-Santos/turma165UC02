import ListLivro from "../../components/ListLivro/ListLivro";
import { bancoLivros } from "../../data/banco";

export default function Catalago(){
    return(
        <>
            <div>
                <h1>Catalogo Livros</h1>
                <ListLivro livros={bancoLivros}/>
            </div>
        </>

    )
}