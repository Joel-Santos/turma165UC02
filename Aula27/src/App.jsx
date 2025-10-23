import Card from "./components/Card/Card";

export default function App(){

  let info = [
    "Aula de React + CSS",
    "Aula de Python",
    "Aula de Java",
    "Aula de PHP",
    "Aula de Grid css",
    "Teste"
  ];
    return(
      <>
        <h1>React</h1>
        <p>Teste</p>
        <Card conteudo="Aula de React + CSS" />
        {
          info.map((i, index) =>(
            <Card key={index} conteudo={i} />
          ))
        }
      </>
    )
}
