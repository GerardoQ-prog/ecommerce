import React, {useState} from 'react'
import {Link} from 'react-router-dom'



const Categoria = () => {
    
  const [categoria, setCategoria] = useState([
      {id: 1, nombre: "Moda Hombre", img:'https://s3-alpha-sig.figma.com/img/3bf1/be8e/ecb04bb6750763da2eb7d7a7162d7aec?Expires=1591574400&Signature=UONzGp5mYSdGOqTMELGn2pK4IEctJhADh~WXbu06XO-yvPoc~vtsc7zVeo9NG6B1mJjyK-~lAyo~GGdlDXpeH~KMmat36z3Al~GAzOB5j3wkpPQHU7QV1OfQsAT6JadkZR1lFOKZ-kJWfFN1Brgz51U1vio-S4CBc5Fn6yOsQsTgRWcKKcREdMqn1MUzwRGuwUbd9PQKO4-~FcyotvgQjltzhijq1--UOQzmrViHVIMiNPFFRwUBwfnUdpbv56Or4onEY3qEXNL2UNxho2BYE9oJIWPSaWftQeQy9vzVogwf3ED3Fao4AG3BN5hM8xLSTSRVxEJbUP8DvkHkkZb6Tg__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA'}, 
      {id: 2, nombre: "Moda Mujer", img:'https://s3-alpha-sig.figma.com/img/3bf1/be8e/ecb04bb6750763da2eb7d7a7162d7aec?Expires=1591574400&Signature=UONzGp5mYSdGOqTMELGn2pK4IEctJhADh~WXbu06XO-yvPoc~vtsc7zVeo9NG6B1mJjyK-~lAyo~GGdlDXpeH~KMmat36z3Al~GAzOB5j3wkpPQHU7QV1OfQsAT6JadkZR1lFOKZ-kJWfFN1Brgz51U1vio-S4CBc5Fn6yOsQsTgRWcKKcREdMqn1MUzwRGuwUbd9PQKO4-~FcyotvgQjltzhijq1--UOQzmrViHVIMiNPFFRwUBwfnUdpbv56Or4onEY3qEXNL2UNxho2BYE9oJIWPSaWftQeQy9vzVogwf3ED3Fao4AG3BN5hM8xLSTSRVxEJbUP8DvkHkkZb6Tg__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA'}, 
      {id: 3, nombre: "Zapatilla", img:'https://s3-alpha-sig.figma.com/img/3bf1/be8e/ecb04bb6750763da2eb7d7a7162d7aec?Expires=1591574400&Signature=UONzGp5mYSdGOqTMELGn2pK4IEctJhADh~WXbu06XO-yvPoc~vtsc7zVeo9NG6B1mJjyK-~lAyo~GGdlDXpeH~KMmat36z3Al~GAzOB5j3wkpPQHU7QV1OfQsAT6JadkZR1lFOKZ-kJWfFN1Brgz51U1vio-S4CBc5Fn6yOsQsTgRWcKKcREdMqn1MUzwRGuwUbd9PQKO4-~FcyotvgQjltzhijq1--UOQzmrViHVIMiNPFFRwUBwfnUdpbv56Or4onEY3qEXNL2UNxho2BYE9oJIWPSaWftQeQy9vzVogwf3ED3Fao4AG3BN5hM8xLSTSRVxEJbUP8DvkHkkZb6Tg__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA'}, 
      {id: 4, nombre: "Accesorio", img:'https://s3-alpha-sig.figma.com/img/3bf1/be8e/ecb04bb6750763da2eb7d7a7162d7aec?Expires=1591574400&Signature=UONzGp5mYSdGOqTMELGn2pK4IEctJhADh~WXbu06XO-yvPoc~vtsc7zVeo9NG6B1mJjyK-~lAyo~GGdlDXpeH~KMmat36z3Al~GAzOB5j3wkpPQHU7QV1OfQsAT6JadkZR1lFOKZ-kJWfFN1Brgz51U1vio-S4CBc5Fn6yOsQsTgRWcKKcREdMqn1MUzwRGuwUbd9PQKO4-~FcyotvgQjltzhijq1--UOQzmrViHVIMiNPFFRwUBwfnUdpbv56Or4onEY3qEXNL2UNxho2BYE9oJIWPSaWftQeQy9vzVogwf3ED3Fao4AG3BN5hM8xLSTSRVxEJbUP8DvkHkkZb6Tg__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA'}, 
      {id: 5, nombre: "Maquina", img:'https://s3-alpha-sig.figma.com/img/3bf1/be8e/ecb04bb6750763da2eb7d7a7162d7aec?Expires=1591574400&Signature=UONzGp5mYSdGOqTMELGn2pK4IEctJhADh~WXbu06XO-yvPoc~vtsc7zVeo9NG6B1mJjyK-~lAyo~GGdlDXpeH~KMmat36z3Al~GAzOB5j3wkpPQHU7QV1OfQsAT6JadkZR1lFOKZ-kJWfFN1Brgz51U1vio-S4CBc5Fn6yOsQsTgRWcKKcREdMqn1MUzwRGuwUbd9PQKO4-~FcyotvgQjltzhijq1--UOQzmrViHVIMiNPFFRwUBwfnUdpbv56Or4onEY3qEXNL2UNxho2BYE9oJIWPSaWftQeQy9vzVogwf3ED3Fao4AG3BN5hM8xLSTSRVxEJbUP8DvkHkkZb6Tg__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA'},
      {id: 6, nombre: "Oferta", img:'https://s3-alpha-sig.figma.com/img/3bf1/be8e/ecb04bb6750763da2eb7d7a7162d7aec?Expires=1591574400&Signature=UONzGp5mYSdGOqTMELGn2pK4IEctJhADh~WXbu06XO-yvPoc~vtsc7zVeo9NG6B1mJjyK-~lAyo~GGdlDXpeH~KMmat36z3Al~GAzOB5j3wkpPQHU7QV1OfQsAT6JadkZR1lFOKZ-kJWfFN1Brgz51U1vio-S4CBc5Fn6yOsQsTgRWcKKcREdMqn1MUzwRGuwUbd9PQKO4-~FcyotvgQjltzhijq1--UOQzmrViHVIMiNPFFRwUBwfnUdpbv56Or4onEY3qEXNL2UNxho2BYE9oJIWPSaWftQeQy9vzVogwf3ED3Fao4AG3BN5hM8xLSTSRVxEJbUP8DvkHkkZb6Tg__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA'}
    ]);
    return (
        <div className="container">
            <h2 class="cat-center">Categorias</h2>
                <ul className="row">
                    {
                        categoria.map(item => (
                            <li className="lista" key={item.id}>
                                <Link to={`/categoria/${item.id}`}>
                                    <div class='product'>
                                        <div class='product_targeta'>
                                            <img src={item.img} width='240' />
                                            <h4>{item.nombre}</h4>
                                        </div>
                                    </div>
                                </Link>
                            </li>
                        ))
                    }
                </ul>
        </div>
    )
}

export default Categoria
