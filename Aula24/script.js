let alunos = []; //array 
let nomeAluno = document.querySelector("#nome");
let matriculaAluno = document.querySelector("#matricula");
let lista = document.querySelector("#lista");
let btnAdd = document.querySelector("#btnAdd");
let indiceEdicao = null;

btnAdd.addEventListener("click", () =>{

    if(nomeAluno.value === "" || matriculaAluno.value ===""){
        alert("Preencha todos os campos!")
    }else if(indiceEdicao === null){
        alunos.push(
            {
                "nome": nomeAluno.value,
                "matricula": matriculaAluno.value
            }
        )
    }else{
        alunos[indiceEdicao] =  {"nome": nomeAluno.value,"matricula": matriculaAluno.value};
        indiceEdicao = null;
        btnAdd.textContent = "Adicionar";
    }
    nomeAluno.value = "";
    matriculaAluno.value = "";
    mostrarAlunos();
})


function mostrarAlunos() {
    lista.textContent = "";
    alunos.forEach((a, i) => {
        let li = document.createElement("li");
        li.textContent = `Aluno: ${a.nome} - ${a.matricula}`;
        let editar = document.createElement("button");
        editar.textContent = "Editar";
        let excluir = document.createElement("button");
        editar.addEventListener("click", () => atualizar(i));
        excluir.textContent = "Excluir";
        excluir.addEventListener("click", () => apagar(i));
        li.appendChild(editar);
        li.appendChild(excluir);
        lista.appendChild(li);
    })
}

function apagar(i) {
    let excluir = window.confirm(`Você realmente deseja excluir o aluno ${alunos[i].nome} ?`);
    if (excluir) {
        alunos.splice(i, 1);
    }
    mostrarAlunos();
}

function atualizar(i) {
    btnAdd.textContent = "Atualizar";
    nomeAluno.value = alunos[i].nome;
    matriculaAluno.value = alunos[i].matricula;  
    indiceEdicao = i;
}