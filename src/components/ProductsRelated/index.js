import React, {useState} from 'react'
import {Link} from 'react-router-dom'

const  ProductsRelated = () => {
    const [products, setCategoria] = useState([
        {id: 1, name: "Adidas Sport- Shakira",price:' 25.00', img:'https://s3-alpha-sig.figma.com/img/3bf1/be8e/ecb04bb6750763da2eb7d7a7162d7aec?Expires=1591574400&Signature=UONzGp5mYSdGOqTMELGn2pK4IEctJhADh~WXbu06XO-yvPoc~vtsc7zVeo9NG6B1mJjyK-~lAyo~GGdlDXpeH~KMmat36z3Al~GAzOB5j3wkpPQHU7QV1OfQsAT6JadkZR1lFOKZ-kJWfFN1Brgz51U1vio-S4CBc5Fn6yOsQsTgRWcKKcREdMqn1MUzwRGuwUbd9PQKO4-~FcyotvgQjltzhijq1--UOQzmrViHVIMiNPFFRwUBwfnUdpbv56Or4onEY3qEXNL2UNxho2BYE9oJIWPSaWftQeQy9vzVogwf3ED3Fao4AG3BN5hM8xLSTSRVxEJbUP8DvkHkkZb6Tg__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA'}, 
        {id: 2, name: "Adidas Sport- Shakira",price:' 35.00', img:'https://s3-alpha-sig.figma.com/img/3bf1/be8e/ecb04bb6750763da2eb7d7a7162d7aec?Expires=1591574400&Signature=UONzGp5mYSdGOqTMELGn2pK4IEctJhADh~WXbu06XO-yvPoc~vtsc7zVeo9NG6B1mJjyK-~lAyo~GGdlDXpeH~KMmat36z3Al~GAzOB5j3wkpPQHU7QV1OfQsAT6JadkZR1lFOKZ-kJWfFN1Brgz51U1vio-S4CBc5Fn6yOsQsTgRWcKKcREdMqn1MUzwRGuwUbd9PQKO4-~FcyotvgQjltzhijq1--UOQzmrViHVIMiNPFFRwUBwfnUdpbv56Or4onEY3qEXNL2UNxho2BYE9oJIWPSaWftQeQy9vzVogwf3ED3Fao4AG3BN5hM8xLSTSRVxEJbUP8DvkHkkZb6Tg__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA'}, 
        {id: 3, name: "Adidas Sport- Shakira",price:' 15.00', img:'https://s3-alpha-sig.figma.com/img/3bf1/be8e/ecb04bb6750763da2eb7d7a7162d7aec?Expires=1591574400&Signature=UONzGp5mYSdGOqTMELGn2pK4IEctJhADh~WXbu06XO-yvPoc~vtsc7zVeo9NG6B1mJjyK-~lAyo~GGdlDXpeH~KMmat36z3Al~GAzOB5j3wkpPQHU7QV1OfQsAT6JadkZR1lFOKZ-kJWfFN1Brgz51U1vio-S4CBc5Fn6yOsQsTgRWcKKcREdMqn1MUzwRGuwUbd9PQKO4-~FcyotvgQjltzhijq1--UOQzmrViHVIMiNPFFRwUBwfnUdpbv56Or4onEY3qEXNL2UNxho2BYE9oJIWPSaWftQeQy9vzVogwf3ED3Fao4AG3BN5hM8xLSTSRVxEJbUP8DvkHkkZb6Tg__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA'},
        ]);

    return ( 
        <div className="container">
            <h2 class="prod-related-title">Productos Relacionados</h2>
            <ul className="product-list">
                {
                    products.map(item => (
                        <li className="product-related" key={item.id}>
                            
                            <div className='products'>
                                <div className='product-img'>
                                    <img src={item.img}  />                                        
                                </div>
                                <div className='product-detail'>
                                    <h2 className='product-title'>{item.name}</h2>
                                    <h4 className='product-price'>  S/{item.price}</h4>
                                    <Link className='product-add' to={`/product/${item.id}`}>
                                        Agregar a Carrito
                                    </Link>

                                </div>
                                    
                                </div>
                                
                         </li>
                    ))
                }

            </ul>
        </div>
     );
}
 
export default ProductsRelated;