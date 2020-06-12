import React from 'react';
import ProductsRelated from '../ProductsRelated';
import BtnCar from '../Product/BtnCar';
import { useState } from 'react';
//{id,category}
const ProductDetail = () => {
    const [count,setCount]=useState(1);
    const [id,setId]=useState(1);

    function handleUp () {
        setCount(count+1);
    }
    function handleDown(){
        if(count>1){       
            setCount(count-1);
        }

    }
    

    return (
        <div className='container'>
            <h1>Zapatillas Mujer / Adidas Sport -Shakira</h1>
            <div className='Product__Detail'>
                <div><img src={require('../../assets/img/product.png')} alt="Adidas Sport -Shakira"/></div>
                <div>
                    <div>
                        <h2 >Adidas Sport -Shakira</h2>
                        <h4>S/25.00</h4>
                        <span className='Product__Detail-code'>SKU : 76sa6</span>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit</p>
                        <div className='Product__Detail-btn'>
                            <button onClick={handleDown}>-</button>
                            <span className='Product__Detail-count'>{count}</span>
                            <button onClick={handleUp}>+</button>
                        </div>
                        <div className='Product__Detail-add'>
                            <BtnCar id={id}/>
                        </div>
                        
                    </div>
                </div>
                
            </div>
            <ProductsRelated />
            
           
            
        </div>
        
    );
}



export default ProductDetail;