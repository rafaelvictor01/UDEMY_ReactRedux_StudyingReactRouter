import React from 'react'
import { Switch, Route } from 'react-router-dom'
import styled from 'styled-components'
import AboutPage from '../../pages/about-page/AboutPage'
import NotFoundPage from '../../pages/errors/not-found-page/NotFoundPage'
import HomePage from '../../pages/home-page/HomePage'
import ParamPage from '../../pages/param-page/ParamPage'

/**
 * Renderiza um componente de conteúdo genérico para a aplicação
 * @author rafaelvictor01
 * @returns JSX.Element
 */
export default function AppSwitchContentCP() {
    return (
        <AppSwitchContentWrapperSCP>
            <Switch>
                <Route exact path={'/'} component={HomePage} />
                <Route path={'/about'} component={AboutPage} />
                <Route path={'/param/:something'} component={ParamPage} />
                <Route path={'*'} component={NotFoundPage} />
            </Switch>
        </AppSwitchContentWrapperSCP>
    )
}

const AppSwitchContentWrapperSCP = styled.div`
    display: flex;
    flex-grow: 1;
    padding: 30px;
    background-color: #bbb;
`