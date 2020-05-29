import React from 'react';
import ButtonCar from './ButtonCar'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {  faSearch, faUserAlt} from '@fortawesome/free-solid-svg-icons'
import { Link } from 'react-router-dom';

class Nav extends React.Component{
    render(){
        return(
            <div className="nav">
                <div className="nav_image" ></div>
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
        )
    }
}


export default Nav