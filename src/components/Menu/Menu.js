import React, {useState} from 'react'
import {Link} from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars} from '@fortawesome/free-solid-svg-icons'

const Menu = () => {
    
    const [categoria, setCategoria] = useState([
        {id: 1, nombre: "Moda Hombre"}, 
        {id: 2, nombre: "Moda Mujer"}, 
        {id: 3, nombre: "Moda Niños"}, 
        {id: 4, nombre: "Accesorio"}, 
        {id: 5, nombre: "Maquina"}
      ]);
      return (
          <div className='respMenu'>
                 
                 <FontAwesomeIcon icon={faBars} className='menu__bars' />
                     <ul className="menu">
                      {
                          categoria.map(item => (
                              <li className="menu_lista" key={item.id}>
                                  <Link to={`/categoria/${item.id}`}>
                                        {item.nombre}
                                      
                                  </Link>
                              </li>
                          ))
                      }
                  </ul>
                
         </div>
                  

      )
  }
  
export default Menu