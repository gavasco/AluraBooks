import React, { useState } from "react";
import './ModalLogin.css'
import loginImg from './assets/modalLogin.png'
import Titulo from "../Titulo/Titulo";
import CampoTexto from "../CampoTexto/CampoTexto";
import Botao from "../Botao/Botao";
import ModalCadastro from "../ModalCadastro/ModalCadastro";
import olhoSenha from './assets/olhaSenha.png'
import http from "../../http/url";
import { useNavigate } from "react-router-dom";

export interface Props {
    setModalLoginAberto: React.Dispatch<React.SetStateAction<boolean>>
    setUsuarioLogado: React.Dispatch<React.SetStateAction<boolean>>
}

export default function ModalLogin({ setModalLoginAberto, setUsuarioLogado }: Props) {
    let navigate = useNavigate()
    const [modalCadastroAberto, setModalCadastroAberto] = useState(false)
    const [email ,setEmail] =useState('');
    const [senha ,setSenha] =useState('');
    const [mostrarSenha, setMostrarSenha] = useState(false)

    function aoSubmeterFormulario (evento: React.FormEvent<HTMLFormElement>) {
        evento.preventDefault();

        const usuario ={
            email,
            senha
        }

        http.post('public/login',  usuario)
            .then((resposta) =>{
            sessionStorage.setItem('token', resposta.data.access_token)
            setModalLoginAberto(false)
        }).catch(erro => console.error('Erro ao fazer o login: ' + erro))
        setUsuarioLogado(true)
        navigate('/ultimos-pedidos')
    }

    return (
        <>
            {modalCadastroAberto && 
                <ModalCadastro 
                    setModalCadastroAberto={setModalCadastroAberto} 
                    setModalLoginAberto={setModalLoginAberto}
                />
            }
            {!modalCadastroAberto && <div className="overlay">
                <form className="container-modal" onSubmit={aoSubmeterFormulario}>
                    <div className="modal-img">
                        <img src={loginImg} alt="img do modal login" />
                    </div>
                    <div className="modal">
                        <div className="modal-header">
                            <Titulo> Login </Titulo>
                            <h3 onClick={() => setModalLoginAberto(false)}> X </h3>
                        </div>
                            <CampoTexto 
                                placeholder="exemplo@gmail.com" 
                                tipo="email" 
                                texto="E-mail" 
                                value={email}
                                onChange={setEmail}
                                required
                            />
                        <div className="icon-senha">
                            <CampoTexto 
                                placeholder="xxxxxxxxxxxxx" 
                                tipo="password" 
                                texto="Senha" 
                                value={senha}
                                onChange={setSenha}
                                mostrarSenha={mostrarSenha}
                                required
                            />
                            <img src={olhoSenha} alt="" onClick={() => setMostrarSenha(!mostrarSenha)}/>
                        </div>
                        <div className="modal-footer">
                            <a > Esqueci minha senha</a>
                            <Botao type="submit">Fazer Login</Botao>
                        </div>
                        <div className="modal-login">
                            <h2>Ainda não tem uma conta?</h2>
                            <Botao
                                onClick={() => {
                                    setModalCadastroAberto(true)
                                }} 
                            >
                                Criar conta
                            </Botao>
                        </div>
                    </div>
                </form>

            </div>}
        </>

    )
}
