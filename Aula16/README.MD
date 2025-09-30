# Aula 16
## Mobile First (HTML & CSS)

---

## 1. Introdução

- **Contextualização:** O acesso à internet por dispositivos móveis já supera o desktop em grande parte do mundo, inclusive no Brasil.
- **Objetivo da aula:** Compreender e aplicar o conceito de Mobile First no desenvolvimento web.

---

## 2. Conceitos Teóricos

### O que é Mobile First?

- Estratégia que prioriza o desenvolvimento para dispositivos móveis antes de adaptar para telas maiores.
- Criada por Luke Wroblewski em 2009-2010.
- Foca no conteúdo essencial, performance e usabilidade.

### Por que usar Mobile First?

- Maioria dos acessos à web ocorre via smartphones.[^7][^2]
- Google prioriza sites mobile na indexação (SEO).
- Melhora a experiência do usuário e a performance.

### Diferença entre Mobile First, Responsivo e Adaptativo

| Conceito           | Descrição                                                                                  |
|--------------------|-------------------------------------------------------------------------------------------|
| **Mobile First**   | Começa pelo menor dispositivo e evolui para telas maiores.                                |
| **Responsivo**     | Layout fluido que se adapta a qualquer tela usando media queries e unidades relativas. |
| **Adaptativo**     | Layouts pré-definidos para diferentes dispositivos, menos flexível                   |

---

## 3. Técnicas Práticas

### Meta Tag Viewport

```html
<meta name="viewport" content="width=device-width, initial-scale=1.0">
```
- Garante que o site seja renderizado corretamente em dispositivos móveis.

### CSS Mobile First

- Escreva estilos base para mobile.
- Use media queries com `min-width` para adicionar estilos para telas maiores.

**Exemplo:**

```css
/* Estilos base para mobile */
body {
    font-size: 1rem;
    padding: 1rem;
}

/* Tablet */
@media (min-width: 768px) {
    body {
        font-size: 1.2rem;
        padding: 2rem;
    }
}

/* Desktop */
@media (min-width: 1024px) {
    body {
        font-size: 1.4rem;
        padding: 3rem;
    }
}
```

### Layout Flexível

- Use Flexbox ou Grid para organizar o layout.
- Priorize a hierarquia do conteúdo: o que é essencial aparece primeiro.

**Exemplo de Grid Mobile First:**

```css
.container {
    display: grid;
    grid-template-columns: 1fr;
    gap: 1rem;
}

@media (min-width: 768px) {
    .container {
        grid-template-columns: 1fr 1fr;
    }
}

@media (min-width: 1024px) {
    .container {
        grid-template-columns: 1fr 1fr 1fr;
    }
}
```

---

## 4. Exemplos Práticos

### Exemplo 1: Página Simples Mobile First

```html
<!DOCTYPE html>
<html lang="pt-br">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Livraria Online</title>
    <link rel="stylesheet" href="styles.css">
</head>
<body>
    <header>
        <h1>Livraria Online</h1>
        <nav>
            <a href="#">Home</a>
            <a href="#">Catálogo</a>
            <a href="#">Contato</a>
        </nav>
    </header>
    <main class="container">
        <section class="card">Livro 1</section>
        <section class="card">Livro 2</section>
        <section class="card">Livro 3</section>
    </main>
    <footer>
        <p>&copy; 2025 Livraria Online</p>
    </footer>
</body>
</html>
```

**CSS (Mobile First):**

```css
body {
    font-family: Arial, sans-serif;
    margin: 0;
    padding: 0;
}
header, footer {
    background: #333;
    color: #fff;
    text-align: center;
    padding: 1rem;
}
nav {
    display: flex;
    flex-direction: column;
    gap: 0.5rem;
}
.container {
    display: grid;
    grid-template-columns: 1fr;
    gap: 1rem;
    padding: 1rem;
}
.card {
    background: #f5f5f5;
    padding: 1rem;
    border-radius: 8px;
}
@media (min-width: 768px) {
    nav {
        flex-direction: row;
        justify-content: center;
        gap: 2rem;
    }
    .container {
        grid-template-columns: 1fr 1fr;
    }
}
@media (min-width: 1024px) {
    .container {
        grid-template-columns: 1fr 1fr 1fr;
    }
}
```

---

### Exemplo 2: Menu Responsivo com Flexbox

```html
<nav class="menu">
    <a href="#">Início</a>
    <a href="#">Sobre</a>
    <a href="#">Serviços</a>
    <a href="#">Contato</a>
</nav>
```

```css
.menu {
    display: flex;
    flex-direction: column;
    gap: 1rem;
    background: #222;
    padding: 1rem;
}
.menu a {
    color: #fff;
    text-decoration: none;
    padding: 0.5rem;
    border-radius: 4px;
    transition: background 0.2s;
}
.menu a:hover {
    background: #444;
}
@media (min-width: 600px) {
    .menu {
        flex-direction: row;
        justify-content: center;
        gap: 2rem;
    }
}
```

---

### Exemplo 3: Imagem Responsiva

```html
<img src="livro.jpg" alt="Capa do Livro" class="img-responsiva">
```

```css
.img-responsiva {
    width: 100%;
    height: auto;
    display: block;
    max-width: 300px;
    margin: 0 auto;
}
```

---

### Exemplo 4: Cards Responsivos com Grid

```html
<div class="cards">
    <div class="card">Card 1</div>
    <div class="card">Card 2</div>
    <div class="card">Card 3</div>
    <div class="card">Card 4</div>
</div>
```

```css
.cards {
    display: grid;
    grid-template-columns: 1fr;
    gap: 1rem;
}
@media (min-width: 600px) {
    .cards {
        grid-template-columns: 1fr 1fr;
    }
}
@media (min-width: 900px) {
    .cards {
        grid-template-columns: 1fr 1fr 1fr 1fr;
    }
}
.card {
    background: #e0e0e0;
    padding: 1rem;
    border-radius: 6px;
    text-align: center;
}
```

---

## 5. Atividade Proposta

### Exercício Prático: Analise e Aprimore a Página "Livraria Online"

**Instruções:**

1. Analise o exemplo de página "Livraria Online" apresentado acima.
2. Identifique como os conceitos de Mobile First e responsividade foram aplicados no HTML e CSS.
3. Sugira melhorias para o layout, acessibilidade ou organização do código.
4. Implemente pelo menos uma melhoria sugerida e explique sua escolha.

**Critérios de avaliação:**

- Capacidade de análise crítica
- Aplicação de conceitos Mobile First
- Clareza na justificativa das melhorias
- Qualidade do código aprimorado


## 6. Dicas Extras

- Use ferramentas como o DevTools do navegador para testar a responsividade.
- Prefira unidades relativas (`em`, `rem`, `%`) para tamanhos e espaçamentos.
- Utilize imagens otimizadas e SVGs para melhor performance.
- Sempre pense na acessibilidade: contraste, tamanho de fonte, navegação por teclado.

---

## 7. Referências
- CETIC.br - TIC Domicílios 2023  
- MDN Web Docs - Responsive design  
- Google Web Fundamentals - Responsive Web Design Basics

