import React from 'react';

import Nav from '../../components/Menu/Nav'
import Menu from '../../components/Menu/Menu'
import Categoria from '../../components/Categoria/index'
class Landing extends React.Component{
    render(){
        return(
            <div>
            <Nav></Nav>
            <Menu></Menu>  
            <Categoria></Categoria>
            </div>
            
        )
    }
}

export default Landing