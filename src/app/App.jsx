import React from 'react'
import MainMenuCP from '../components/main-menu/MainMenuCP'
import { BrowserRouter } from 'react-router-dom'
import styled from 'styled-components'
import AppSwitchContentCP from '../components/app-switch-content/AppSwitchContentCP'

/**
 * Componente com maior grau de abstração da aplicação.
 * @author rafaelvictor01
 * @returns JSX.Element
 */
export default function App() {
    return (
        <AppStyleWrapperSCP>
            <BrowserRouter>
                <MainMenuCP />
                <AppSwitchContentCP />
            </BrowserRouter>
        </AppStyleWrapperSCP>
    )
}

const AppStyleWrapperSCP = styled.div`
    display: flex;
    height: 100vh;
`