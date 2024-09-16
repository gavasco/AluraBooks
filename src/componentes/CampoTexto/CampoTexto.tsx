import React, { ReactNode } from "react";
import './CampoTexto.css'

export interface Props {
    tipo?: 'search' | 'password' | 'email' | 'text'
    placeholder: string
    texto?: string
    value: string
    onChange: (e: any) => void
    required?: true
    mostrarSenha?: boolean
    erroSenha?: string
}

export default function CampoTexto ({ tipo, placeholder, texto, value, onChange, mostrarSenha, erroSenha }: Props) {
    return (
        <div className={`campo-texto ${erroSenha} `}>
            <label > {texto} </label>
            <input 
                required 
                type={mostrarSenha ? 'text' : tipo} 
                placeholder={placeholder} 
                value={value} 
                onChange={(e) => onChange(e.target.value)}

            />
        </div>
    )
}