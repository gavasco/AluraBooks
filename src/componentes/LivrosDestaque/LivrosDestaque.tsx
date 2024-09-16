import React, { useState } from "react";
import './LivrosDestaque.css'
import { ILivro } from "../../interfaces/ILivro";
import sacolaLivros from './assets/sacolaCard.png'
import curtida from './assets/curtida.png'
import Botao from "../Botao/Botao";

export interface Props {
    livros: ILivro[]
}

export default function LivrosDestaque({ livros }: Props) {
    const [selecionado, setSelecionado] = useState<ILivro>(livros[1]);

    return (
        <div className="container-livros">
            <ul className="livros">
                {livros.map(livro =>
                    <li
                        key={livro.nome}
                        onClick={() => setSelecionado(livro)}
                    >
                        <img 
                            src={livro.imagem} 
                            alt={livro.nome} 
                            className={`img ${selecionado?.nome === livro.nome ? 'ampliado' : ''}`} 
                        />
                    </li>
                )}
            </ul>
            <div className="container-card">
                <div className="card-infos">
                    <div >
                        <h1> Sobre o livro: </h1>
                        <h2> {selecionado?.nome} </h2>
                        <p> {selecionado?.descricao} </p>
                        <p><strong>Por:</strong>  {selecionado?.autor} </p>
                    </div>
                    <div className="card-infos-imagens">
                        <img src={sacolaLivros} alt="icone sacola" className="sacola" />
                        <img src={curtida} alt="icone curtida" className="curtida" />
                    </div>
                </div>
                <footer className="card-footer">
                    <div>
                        <p> A partir de: </p>
                        <strong> R$ {selecionado?.preco.toFixed(2)} </strong>
                    </div>
                    <section>
                        <Botao> Comprar </Botao>
                    </section>
                </footer >
            </div>
        </div>
    )
}