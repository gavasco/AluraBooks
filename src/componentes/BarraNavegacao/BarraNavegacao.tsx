import React, { useState } from 'react'
import './BarraNavegacao.css'
import { Link, useNavigate } from 'react-router-dom'
import logo from './assets/Logo.png'
import sacola from './assets/Sacola.png'
import perfil from './assets/Perfil.png'
import ModalLogin from '../ModalLogin/ModalLogin'
import Botao from '../Botao/Botao'

export default function BarraNavegacao() {
    let navigate = useNavigate()
    const [categoriasAberto, setCategoriasAberto] = useState(false)
    const [modalLoginAberto, setModalLoginAberto] = useState(false)

    const token = sessionStorage.getItem('token')
    const [usuarioLogado, setUsuarioLogado] = useState<boolean>(token != null)

    function login () {
        setModalLoginAberto(!modalLoginAberto)
    }

    function logout () {
        sessionStorage.removeItem('token')
        setUsuarioLogado(false)
        navigate('/')
    }

    return (
        <nav className='container'>
            <div className='navegacao'>
                <Link to='/' className='link'>
                    <img src={logo} alt="" />
                </Link>
                <div className='navegacao-itens' >
                    <ul className='categorias'>
                        <li className={`categorias-item ${categoriasAberto ? 'aberto' : ''}`}>
                            <Link
                                className={`link ${categoriasAberto ? 'categorias-aberto' : ''}`}
                                to='/'
                                onClick={() => setCategoriasAberto(!categoriasAberto)}
                            >
                                CATEGORIAS
                            </Link>
                            {categoriasAberto && (
                                <ul className='categorias-lista'>
                                    <li>PROGRAMAÇÃO</li>
                                    <li>FRONT-END</li>
                                    <li>INFRAESTRUTURA</li>
                                    <li>BUSINESS</li>
                                    <li>DESIGN & UX</li>
                                </ul>
                            )}
                        </li>
                            {usuarioLogado && 
                                <li className='categorias-item-logado'>
                                    <Link to='/' className='link'> FAVORITOS </Link>
                                    <Link to='/' className='link'> MINHA ESTANTE </Link>
                                </li>
                            }
                    </ul>
                </div>
            </div>
            <div className='acoes'>
                {!usuarioLogado &&
                    <div className='acoes-item'>
                        <img src={perfil} alt="" />
                        <Link className='link' to='/' onClick={login}> Login </Link>
                    </div>
                }
                {usuarioLogado &&
                    <div className='acoes-item-logado'>
                        <img src={sacola} alt="" />
                        <img src={perfil} alt="" />
                        <button className='logout' onClick={logout}> Sair </button>
                    </div>
                }
            </div>
            {modalLoginAberto &&
                <ModalLogin setModalLoginAberto={setModalLoginAberto} setUsuarioLogado={setUsuarioLogado}/>
            }
        </nav>
    )
}