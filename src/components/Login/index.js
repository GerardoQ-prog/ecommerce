import React from 'react'
import { Link } from 'react-router-dom'

const Login = (props) => {
    return (
        <div className="login">
            <div className=".text-center">
                <div className="text-center">
                    <div className="header">
                        <div>
                            {/* <img />  */}
                        </div>
                        <Link to="/signin" className="btn btn-secondary btnUno">Ingresar</Link>
                        <Link to="/signup" className="btn btn-secondary btnDos">Registrar</Link>
                    </div>
                </div>
                <div className="card-body">
                    {props.children}
                </div>
            </div>
        </div>
    )
}

export default Login