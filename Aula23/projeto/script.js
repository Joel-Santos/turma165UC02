let tarefas = []; //array 
let input = document.querySelector("#tarefa");
let lista = document.querySelector("#lista");
let btnAdd = document.querySelector("#btnAdd");
let indiceEdicao = null;

btnAdd.addEventListener("click", () => {
    if (input.value === "") {
        alert("Digite uma tarefa");
    } else if(indiceEdicao === null) {
        tarefas.push(input.value);
    }else{
        tarefas[indiceEdicao] = input.value;
        indiceEdicao = null;
        btnAdd.textContent = "Adicionar";
    }
    input.value = "";
    console.log(tarefas);
    mostrarTarefas();
});

function mostrarTarefas() {
    lista.textContent = "";
    tarefas.forEach((t, i) => {
        let li = document.createElement("li");
        li.textContent = t;
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
    let excluir = window.confirm(`Você realmente deseja excluir a tarefa ${tarefas[i]} ?`);
    if (excluir) {
        tarefas.splice(i, 1);
    }
    mostrarTarefas();
}

function atualizar(i) {
    btnAdd.textContent = "Atualizar";
    input.value = tarefas[i];
    indiceEdicao = i;
}