import React from 'react';

import Nav from '../../components/Menu/Nav'
import Menu from '../../components/Menu/Menu'

import Categoria from '../../components/Categoria/index'
import Footer from '../../components/Footer'
import Carousel from '../../components/Carrousel/Carrusel'
class Landing extends React.Component{
    render(){
        return(
            <div>
            <Nav></Nav>
            <Menu></Menu> 
            <Carousel/>
            <Categoria></Categoria>
            <Footer></Footer>
            </div>
            
        )
    }
}

export default Landing