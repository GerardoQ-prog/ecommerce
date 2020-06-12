import React from 'react';
import {Link} from 'react-router-dom'


const BtnCar = ({id}) => {
    return ( 
         <Link className='product-add' to={`/product/${id}`}>
                    Agregar a Carrito
         </Link>
     );
}
 
export default BtnCar;