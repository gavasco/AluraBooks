import React, { useState } from "react";
import './ModalCadastro.css'
import loginImg from '../ModalLogin/assets/modalLogin.png'
import Titulo from "../Titulo/Titulo";
import CampoTexto from "../CampoTexto/CampoTexto";
import Botao from "../Botao/Botao";
import olhoSenha from './assets/olhaSenha.png'
import axios from 'axios'
import http from "../../http/url";

export interface Props {
    setModalCadastroAberto: React.Dispatch<React.SetStateAction<boolean>>
    setModalLoginAberto: React.Dispatch<React.SetStateAction<boolean>>
}

export default function ModalCadastro({ setModalCadastroAberto, setModalLoginAberto }: Props) {
    const [nome, setNome] = useState('');
    const [email, setEmail] = useState('');
    const [endereco, setEndereco] = useState('');
    const [complemento, setComplemento] = useState('');
    const [cep, setCep] = useState('');
    const [senha, setSenha] = useState('');
    const [confirmaSenha, setConfirmaSenha] = useState('');
    const [mostrarSenha, setMostrarSenha] = useState(false);
    const [erroSenha, setErroSenha] = useState('')
    const [erroPlaceholder, setErroPlaceholder] = useState('')

    function aoSubmeterForms (evento: React.FormEvent<HTMLFormElement>) {
        evento.preventDefault()
        if (senha !== confirmaSenha) {
            setErroSenha('senhaNaoCorrespondente')
            setErroPlaceholder('As senhas não conferem')
            setSenha('')
            setConfirmaSenha('')
            return
        }

        const usuario ={
            nome,
            email,
            endereco,
            complemento,
            cep,
            senha,
            confirmaSenha
        }

        http.post('public/registrar', usuario)
            .then(() => {
                alert ('Usuário cadastrado com sucesso')
                setNome(''); setEmail(''); setEndereco(''); setComplemento(''); setCep(''); 
                    setSenha(''); setConfirmaSenha('');
                setModalCadastroAberto(false)
            }).catch(erro => console.error('Erro ao fazer o cadastro: ' + erro))
    }

    return (
        <div className="overlay">
            <form onSubmit={aoSubmeterForms}>
                <section className="container-modal">
                    <div className="modal-img">
                        <img src={loginImg} alt="img do modal login" />
                    </div>
                    <div className="modal">
                        <div className="modal-header">
                            <Titulo> Cadastro </Titulo>
                            <h3 onClick={() => {
                                setModalCadastroAberto(false)
                                setModalLoginAberto(false)
                            }}  > X </h3>
                        </div>
                        <CampoTexto
                            placeholder="Seu nome completo"
                            tipo="text"
                            texto="Nome"
                            value={nome}
                            onChange={setNome}
                            required
                        />
                        <CampoTexto
                            placeholder="exemplo@gmail.com"
                            tipo="email"
                            texto="E-mail"
                            value={email}
                            onChange={setEmail}
                            required
                        />
                        <CampoTexto
                            placeholder="Sua rua e número"
                            tipo="text"
                            texto="Endereço"
                            value={endereco}
                            onChange={setEndereco}
                            required
                        />
                        <div className="grid">
                            <CampoTexto
                                placeholder="Apto/casa, bloco, referência"
                                tipo="text"
                                texto="Complemento"
                                value={complemento}
                                onChange={setComplemento}
                                required
                            />
                            <CampoTexto
                                placeholder="Ex: 00000-000"
                                tipo="text"
                                texto="CEP"
                                value={cep}
                                onChange={setCep}
                                required
                            />
                        </div>
                        <div className="icon-senha">
                            <CampoTexto
                                placeholder={erroPlaceholder ? erroPlaceholder : 'xxxxxxxxxxxxx'}
                                tipo="password"
                                texto="Senha"
                                value={senha}
                                onChange={setSenha}
                                mostrarSenha={mostrarSenha}
                                erroSenha={erroSenha}
                                required
                            />
                            <img src={olhoSenha} alt="" onClick={() => setMostrarSenha(!mostrarSenha)} />
                        </div>
                        <div className="icon-senha">
                            <CampoTexto
                                placeholder={erroPlaceholder ? erroPlaceholder : 'xxxxxxxxxxxxx'}
                                tipo="password"
                                texto="Confirmar senha"
                                value={confirmaSenha}
                                onChange={setConfirmaSenha}
                                mostrarSenha={mostrarSenha}
                                erroSenha={erroSenha}
                                required
                            />
                            <img src={olhoSenha} alt="" onClick={() => setMostrarSenha(!mostrarSenha)} />
                        </div>
                        <div className="modal-cadastro">
                            <Botao type='submit'> Cadastrar </Botao>
                        </div>
                    </div>
                </section>
            </form>
        </div>
    )
}