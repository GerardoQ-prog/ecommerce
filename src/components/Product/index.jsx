import React from 'react';
import BtnCar from './BtnCar';

const Product = ({id,title,price,image}) => {
    console.log(image)
    return ( 
        <div className='products'>
            <div className='product-img'>
                <img src={require('../../assets/img/product.png')} alt={title}  />                                        
            </div>
            <div className='product-detail'>
                <h2 className='product-title'>{title}</h2>
                <h4 className='product-price'>  S/{price}</h4>
                <BtnCar  id={id} />
            </div>
            
        </div>
     );
}
 
export default Product;