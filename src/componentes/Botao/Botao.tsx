import React, { ReactNode } from "react";
import './Botao.css'

export interface Props {
    children: ReactNode
    variante?: string
    onClick?: () => void
    type?: 'button' | 'reset' | 'submit'
}

export default function Botao ({ children, variante, onClick, type = 'button' }: Props) {
    return (
        <button className={`botao ${variante}`} onClick={onClick} type={type}> {children} </button>
    )
}