import React from "react";
import './Topicos.css'
import Card from "./Card/Card";

const topicos = [
    'Android', 
    'OO',
    'Marketing Digital',
    'Agile',
    'Startups',
    'HTML & CSS',
    'Java',
    'Python'
]

export default function Topicos () {
    return (
        <div className="container-topicos">
            <h3>TÓPICOS VISITADOS RECENTEMENTE</h3>
            <div className="topicos">
                {topicos.map((topico, index) => 
                    <Card key={index}>
                        {topico}
                    </Card>
                )}
            </div>
        </div>
    )
}