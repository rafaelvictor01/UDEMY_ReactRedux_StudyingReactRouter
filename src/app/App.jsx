import React from 'react'
import Content from '../components/content/Content'
import MainMenu from '../components/main-menu/MainMenu'
import { BrowserRouter } from 'react-router-dom'

import './App.css'

/**
 * Componente com maior grau de abstração da aplicação.
 * @author rafaelvictor01
 * @returns JSX.Element
 */
export default function App() {
    return (
        <div className={'App'}>
            <BrowserRouter>
                <MainMenu />
                <Content />
            </BrowserRouter>
        </div>
    )
}