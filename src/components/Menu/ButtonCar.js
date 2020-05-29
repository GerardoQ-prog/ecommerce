import React from 'react';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {  faShoppingCart} from '@fortawesome/free-solid-svg-icons'

class ButtonCar extends React.Component{
    render(){
        return(
            <div className="nav_buttoncar">
                <div className="nav_buttoncar_precio">
                <h3>S/.00</h3>
                </div>
                <div className="nav_buttoncar_car">
                <FontAwesomeIcon icon={faShoppingCart} size="lg" 
                />
                </div>
                <div className="nav_buttoncar_cantidad">
                0
                </div>
                
            </div>
            
        )
    }
}


export default ButtonCar