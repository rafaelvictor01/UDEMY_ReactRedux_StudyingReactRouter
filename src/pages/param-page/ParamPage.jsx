import React from 'react'
import { useParams } from 'react-router'

/**
 * Renderiza uma tela que depende de um parâmetro passado na url
 * @author rafaelvictor01
 * @returns JSX.Element
 */
export default function ParamPage() {
    const params = useParams()

    return (
        <div>
            <h1>ParamPage</h1>
            <p>Valor passado como parâmetro na URL: {params.something} </p>
        </div>
    )
}
