import React from "react";
import './NewsLetter.css'

export default function NewsLetter () {
    return (
        <div className="container-news">
            <div>
                <h3 >Fique por dentro das novidades!</h3>
                <p>Atualizações de e-books, novos livros, promoções e outros.</p>
            </div>
            <div className="news-email">
                <input type="email" placeholder="Cadastre seu e-mail"/>
            </div>
        </div>
    )
}