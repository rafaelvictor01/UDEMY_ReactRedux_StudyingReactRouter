import React from 'react'
import { Switch, Route } from 'react-router-dom'
import AboutPage from '../../pages/about-page/AboutPage'
import HomePage from '../../pages/home-page/HomePage'

import './Content.css'

/**
 * Renderiza um componente de conteúdo genérico para a aplicação
 * @author rafaelvictor01
 * @returns JSX.Element
 */
export default function Content() {
    return (
        <div className={'Content'}>
            <Switch>
                <Route exact path={'/'} component={HomePage} />
                <Route path={'/about'} component={AboutPage} />
            </Switch>
        </div>
    )
}