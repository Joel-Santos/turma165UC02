export let bancoLivros = [
    {
        titulo: "Dom Quixote",
        autor: "Miguel de Cervantes",
        ano: 1605,
        genero: "Romance",
        capa: "https://example.com/dom-quixote.jpg",
        disponivel: true,
        badge: "Clássico",
        children: (
            <p>Considerado um dos maiores romances já escritos, <strong>Dom Quixote</strong> é uma obra-prima da literatura mundial.</p>
        )
    },
    {
        titulo: "1984",
        autor: "George Orwell",
        ano: 1949,
        genero: "Distopia",
        capa: "https://example.com/1984.jpg",
        disponivel: true,
        badge: "Ficção Científica",
    },
    {
        titulo: "Orgulho e Preconceito",
        autor: "Jane Austen",
        ano: 1813,
        genero: "Romance",
        capa: "https://example.com/orgulho-e-preconceito.jpg",
        disponivel: false,
        badge: "Clássico",
        children: (
            <p>Um clássico da literatura inglesa que explora temas como <em>amor</em>, <em>orgulho</em> e <em>preconceito</em>.</p>
        )
    },
    {
        titulo: "O Senhor dos Anéis",
        autor: "J.R.R. Tolkien",
        ano: 1954,
        genero: "Fantasia",
        capa: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRImCbYfPnW4ZHHiXqBb-GIVqeujvJbr3EvcQ&s",
        disponivel: true,
        badge: "Fantasia Épica",
    },
    {
        titulo: "O Apanhador no Campo de Centeio",
        autor: "J.D. Salinger",
        ano: 1951,
        genero: "Ficção",
        capa: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRImCbYfPnW4ZHHiXqBb-GIVqeujvJbr3EvcQ&s",
        disponivel: false,
        badge: "Literatura Moderna",
        children: (
            <p>Uma obra que marcou gerações, explorando a <strong>alienação</strong> e os desafios da juventude.</p>
        )
    }
];
