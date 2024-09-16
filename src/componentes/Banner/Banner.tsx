import React from "react";
import banner from './assets/banner.png'
import './Banner.css'
import searcgIcon from './assets/searchIcon.png'

export default function Banner () {
    return (
        <div className="banner">
            <h1> Já sabe por onde começar? </h1>
            <p> Encontre em nossa estante o que precisa para seu desenvolvimento! </p>
            <input type="search" placeholder="Qual será sua próxima leitura?"/>
        </div>
    )
}