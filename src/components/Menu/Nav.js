import React from 'react';
import ButtonCar from './ButtonCar'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {  faSearch, faUserAlt} from '@fortawesome/free-solid-svg-icons'
import { Link } from 'react-router-dom';

class Nav extends React.Component{
    render(){
        return(
            <div className="nav">
                <div class="container">
                    <div class="menunav">
                        <div className="nav_image" >
                            <img src={require('./img/logo.png')}/>
                        </div>
                        <div class="right">
                            <div className="nav_buscar">
                                <FontAwesomeIcon icon={faSearch} size="lg" />
                            </div>
                            <Link to="/"className="nav_ingreso">
                            <FontAwesomeIcon icon={faUserAlt} size="lg"></FontAwesomeIcon>  
                            Ingresar               
                            </Link>          
                            <ButtonCar className="nav_buttoncar">
                            </ButtonCar>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}


export default Nav