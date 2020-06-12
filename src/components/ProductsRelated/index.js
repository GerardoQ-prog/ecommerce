import React, {useState} from 'react'

import Product from '../Product';

const  ProductsRelated = () => {
    const [products, setCategoria] = useState([
        {id: 1, name: "Adidas Sport- Shakira",price:' 25.00', image:'../../assets/img/product.png'}, 
        {id: 2, name: "Adidas Sport- Shakira",price:' 35.00', image:'../../assets/img/product.png'}, 
        {id: 3, name: "Adidas Sport- Shakira",price:' 15.00', image:'../../assets/img/product.png'},
        ]);

    return ( 
        <div className="container">
            <h2 class="prod-related-title">Productos Relacionados</h2>
            <ul className="product-list">
                {
                    products.map(item => (
                        <li className="product-related" key={item.id}  >
                            <Product id={item.id} title={item.name} price={item.price} image={item.image} />        
                         </li>
                    ))
                }

            </ul>
        </div>
     );
}
 
export default ProductsRelated;