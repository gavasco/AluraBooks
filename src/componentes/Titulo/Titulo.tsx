import React, { ReactNode } from "react";
import './Titulo.css'

export interface Props {
    children: ReactNode
}

export default function Titulo ({ children }: Props) {
    return (
        <h1 className="titulo"> {children} </h1>
    )
}