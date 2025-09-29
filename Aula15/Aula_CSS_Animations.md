
# 🎨 Aula: CSS Animations

## 🎯 Objetivos
- Entender o que são **animações em CSS**.  
- Aprender a diferença entre **transition** e **keyframes**.  
- Explorar as principais propriedades de animação.  
- Criar exemplos práticos e aplicar em elementos reais.

---

## 1. O que são animações no CSS?
- São efeitos visuais que permitem que elementos **mudam de estado de forma gradual**.  
- Substituem muitas vezes o uso de JavaScript.  
- Tornam a experiência do usuário mais **agradável e interativa**.  

👉 Existem **duas formas principais**:
1. **Transitions** → animam mudanças que acontecem quando há interação (ex: hover).  
2. **Animations (com keyframes)** → criam animações contínuas ou automáticas.  

---

## 2. Transition (mudança suave de estado)

A propriedade **`transition`** é usada quando queremos que uma mudança (ex: cor, tamanho) seja **suave**.  

### Sintaxe
```css
transition: property duration timing-function delay;
```

---

### Exemplo 1: Mudança de cor
```html
<button>Passa o mouse</button>

<style>
button {
  background: #3498db; /* cor inicial */
  color: white;
  border: none;
  padding: 1rem 2rem;
  cursor: pointer;
  transition: background 0.5s ease; /* animação */
}

button:hover {
  background: #2ecc71; /* cor final */
}
</style>
```
**Explicação**:  
- `transition: background 0.5s ease;` → anima a cor de fundo em 0.5s, suavemente.  
- No **hover**, a cor muda de azul para verde de forma gradual.

---

### Exemplo 2: Crescimento com `transform`
```html
<div class="box"></div>

<style>
.box {
  width: 100px;
  height: 100px;
  background: tomato;
  transition: transform 0.5s ease-in-out;
}

.box:hover {
  transform: scale(1.3); /* aumenta 30% */
}
</style>
```
**Explicação**:  
- `transform: scale(1.3);` aumenta o tamanho do elemento.  
- `transition: transform 0.5s;` aplica a mudança de forma suave.  

---

## 3. Propriedades do `transition`

| Propriedade | Função | Exemplo |
|-------------|--------|---------|
| `transition-property` | Define qual propriedade será animada | `transition-property: background-color;` |
| `transition-duration` | Define o tempo da animação | `transition-duration: 1s;` |
| `transition-timing-function` | Define a curva da animação (`linear`, `ease`, etc.) | `transition-timing-function: ease-in-out;` |
| `transition-delay` | Define atraso antes de começar a animação | `transition-delay: 0.5s;` |

**Shorthand exemplo:**
```css
transition: transform 1s ease-in-out 0.3s;
```

---

## 4. Keyframes (animações contínuas)

Usamos **@keyframes** quando queremos que algo **se mova sozinho**, sem interação.

### Sintaxe
```css
@keyframes nome {
  from { ... }
  to   { ... }
}
```
ou com porcentagens (`0%`, `50%`, `100%`).

---

### Exemplo 3: Quadrado se movendo
```html
<div class="box"></div>

<style>
@keyframes mover {
  from { transform: translateX(0); }
  to   { transform: translateX(200px); }
}

.box {
  width: 100px;
  height: 100px;
  background: orange;
  animation: mover 2s infinite alternate;
}
</style>
```
**Explicação**:  
- `@keyframes mover` define os estados da animação.  
- `animation: mover 2s infinite alternate;` → duração 2s, repete para sempre, vai e volta.

---

### Exemplo 4: Pulso infinito
```html
<div class="circle"></div>

<style>
@keyframes pulse {
  0%   { transform: scale(1); }
  50%  { transform: scale(1.2); }
  100% { transform: scale(1); }
}

.circle {
  width: 100px;
  height: 100px;
  background: purple;
  border-radius: 50%;
  animation: pulse 1.5s infinite;
}
</style>
```
**Explicação**:  
- Define três etapas do pulso (`0% → 50% → 100%`).  
- `scale(1.2)` aumenta 20% do tamanho original.  
- O círculo cresce e diminui continuamente.

---

### Exemplo 5: Rotação
```html
<div class="box"></div>

<style>
@keyframes girar {
  from { transform: rotate(0deg); }
  to   { transform: rotate(360deg); }
}

.box {
  width: 100px;
  height: 100px;
  background: teal;
  animation: girar 3s linear infinite;
}
</style>
```
**Explicação**:  
- Rotação completa de 360°.  
- `linear` → movimento constante.  
- `infinite` → repete para sempre.

---

## 5. Propriedades principais de `animation`
- `animation-name` → nome do `@keyframes`.  
- `animation-duration` → duração da animação.  
- `animation-delay` → atraso antes de iniciar.  
- `animation-iteration-count` → número de repetições (`1`, `infinite`).  
- `animation-direction` → `normal`, `reverse`, `alternate`.  
- `animation-timing-function` → `ease`, `linear`, etc.  

**Shorthand exemplo:**
```css
animation: mover 2s ease-in-out infinite alternate;
```

---

## 6. Atividade prática
1. Criar um botão que **muda de cor** e cresce no hover.  
2. Criar uma bolinha que **pulsa infinitamente**.  
3. Criar um quadrado que **roda 360° em loop**.  
4. Criar um texto que **aparece e desaparece** usando `opacity`.

---

💡 **Resumo da Aula**:  
- `transition` → animações de interação (hover, focus).  
- `@keyframes` + `animation` → animações contínuas ou complexas.  
- Com poucas linhas de CSS é possível criar efeitos visuais muito atraentes.
