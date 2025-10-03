function questao01() {
    let nome = document.getElementById("nome");
    let resposta = document.getElementById("resposta01");
    //alert(`Olá, meu nome é ${nome.value}`); 
    resposta.innerText = `Olá, meu nome é ${nome.value}`;
}