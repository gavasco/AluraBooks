import React from "react"
import BarraNavegacao from "../../componentes/BarraNavegacao/BarraNavegacao"
import Banner from "../../componentes/Banner/Banner"
import Titulo from "../../componentes/Titulo/Titulo"
import './Home.css'
import LivrosDestaque from "../../componentes/LivrosDestaque/LivrosDestaque"
import Topicos from "../../componentes/Topicos/Topicos"
import NewsLetter from "../../componentes/NewsLetter/NewsLetter"
import Rodape from "../../componentes/Rodape/Rodape"
import AreaCadastroLogin from "../../componentes/AreaCadastroLogin/AreaCadastroLogin"

export default function Home () {
    const lancamentos = [
        {
            autor: 'Tárcio Zemel',
            descricao: 'Técnicas e ferramentas que fazem a diferença nos seus estilos',
            imagem: '/imagens/livros/css.jpg',
            nome: 'CSS Eficiente',
            preco: 25.9
        },
        {
            autor: 'Sass',
            descricao: 'Aprendendo pré-processadores CSS',
            imagem: '/imagens/livros/sass.jpg',
            nome: 'Natan Souza',
            preco: 19.9
        },
        {
            autor: 'Diego Eis',
            descricao: 'O caminho das pedras para ser um dev Front-End',
            imagem: '/imagens/livros/frontend.jpg',
            nome: 'Guia Front-End',
            preco: 29.9
        },
    ]
    const maisVendidos = [
        {
            autor: 'Thiago da Silva Adriano',
            descricao: 'Melhore suas aplicações JavaScript',
            imagem: '/imagens/livros/typescript.jpg',
            nome: 'Guia prático de TypeScript',
            preco: 23.9
        },
        {
            autor: 'Akira Hanashiro',
            descricao: 'A revolucionária linguagem de consulta e manipulação de dados para APIs',
            imagem: '/imagens/livros/graphql.jpg',
            nome: 'GraphQL',
            preco: 19.9
        },
        {
            autor: 'Vinícius Carvalho',
            descricao: 'PostgreSQL',
            imagem: '/imagens/livros/postgre.jpg',
            nome: 'PostgreSQL',
            preco: 35.9
        },
    ]
    
    return (
        <div>
            <Banner />
            <div className="container-titulo">
                <Titulo>ÚLTIMOS LANÇAMENTOS</Titulo>
            </div>
            <LivrosDestaque livros={lancamentos} />
            <div className="container-titulo">
                <Titulo>MAIS VENDIDOS</Titulo>
            </div>
            <LivrosDestaque livros={maisVendidos} />
            <AreaCadastroLogin />
            <NewsLetter />
        </div>
    )
}