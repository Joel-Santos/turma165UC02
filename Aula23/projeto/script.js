let tarefas = [];
let input = document.querySelector("#tarefa");
let lista = document.querySelector("#lista");
let btnAdd = document.querySelector("#btnAdd");

btnAdd.addEventListener("click", () => {
    if (input.value === "") {
        alert("Digite uma tarefa");
    } else {
        tarefas.push(input.value);
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
    tarefas.splice(i, 1);
    mostrarTarefas();
}

function atualizar(i) {
    btnAdd.textContent ="Atualizar";
    input.value = tarefas[i];
}