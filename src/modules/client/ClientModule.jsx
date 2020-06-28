import React from 'react'
import { Switch, Route } from 'react-router-dom'
import Home from './views/Home';
import Categoria from './views/Categoria'
import Products from './views/ProductDetail';
import Nav from '../../components/Menu/Nav';
import Menu from '../../components/Menu/Menu';
import Footer from '../../components/Footer';

const ClientModule = () => {
    return (
        <>
            <Nav />
            <Menu />
            <Switch>
                <Route path="/" component={ Home } exact />
                <Route path="/categoria/:id" component={Categoria} exact />
                <Route path="/products" component={Products} exact />
            </Switch> 
            <Footer />       
        </>
    )
}

export default ClientModule
