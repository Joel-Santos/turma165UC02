let texto = document.querySelector("h1");
texto.textContent = "Aula manipulação do Dom";
texto.innerHTML += "<u> teste </u>" 

document.body.innerHTML += "<main> <h3> Criando elementos inline </h3> </main>"

let novoParagrafo = document.createElement("p");
novoParagrafo.textContent = "Texto criado dinamicamente!";
novoParagrafo.classList.add("texto");
document.body.appendChild(novoParagrafo);

function adicionarItem(){
    let item = document.getElementById("item").value;
    let novoItem = document.createElement("li");
    novoItem.textContent = item;
    document.getElementById("lista").appendChild(novoItem);
    document.getElementById("item").value = "";

}
function condicao(){
    let idade = parseInt(prompt("Digite sua idade:"));

if(idade < 18){
    alert("Você é menor de idade!");
}else if(idade < 60){
    alert("Você é adulto!");
}else{
    alert("Você é idoso!");
}
}


function verificarIdade(){
    let idade = parseInt(document.getElementById("idade").value);
    if(idade < 18){
        document.getElementById("resultado").textContent = "Você é menor de idade !";
    }else if(idade < 60){
        document.getElementById("resultado").textContent = "Você é adulto!";
    }else{
        document.getElementById("resultado").textContent = "Você é idoso!";
    }
}