import Card from "../Card/Card";

export default function Main(){
    return(
        <>
            <main>
               <Card pergunta="1. Explique com suas palavras o que é um componente REACT." resposta="Um componente React é uma função ou classe que retorna um pedaço de interface de usuário (UI) para ser exibido na tela." />
               <Card pergunta="2. Qual é a função do arquivo app.jsx em um projeto REACT?" resposta="O arquivo app.jsx geralmente serve como o componente raiz da aplicação, onde outros componentes são organizados e renderizados." />
               <Card pergunta="Descreva o Papel do arquivo main.jsx ?" resposta="O arquivo main.jsx é responsável por renderizar o componente raiz (geralmente App) no DOM, conectando a aplicação ao HTML." />
               <Card pergunta="O ciclo de vida de um componente React pode ser dividido em três fases. Quais são elas?" resposta="As três fases do ciclo de vida de um componente React são: montagem, atualização e desmontagem." />
            </main>
        </>
    )
}