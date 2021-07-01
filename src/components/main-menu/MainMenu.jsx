import React from 'react'
import { Link } from 'react-router-dom'

import './MainMenu.css'

/**
 * Renderiza o principal componente de menu para a aplicação
 * @author rafaelvictor01
 * @returns JSX.Element
 */
export default function MainMenu() {
    return (
        <aside className={'MainMenu'}>
            <nav>
                <ul>
                    <li><Link to={'/'}>Home</Link></li>
                    <li><Link to={'/about'}>About</Link></li>
                </ul>
            </nav>
        </aside>
    )
}
