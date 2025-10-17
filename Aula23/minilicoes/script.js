let cores = ["Azul", "Amarelo", "Verde"];
let section = document.querySelector("section");

for (let i = 0; i < cores.length; i++) {
    let p = document.createElement("p");
    p.textContent = cores[i];
    p.classList.add(cores[i]);
    section.appendChild(p);
}
// cores.forEach(c =>{
//     let p = document.createElement("p");
//     p.textContent = c;
//     section.appendChild(p);
// })

function alunos() {
    let alunos = [];
    let section = document.querySelectorAll("section");
    let quantidade = parseInt(prompt("Informe a quantidade de alunos"));
    if(quantidade>0 && typeof quantidade === "number"){
        for(let i=0; i<quantidade; i++){
            let nome = prompt(`Informe o nome do aluno ${i+1}:`);
            alunos.push(nome);
        }
        alunos.forEach(a =>{
            let item = document.createElement("li")
            item.textContent = a;
            section[1].appendChild(item);
        })
    }else{
        alert("Entrada inválida!");
    }


}
alunos();