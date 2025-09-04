# Atividade Prática — Página HTML: **Filmes**

## Objetivo
Criar uma página HTML sobre o tema **Filmes** que reúna multimídia, links e textos complementares.  
A página deve demonstrar domínio das estruturas e tags básicas do HTML (`head`, `body`, títulos, parágrafos, formatação, listas, imagens, links e quebras), além do uso de identificadores (`id`) para “apontamento” (âncoras internas).  
Também deve incluir pelo menos **uma imagem** (`<img>`) e um recurso multimídia com **`<iframe>`** (ex.: trailer do YouTube).

O arquivo deve ser entregue com o nome **`filmes.html`**.

---

## Requisitos obrigatórios

1. **Título da página** adequado (tag `<title>`).  
2. **Estrutura HTML** correta: `<!DOCTYPE html>`, `<html>`, `<head>`, `<body>`.  
3. **Cabeçalhos**: use pelo menos dois níveis diferentes de `<h1>`…`<h6>` (ex.: `<h1>` e `<h2>`).  
4. **Textos complementares**: pelo menos 3 parágrafos (`<p>`) com informações sobre filmes.  
5. **Formatação de texto**: use **negrito** (`<b>`), *itálico* (`<i>`) e <u>sublinhado</u> (`<u>`).  
6. **Quebras/Separadores**: use `<br>` e `<hr>`.  
7. **Listas**: uma ordenada (`<ol>`) e uma não ordenada (`<ul>`), com itens `<li>`.  
8. **Links**: pelo menos 2 links (`<a>`):  
   - um para uma página externa (ex.: site de cinema);  
   - um interno (âncora com `id`).  
9. **Imagem**: pelo menos uma (`<img src="..." alt="...">`).  
10. **Multimídia com iframe**: incorporar um vídeo (ex.: trailer do YouTube).  
11. **Identificadores (`id`)**: usar em pelo menos dois elementos para navegação interna.  
12. **Código limpo**: HTML indentado, organizado e comentado.  

---

## Organização sugerida (optativa)

Para facilitar, siga esta ordem de construção:

1. Crie a **estrutura básica** com `<!DOCTYPE html>`, `<html>`, `<head>` e `<body>`.  
2. No `<head>`, coloque `<meta charset="UTF-8">` e um `<title>`.  
3. No `<body>`, escreva:  
   - Um `<h1 id="topo">` como título principal.  
   - Um parágrafo introdutório (`<p>`).  
   - Um `<hr>` para separar seções.  
4. Crie **links de navegação**:  
   - Um `<a href="#curiosidades">` para ir até a parte de curiosidades.  
   - Um `<a href="https://www.adorocinema.com/" target="_blank">` para ir a um site externo.  
5. Adicione uma parte de **curiosidades** com `<h2 id="curiosidades">` e 2–3 parágrafos (`<p>`).  
6. Insira **formatação de texto** em algumas palavras com `<b>`, `<i>` e `<u>`.  
7. Crie uma seção com **listas**:  
   - Uma `<ol>` com 5 filmes favoritos.  
   - Uma `<ul>` com gêneros de filmes.  
8. Insira pelo menos **uma imagem** (`<img src="poster.jpg" alt="Poster de um filme famoso">`).  
9. Insira um **iframe com vídeo do YouTube**:  
   ```html
   <iframe width="560" height="315" src="https://www.youtube.com/embed/EXEMPLO" title="Trailer de Filme" frameborder="0" allowfullscreen></iframe>
