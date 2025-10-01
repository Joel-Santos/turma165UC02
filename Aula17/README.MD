# Aula 01/10/2025 – Introdução ao JavaScript e Manipulação de Variáveis

## 🎯 Objetivos da Aula
- Entender o que é JavaScript e seu papel no desenvolvimento web  
- Conhecer os tipos de variáveis (`var`, `let`, `const`)  
- Aprender os operadores matemáticos  
- Praticar operações envolvendo variáveis  
- Explorar a interação com o usuário via `prompt()`  
- Exibir resultados na tela com `alert()` usando **Template Strings**  

---

## 🟢 1. O que é JavaScript?
- Linguagem de programação que roda no **navegador** e também no **servidor** (com Node.js).  
- Responsável por adicionar **interatividade** e **dinamismo** às páginas web.  

Exemplo de uso:
- Atualizar automaticamente o conteúdo da página  
- Validar formulários  
- Criar efeitos visuais e animações  

---

## 🟢 2. Tipos de Variáveis: `var`, `let`, `const`

- **`var`** → mais antiga, escopo global/função, pode redeclarar.  
- **`let`** → mais moderna, escopo de bloco, valor pode mudar.  
- **`const`** → mais moderna, escopo de bloco, valor fixo.  

Exemplo:  
```js
var nome = "Ana";
let idade = 25;
const PI = 3.14;

console.log(`Nome: ${nome}, Idade: ${idade}, PI: ${PI}`);
```

---

## 🟢 3. Operadores Matemáticos
- `+` adição  
- `-` subtração  
- `*` multiplicação  
- `/` divisão  
- `%` resto da divisão  

Exemplo:  
```js
let a = 10;
let b = 3;

console.log(`Soma: ${a + b}`);
console.log(`Divisão: ${a / b}`);
```

---

## 🟢 4. Operações com Variáveis

```js
let numero1 = 8;
let numero2 = 4;
let resultado = numero1 * numero2;

console.log(`O resultado de ${numero1} x ${numero2} é ${resultado}`);
```

---

## 🟢 5. Interação com o Usuário – `prompt()`

```js
let nome = prompt("Qual é o seu nome?");
let idade = prompt("Qual é a sua idade?");

alert(`Olá, ${nome}! Você tem ${idade} anos.`);
```

---

## 🟢 6. Saída de Dados – `alert()`

```js
let n1 = parseInt(prompt("Digite o primeiro número:"));
let n2 = parseInt(prompt("Digite o segundo número:"));

let soma = n1 + n2;

alert(`A soma de ${n1} e ${n2} é ${soma}`);
```

---

# 📚 Exercícios da Aula 

> ✅ Resolva cada questão usando **variáveis, operadores, prompt e alert**.  
> ✅ Utilize **Template Strings** para formatar a saída.  

### 1. Mensagem de Apresentação
Peça ao usuário seu nome, idade e cidade.  
**Saída esperada**: Uma mensagem no formato:  
```
Olá, meu nome é Maria, tenho 22 anos e moro em São Paulo.
```

---

### 2. Preço com Desconto
Solicite o preço de um produto e calcule o valor final após aplicar 20% de desconto.  
**Saída esperada**: Mostrar o preço original e o preço com desconto.  

---

### 3. Conversão de Temperatura
Receba uma temperatura em Celsius e converta para Fahrenheit.  
**Saída esperada**: Mostrar o valor em Celsius e o equivalente em Fahrenheit.  

---

### 4. Retângulo – Perímetro e Área
Peça a base e a altura de um retângulo.  
**Saída esperada**: Mostrar o perímetro e a área calculados.  

---

### 5. Idade pelo Ano de Nascimento
Solicite o ano de nascimento do usuário e calcule sua idade atual.  
**Saída esperada**: Uma frase dizendo o ano de nascimento e a idade.

