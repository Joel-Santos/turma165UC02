// Faça um script que exiba na página os 500 primeiros números naturais em ordem crescente.
function miniLicao01() {
    let resposta = document.querySelector("#resposta01");
    console.log(resposta.textContent);
    resposta.textContent = "";
    for (let i = 0; i < 500; i++) {
        console.log(i);
        resposta.textContent += ` ${i} `;
    }
}
miniLicao01();

function miniLicao02() {
    let resposta = document.querySelector("#resposta02");
    let valor01 = parseInt(document.querySelector("#valor01").value);
    let valor02 = parseInt(document.querySelector("#valor02").value);
    let resultado = 0;
    for (let i = valor01; i < valor02; i++) {
        console.log(i,resultado)
        if (i%2==0) {
            resultado += i;
        }
    }
    resposta.textContent = resultado
}



function miniLicao03(){
    let num = parseInt(document.querySelector("#numero").value);
    let resposta = document.querySelector("#resposta03");
    let resultado = "";
    for(let i=0; i<10; i++){
        console.log(num*i);
        resultado += `${num} x ${i} = ${num*i} \n`;
    }
    resposta.innerText = resultado;
}
