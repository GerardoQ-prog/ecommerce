import React from 'react';
import Carousel from '../../../components/Carrousel/Carrusel';
import Categoria from '../../../components/Categoria';



class Home extends React.Component{
    render(){
        return(
            <>
                <Carousel />
                <Categoria />
            </>            
        )
    }
}

export default Home