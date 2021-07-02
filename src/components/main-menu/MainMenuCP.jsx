import React from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components'

/**
 * Renderiza o principal componente de menu para a aplicação
 * @author rafaelvictor01
 * @returns JSX.Element
 */
export default function MainMenuCP() {
    return (
        <MainMenuWrapperSCP>
            <nav>
                <ul>
                    <li><Link to={'/'}>Home</Link></li>
                    <li><Link to={'/about'}>About</Link></li>
                    <li><Link to={'/param/hello-world'}>Param</Link></li>
                </ul>
            </nav>
        </MainMenuWrapperSCP>
    )
}

const MainMenuWrapperSCP = styled.aside`
    display: flex;
    flex-basis: 250px;
    background-color: dodgerblue;

    nav {
        flex-grow: 1;
    }

    ul {
        list-style: none;
        padding: 0;
    }

    li {
        display: flex;
    }

    li a {
        text-decoration: none;
        color: white;
        font-size: 1.5rem;
        padding: 10px;
        margin-bottom: 10px;
        flex: 1;
    }

    li a:hover {
        background-color: #00000030;
    }
`