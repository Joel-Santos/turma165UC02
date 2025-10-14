function questao01() {
    let x = parseInt(document.getElementById("x").value);
    let y = parseInt(document.getElementById("y").value);
    let z = parseInt(document.getElementById("z").value);
    let media = parseInt(document.getElementById("media").value);
    let resultado = document.getElementById("resultado01");

    if (x >= 0 && y >= 0 && z >= 0) {
        switch (media) {
            case 1:
                resultado.textContent = ((x + y + z) / 3).toFixed(2);
                break;
            case 2:
                resultado.textContent = Math.cbrt(x * y * z).toFixed(2);
                break;
            case 3:
                resultado.textContent = ((x * 2 + y * 3 + z * 5) / 10).toFixed(2);
                break;
            default:
                resultado.textContent = "Opção Inválida!";
        }
    } else {
        resultado.textContent = "Não possível calcular com números negativos.";
    }
}

// 2) Crie uma página web interativa que permita ao usuário calcular operações básicas entre dois números.
// Requisitos:
// Permitir que o usuário digite dois números em campos separados.
// Permitir que o usuário escolha qual operação deseja realizar:
// Soma (+)
// Subtração (-)
// Multiplicação (×)
// Divisão (÷)
// Ao clicar em “Calcular”, a página deve exibir o resultado da operação.
// Caso o usuário não selecione uma operação válida, deve aparecer a mensagem “Operação inválida”.
// Caso o usuário tente realizar divisão por zero, deve aparecer uma mensagem de erro.
function questao02() {
    let num01 = Number(document.getElementById("num01").value);
    let num02 = Number(document.getElementById("num02").value);
    let op = document.getElementById("op").value;
    let resultado = document.getElementById("resultado02");

    switch (op) {
        case "+":
            resultado.textContent = num01 + num02;
            break;
        case "-":
            resultado.textContent = num01 - num02;
            break;
        case "*":
            resultado.textContent = num01 * num02;
            break;
        case "/":
            if (num02 === 0) {
                resultado.textContent = "Não é possível realizar divisão por 0.";
            } else {
                resultado.textContent = num01 / num02;
            }
            break;
        default:
            resultado.textContent = "Opção inválida!";
    }
}