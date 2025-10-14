let visor = document.getElementById('visor');
let expressao = "";

function limpar() {
    expressao = "";
    visor.textContent = "0";
}

function adicionar(valor) {
    expressao += valor;
    visor.textContent = expressao;
}

function calcular() {
    let resultado = expressao.replace("×", "*").replace("÷", "/");
    visor.textContent = eval(resultado);
    expressao = visor.textContent;
}
function apagar() {
    expressao = expressao.slice(0, -1)
    visor.textContent = expressao || "0";
}