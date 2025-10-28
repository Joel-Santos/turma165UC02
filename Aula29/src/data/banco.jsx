export let bancoLivros = [
    {
        titulo: "Dom Quixote",
        autor: "Miguel de Cervantes",
        ano: 1605,
        genero: "Romance",
        capa: "https://imagens.disal.com.br/produtos/ampliada/5769868.jpg",
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
        capa: "https://livrariapublica.com.br/capa/1984-classicos-da-literatura-mundial-george-orwell-pdf-B08SP8WRBK.webp",
        disponivel: true,
        badge: "Ficção Científica",
    },
    {
        titulo: "Orgulho e Preconceito",
        autor: "Jane Austen",
        ano: 1813,
        genero: "Romance",
        capa: "https://www.lpm.com.br/livros/imagens/orgulho_e_preconceito_9788525404350_hd.jpg",
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
        capa: "https://m.media-amazon.com/images/I/71ZLavBjpRL._AC_UF1000,1000_QL80_.jpg",
        disponivel: true,
        badge: "Fantasia Épica",
    },
    {
        titulo: "O Apanhador no Campo de Centeio",
        autor: "J.D. Salinger",
        ano: 1951,
        genero: "Ficção",
        capa: "https://m.media-amazon.com/images/I/71b3GDZMzSL.jpg",
        disponivel: false,
        badge: "Literatura Moderna",
        children: (
            <p>Uma obra que marcou gerações, explorando a <strong>alienação</strong> e os desafios da juventude.</p>
        )
    }
];
