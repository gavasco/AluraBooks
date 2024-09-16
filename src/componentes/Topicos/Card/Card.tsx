import React, { ReactNode } from "react";
import './Card.css'

export interface Props {
    children: ReactNode
}

export default function Card ({ children }: Props) {
    return (
        <div className="card">
            <h2> {children} </h2>
        </div>
    )
}