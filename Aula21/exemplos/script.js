function exemplo() {
    const numero = parseInt(prompt("Digite um número de 0 a 4:"));

    switch (numero) {
        case 0:
            console.log("Aula de JS Hoje.");
            break;
        case 1:
            console.log("Aula de JS Amanhã.");
            break;
        case 2:
            console.log("Aula de JS Sempre.");
            break;
        default:
            console.log("Opção Inválida");
    }
}

//exemplo();

function pratica01() {

    let dia = parseInt(document.getElementById("dia").value);
    let resultado = document.getElementById("resultado");

    switch (dia) {
        case 1:
            resultado.textContent = "Hoje é Domingo!";
            break;
        case 2:
            resultado.textContent = "Hoje é Segunda!";
            break;
        case 3:
            resultado.textContent = "Hoje é Terça!";
            break;
        case 4:
            resultado.textContent = "Hoje é Quarta!";
            break;
        case 5:
            resultado.textContent = "Hoje é Quinta!";
            break;
        case 6:
            resultado.textContent = "Hoje Sexta!";
            break;
        case 7:
            resultado.textContent = "Hoje Sábado!";
            break;
        default:
            resultado.textContent = "opção Inválida!";
    }
}