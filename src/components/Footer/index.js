import React from 'react'
import './footer.scss'

const Footer = () => {
    return (
        <footer>
            <div class="container">
                <a href="javascript:;">
                    <img src={require('./img/logo.png')}/>
                </a>
                <p>Todos los derechos reservados</p>
            </div>
        </footer>
    )
}

export default Footer
