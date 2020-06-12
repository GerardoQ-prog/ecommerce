import React from 'react'
import { Switch, Route } from 'react-router-dom'
import SignUp from './views/SignUp.js'
import SignIn from './views/SignIn.js'
import Recuperar from './views/Recuperar.js'


const LoggedModule = () => {
    return (
        <Switch>
            <Route  path="/recuperar" component={Recuperar} />
            <Route  path="/signup" component={ SignUp } />
            <Route  path="/signin" component={SignIn} />
        </Switch>
    )
}

export default LoggedModule
