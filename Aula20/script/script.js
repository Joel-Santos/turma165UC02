let visor = document.getElementById('visor');
let expressao = "";

function limpar() {
    expressao = "";
    visor.textContent = "0";
}

function adicionar(valor) {
    if (valor === "*") {
        visor.textContent += "×";
    } else if (valor === "/") {
        visor.textContent += "÷";
    } else {
        expressao += valor;
        visor.textContent += expressao;
    }

}

function calcular() {
    visor.textContent = eval(expressao);
    expressao = visor.textContent;
}
function apagar() {
    expressao = expressao.slice(0, -1)
    visor.textContent = expressao || "0";
}