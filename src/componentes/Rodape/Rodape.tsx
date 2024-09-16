import React from "react";
import './Rodape.css'

export default function Rodape() {
    const itens = {
        educacao: [
            {
                imagem: '/imagens/rodape/Caelum.svg',
                titulo: 'Caelum'
            },
            {
                imagem: '/imagens/rodape/CasaDoCodigo.svg',
                titulo: 'Casa do Código'
            }
        ],
        online: [
            {
                imagem: '/imagens/rodape/Alura.svg',
                titulo: 'Alura'
            },
            {
                imagem: '/imagens/rodape/AluraEmpresas.svg',
                titulo: 'Alura para Empresas'
            },
            {
                imagem: '/imagens/rodape/AluraLATAM.svg',
                titulo: 'Alura LATAM'
            },
            {
                imagem: '/imagens/rodape/AluraStart.svg',
                titulo: 'Alura Start'
            },
            {
                imagem: '/imagens/rodape/MusicDot.svg',
                titulo: 'MusicDot'
            },
            {
                imagem: '/imagens/rodape/AluraLingua.svg',
                titulo: 'Alura Línguas'
            },
            {
                imagem: '/imagens/rodape/PM3.svg',
                titulo: 'PM3'
            }
        ],
        comunidade: [
            {
                imagem: '/imagens/rodape/HipstersTech.svg',
                titulo: 'Hipsters ponto Tech'
            },
            {
                imagem: '/imagens/rodape/ScubaDev.svg',
                titulo: 'Scuba Dev'
            },
            {
                imagem: '/imagens/rodape/LayersTech.svg',
                titulo: 'Layers ponto Tech'
            },
            {
                imagem: '/imagens/rodape/LikeABoss.svg',
                titulo: 'Like a Boss'
            },
            {
                imagem: '/imagens/rodape/CarreiraSemFronteira.svg',
                titulo: 'Carreira sem Fronteira'
            },
            {
                imagem: '/imagens/rodape/HipstersJobs.svg',
                titulo: 'Hipsters ponto Jobs'
            },
            {
                imagem: '/imagens/rodape/GUJ.svg',
                titulo: 'GUJ'
            }
        ]
    }

    return (
        <div className="container-rodape">
            <h2> Desenvolvido por: <br /> <strong>Gabriel Vasco</strong>  </h2>
            <ul className="rodape-itens">
                <p className="itens-titulo">EDUCAÇÃO </p>
                {itens.educacao.map((item, index) =>
                    <li key={index}>
                        <img src={item.imagem} alt={item.titulo} />
                        <p> {item.titulo} </p>
                    </li>
                )}
            </ul>
            <ul className="rodape-itens">
                <p className="itens-titulo">EDUCAÇÃO ONLINE </p>
                {itens.online.map((item, index) =>
                    <li key={index}>
                        <img src={item.imagem} alt={item.titulo} />
                        <p> {item.titulo} </p>
                    </li>
                )}
            </ul>
            <ul className="rodape-itens">
                <p className="itens-titulo">COMUNIDADE </p>
                {itens.comunidade.map((item, index) =>
                    <li key={index}>
                        <img src={item.imagem} alt={item.titulo} />
                        <p> {item.titulo} </p>
                    </li>
                )}
            </ul>
        </div>
    )
}