import React from 'react'
import reactDom from 'react-dom'
import App from './app/App'

import './index.css'

/**
 * injeta o principal componente da aplicação na única div existente no arquivo HTML.
 * @author rafaelvictor01
 */
reactDom.render(
    <App />,
    document.getElementById('root')
)
