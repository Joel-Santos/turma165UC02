// 1. Mensagem de Apresentação - usando prompt e alert
// Peça ao usuário seu nome, idade e cidade.
// Saída esperada: Uma mensagem no formato:
// Olá, meu nome é Maria, tenho 22 anos e moro em São Paulo.
function questao01() {
    let nome = prompt("Informe o seu nome:");
    let idade = prompt("Informe a sua idade:");
    let cidade = prompt("Informe a sua cidade:");
    alert(`Olá, meu nome é ${nome}, tenho ${idade} anos e moro em ${cidade}.`);
}
//questao01();

// 2. Preço com Desconto
// Solicite o preço de um produto e calcule o valor final após aplicar 20% de desconto.
// Saída esperada: Mostrar o preço original e o preço com desconto.

function questao02() {
    let preco = prompt("Informe o preço do produto");
    let precoFinal = preco - preco * 0.2;
    alert(`O preço original é ${preco} e o novo preço com desconto é ${precoFinal}`);
}
// questao02();

// 3. Conversão de Temperatura
// Receba uma temperatura em Celsius e converta para Fahrenheit.
// Saída esperada: Mostrar o valor em Celsius e o equivalente em Fahrenheit.
// Fórmula (0 °C × 9/5) + 32
function questao03() {
    let celsius = prompt("Informe a temperatura em Celsius");
    let tempF = celsius * 9/5 +32;
    alert(`Tempertaura em Celsius ${celsius} - Convertida para Fahrenheit ${tempF}`);
}
//questao03();

// 4. Retângulo – Perímetro e Área
// Peça a base e a altura de um retângulo.
// Saída esperada: Mostrar o perímetro e a área calculados.
//A = b x h
//P = 2b + 2h 

function questao04() {
    let base = prompt("Informe a base");
    let altura = prompt("Informe a altura");
    let area = base * altura;
    let perimetro = 2*base + 2*altura;
    alert(`Área é: ${area} - Perímetro ${perimetro}`);
}
//questao04();


// 5. Idade pelo Ano de Nascimento
// Solicite o ano de nascimento do usuário e calcule sua idade atual.
// Saída esperada: Uma frase dizendo o ano de nascimento e a idade.

function questao05() {
    let ano = prompt("Informe o seu ano de nascimento");
    let idade = 2025 - ano;
    alert(`Sua idade é ${idade}.`);
}
//questao05();


// 6. Ano de Nascimento a partir da idade
// Solicite a idade do usuário e calcule seu ano de nascimento.
// Saída esperada: Uma frase dizendo o ano de nascimento e a idade.function questao05() {

function questao06() {
    let idade = prompt("Informe a sua idade");
    let anoNascimento = 2025 - idade;
    alert(`Você nasceu em ${anoNascimento}.`);
}
//questao06();