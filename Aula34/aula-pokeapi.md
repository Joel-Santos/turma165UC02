# ⚛️ Atividade Guiada — React com useState, useEffect e Props  
### Tema: PokéAPI — Buscador de Pokémon  

---

## 🎯 Objetivo da Atividade

Nesta atividade, você vai criar um pequeno aplicativo em **React** que:

- Possui um **campo de busca** para digitar o nome de um Pokémon.  
- Usa a **PokéAPI** para buscar seus dados.  
- Exibe **nome, tipo e imagem**.  
- Utiliza os hooks **useState** e **useEffect**.  
- Trabalha com **props** para repassar dados entre componentes.

---

## 🧱 Estrutura do Projeto

```
pokeapp/
 ├─ src/
 │   ├─ components/
 │   │   └─ PokemonCard.jsx
 │   ├─ App.jsx
 │   ├─ index.css
 │   └─ main.jsx
 ├─ package.json
```

---

## 🚀 Passo 1: Criar o projeto com Vite

Abra o terminal e execute os comandos abaixo:

```bash
npm create vite@latest pokeapp -- --template react
cd pokeapp
npm install
npm run dev
```

---

## ⚛️ Passo 2: Criar o componente `PokemonCard.jsx`

Esse componente será responsável por **exibir** os dados do Pokémon que foram buscados pela API.  
Ele vai **receber as informações via props** do componente principal.

```jsx
// src/components/PokemonCard.jsx
function PokemonCard({ nome, imagem, tipo }) {
  return (
    <div className="card">
      <h2>{nome}</h2>
      <img src={imagem} alt={nome} />
      <p><strong>Tipo:</strong> {tipo}</p>
    </div>
  );
}

export default PokemonCard;
```

### 💬 Explicação:
- O componente `PokemonCard` recebe os dados como **props** (`nome`, `imagem`, `tipo`).
- Ele é **reutilizável** e só precisa receber novos dados para renderizar outro Pokémon.

---

## 🧠 Passo 3: Criar o `App.jsx` com useState e useEffect

Esse será o **componente principal** do projeto, responsável por:
- Capturar o nome digitado pelo usuário.  
- Buscar os dados na **PokéAPI**.  
- Passar as informações para o `PokemonCard` via props.  

```jsx
// src/App.jsx
import { useState, useEffect } from "react";
import PokemonCard from "./components/PokemonCard";

function App() {
  const [nomeBusca, setNomeBusca] = useState("");
  const [pokemon, setPokemon] = useState(null);
  const [erro, setErro] = useState("");

  useEffect(() => {
    if (nomeBusca.trim() === "") return;

    async function buscarPokemon() {
      try {
        const resposta = await fetch(`https://pokeapi.co/api/v2/pokemon/${nomeBusca.toLowerCase()}`);
        if (!resposta.ok) throw new Error("Pokémon não encontrado!");

        const dados = await resposta.json();
        const info = {
          nome: dados.name,
          imagem: dados.sprites.front_default,
          tipo: dados.types[0].type.name,
        };
        setPokemon(info);
        setErro("");
      } catch (e) {
        setPokemon(null);
        setErro(e.message);
      }
    }

    buscarPokemon();
  }, [nomeBusca]);

  return (
    <div className="app">
      <h1>🔍 Buscar Pokémon</h1>

      <input
        type="text"
        placeholder="Digite o nome do Pokémon e pressione Enter"
        onKeyDown={(e) => {
          if (e.key === "Enter") setNomeBusca(e.target.value);
        }}
      />

      {erro && <p className="erro">{erro}</p>}

      {pokemon && (
        <PokemonCard
          nome={pokemon.nome}
          imagem={pokemon.imagem}
          tipo={pokemon.tipo}
        />
      )}
    </div>
  );
}

export default App;
```

---

## 💬 Explicação dos Hooks

### 🪣 useState
Cria variáveis reativas que armazenam o estado do componente:
- `nomeBusca`: guarda o nome digitado no input.
- `pokemon`: armazena os dados do Pokémon.
- `erro`: guarda a mensagem de erro.

### ⚙️ useEffect
Executa uma função **toda vez que uma variável de dependência muda**.  
Aqui, é usado para buscar os dados do Pokémon **sempre que `nomeBusca` for atualizado**.

---

## 🎨 Passo 4: Adicionar estilo no `index.css`

Vamos aplicar um estilo simples com **medidas em rem** (responsivo e acessível):

```css
/* src/index.css */

.app {
  text-align: center;
  font-family: Arial, sans-serif;
  padding: 2rem;
}

h1 {
  font-size: 2rem;
  margin-bottom: 1.5rem;
}

input {
  padding: 0.8rem 1rem;
  font-size: 1rem;
  width: 18rem;
  border-radius: 0.5rem;
  border: 1px solid #ccc;
  margin-bottom: 1.5rem;
}

.card {
  display: inline-block;
  border: 2px solid #eee;
  padding: 1.5rem;
  border-radius: 1rem;
  box-shadow: 0.2rem 0.2rem 0.6rem rgba(0,0,0,0.1);
  transition: transform 0.2s ease;
}

.card:hover {
  transform: scale(1.05);
}

.card img {
  width: 8rem;
  height: 8rem;
}

.erro {
  color: red;
  font-weight: bold;
  margin-bottom: 1rem;
}
```

---

## 🧩 Funcionamento Geral

1. O usuário digita o nome de um Pokémon e pressiona **Enter**.  
2. O `useEffect` detecta a mudança em `nomeBusca` e faz a requisição na PokéAPI.  
3. Se encontrar o Pokémon, os dados são passados por **props** ao componente `PokemonCard`.  
4. Caso contrário, é exibida uma mensagem de erro.

---

## 💡 Desafios Extras

1. Exibir também **peso** e **altura** do Pokémon.  
2. Mostrar **todos os tipos** (alguns têm mais de um tipo).  
3. Adicionar um **botão de busca** além do Enter.  
4. Criar um **componente separado** apenas para o campo de busca.  
5. Exibir um **histórico de buscas** com os nomes dos últimos Pokémon pesquisados.  

---

## 🧠 Conceitos Trabalhados

| Conceito | Descrição |
|-----------|------------|
| **useState** | Controla valores e atualizações de estado no React. |
| **useEffect** | Executa efeitos colaterais, como requisições à API. |
| **Props** | Permitem a comunicação e passagem de dados entre componentes. |
| **Fetch API** | Realiza requisições HTTP para buscar dados externos. |

---

## ✅ Resultado Esperado

Ao digitar um Pokémon (por exemplo, `pikachu`) e pressionar Enter, o app deve exibir:  

- O **nome**: Pikachu  
- O **tipo**: electric  
- A **imagem** do Pokémon  

---

> 🧾 **Dica:** Você pode explorar a [PokéAPI](https://pokeapi.co/) para descobrir outros dados disponíveis (habilidades, movimentos, peso, altura etc.).

---
