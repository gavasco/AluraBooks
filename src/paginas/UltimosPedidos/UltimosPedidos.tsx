import React, { useEffect, useState } from "react";
import './UltimosPedidos.css'
import Botao from "../../componentes/Botao/Botao";
import { Link } from "react-router-dom";
import { IPedido } from "../../interfaces/IPedido";
import Topicos from "../../componentes/Topicos/Topicos";
import NewsLetter from "../../componentes/NewsLetter/NewsLetter";
import http from "../../http/url";

export default function UltimosPedidos() {
    const [pedidos, setPedidos] = useState<IPedido[]>([])

    function excluir (id: number) {
        const token = sessionStorage.getItem('token')

        http.delete(`pedidos/${id}`, {
            headers: {
                'Authorization': `Bearer ${token}`
            }
        }).then(() => console.log('Pedido excluído com sucesso'))
        .catch(error => console.log('Erro ao excluir o pedido: ', error))
    }

    useEffect(() => {
        http.get<IPedido[]>('pedidos')
            .then(response => setPedidos(response.data))
            .catch(error => console.log('Erro ao pegar os pedidos: ', error))
    }, [])

    return (
        <div className="container-conta">
            <section className="conta-banner">
                <h1> Minha conta </h1>
            </section>
            <div className="conta-conteudo">
                <aside className="conteudo-aside">
                    <Link to='/' className="aside-link">Pedidos</Link>
                    <Link to='/' className="aside-link">Trocas</Link>
                    <Link to='/' className="aside-link">Cupons</Link>
                    <Link to='/' className="aside-link">Seus dados</Link>
                </aside>
                <div className="conta-textos">
                    <h2>Últimos pedidos</h2>
                    {pedidos.map(pedido =>
                        <div className="textos-display" key={pedido.id}>
                            <div className="textos">
                                <p>Pedido: <strong>{pedido.id}</strong></p>
                                <p>Data do pedido: <strong>{new Date(pedido.data).toLocaleDateString()}</strong></p>
                                <p>Valor total: 
                                    <strong>
                                        {Intl.NumberFormat('pt-br', {style: 'currency', currency: 'BRL'}).format(pedido.total)}
                                    </strong>
                                </p>
                                <p>Entrega realizada em: <strong>{new Date(pedido.entrega).toLocaleDateString()}</strong></p>
                            </div>
                            <div className="textos-botao">
                                <Botao >Detalhes</Botao>
                            </div>
                        </div>
                    )}
                </div>
            </div>
            <Topicos />
            <NewsLetter />
        </div>
    )
}