import React from "react";
import './AreaCadastroLogin.css'
import Botao from "../Botao/Botao";

export default function AreaCadastroLogin () {
    return (
        <div className="area-cadastro-login">
            <div className="area-texto">
                <h3> Já possui uma conta? </h3>
                <p>Com um conta você pode criar sua própria estante de livros e e-books.</p>
            </div>
            <div className="area-botoes">
                <Botao variante="transparente">Criar conta</Botao>
                <Botao>Fazer login</Botao>
            </div>
        </div>
    )
}