//capturando o dado via id
let titulo = document.getElementById("titulo");
console.log(typeof titulo);
console.log(titulo.innerText);

//capturando o dado via class
let itens = document.getElementsByClassName("teste");
console.log(itens[1].innerText);
console.log(itens[0].innerText);

//capturando o dado via tag
let cabecalhoH1 = document.getElementsByTagName("h1");
console.log(cabecalhoH1[0].innerText);
console.log(cabecalhoH1[1].innerText);

//capturando com seletor
//Um unico elemento - primeiro
let paragrafo = document.querySelector("p");
console.log(paragrafo.innerText);
//Todos os elementos
let paragrafos = document.querySelectorAll("p");
console.log(paragrafos[1].innerText);

cabecalhoH1[0].textContent = "Estou manipulando o dom!";

cabecalhoH1[0].innerHTML = "<u>Estou manipulando o dom!</u>";

paragrafos[1].style.color = "red";
paragrafos[1].style.fontSize = "1.5rem";

cabecalhoH1[1].classList.add("texto01");


paragrafos[0].classList.remove("teste")
paragrafos[0].classList.add("texto02")