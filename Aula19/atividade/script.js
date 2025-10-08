/* Questão 01:
Peça ao usuário o horário atual (0 a 23) e crie um <p> com uma saudação adequada:
0 a 11: “Bom dia 🌞”
12 a 17: “Boa tarde 🌤️”
18 a 23: “Boa noite 🌙”
*/
function questao01() {
    let hora = parseInt(document.getElementById("hora").value);
    let resultado = document.getElementById("resposta");
    if (hora <= 11) {
        resultado.textContent = "Bom dia 🌞";
    } else if (hora <= 17) {
        resultado.textContent = "Boa tarde 🌤️";
    }
    else if (hora <= 23) {
        resultado.textContent = "Boa noite 🌙";
    } else {
        resultado.textContent = "Entrada inválida!";
    }
}


// Questão 05:
// Calculadora de IMC
// Peça ao usuário o peso (kg) e a altura (m) e calcule o IMC (Índice de Massa Corporal).
// A fórmula é:
// IMC = peso / (altura * altura)
// Mostre o resultado com uma mensagem de acordo com a faixa:
// IMC             Situação
// Abaixo de 18.5    “Abaixo do peso”
// 18.5 a 24.9 “Peso normal”
// 25 a 29.9   “Sobrepeso”
// 30 a 34.9   “Obesidade grau I”
// 35 a 39.9   “Obesidade grau II”
// Acima de 40 “Obesidade grau III (grave)”

function questao05() {
    let altura = parseFloat(document.getElementById("altura").value);
    let peso = parseFloat(document.getElementById("peso").value);
    let resultado = document.getElementById("resposta5");
    let imc = peso / (altura * altura);
    if (imc<18.5) {
        resultado.textContent = `Seu imc é ${imc.toFixed(2)}, Faixa: Abaixo do Peso`;
    } else if (imc<24.9) {
        resultado.textContent = `Seu imc é ${imc.toFixed(2)}, Faixa: Peso Normal`;
    }
    else if (imc <29.9) {
        resultado.textContent = `Seu imc é ${imc.toFixed(2)}, Faixa: Sobrepeso`;
    }
    else if (34.9) {
        resultado.textContent = `Seu imc é ${imc.toFixed(2)}, Faixa: Obesidade Grau I `;
    }
    else if (imc<39.9) {
        resultado.textContent = `Seu imc é ${imc.toFixed(2)}, Faixa: Obesidade Grau II`;
    }
    else if(imc>40){
        resultado.textContent = `Seu imc é ${imc.toFixed(2)}, Faixa: Obesidade grau III (grave)`;
    }
    else{
        resultado.textContent = `Não possivel calcular o IMC`;
    }
}