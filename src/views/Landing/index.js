import React from 'react';

import Nav from '../../components/Menu/Nav'
import Menu from '../../components/Menu/Menu'
import Slider from '../../components/Slider'
import Categoria from '../../components/Categoria/index'
import Footer from '../../components/Footer'
class Landing extends React.Component{
    render(){
        return(
            <div>
            <Nav></Nav>
            <Menu></Menu> 
            <Slider></Slider> 
            <Categoria></Categoria>
            <Footer></Footer>
            </div>
            
        )
    }
}

export default Landing