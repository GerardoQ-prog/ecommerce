import React, {useState} from 'react'
import {Link} from 'react-router-dom'

const Menu = () => {
    
    const [categoria, setCategoria] = useState([
        {id: 1, nombre: "Moda Hombre"}, 
        {id: 2, nombre: "Moda Mujer"}, 
        {id: 3, nombre: "Zapatilla"}, 
        {id: 4, nombre: "Accesorio"}, 
        {id: 5, nombre: "Maquina"},
        {id: 6, nombre: "Oferta"}
      ]);
      return (
          <div className="menu">
                  <ul className="row">
                      {
                          categoria.map(item => (
                              <li className="menu_lista" key={item.id}>
                                  <Link to={`/categoria/${item.id}`}>
                                        <h4>{item.nombre}</h4>
                                      
                                  </Link>
                              </li>
                          ))
                      }
                  </ul>
          </div>
      )
  }
  
export default Menu