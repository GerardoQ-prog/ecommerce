import React from 'react'
import ProductsRelated from '../../components/ProductsRelated/index'
import Nav from '../../components/Menu/Nav'
import Menu from '../../components/Menu/Menu'
import Carrousel from '../../components/Carrousel/Carrusel'
import Footer from '../../components/Footer/index'
const Products = () => {
    return ( 
        <div>
            <Nav></Nav>
            <Menu></Menu>
            <Carrousel></Carrousel>
            <ProductsRelated />
            <Footer></Footer>
        </div> 
    );
}
 
export default Products;