//Declarando variaveis

var nome = 'Joel'; // mais antiga , escopo global/função, pode redeclarar.

console.log('Hello World!');
console.log(nome);
var nome = 'Joel Santos';
console.log(nome);
var nome  = "Joel de Oliveira Santos";

let idade = 25; //mais moderna, escopo de bloco, valor pode mudar

const pi = 3.14;
console.log('Nome:', nome);

console.log(`Nome: ${nome}, Idade: ${idade}, PI:${pi}`);


//Operadores matemáticos 
// + soma, - subtração , / divisão, * multiplicação,  % resto da divisão 

let a  = 10;
let b = 3;
let resultado =  a * b;
console.log(`Soma: ${a+b}`);
console.log(`O resultado de ${a} x ${b} é ${resultado}`);

let comida = prompt("Informe o nome da sua comida favorita");
console.log(comida);
alert(`Sua comida favorita é ${comida}`);