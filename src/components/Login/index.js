import React from 'react'
import { Link } from 'react-router-dom'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCircleNotch, faTimesCircle} from '@fortawesome/free-solid-svg-icons'

const Login = (props) => {
    return (
        <div >
            <div className="close">
            <Link to="/">
            <FontAwesomeIcon className="ico ico-alert" icon={faTimesCircle} size="2x" />
            </Link>
            </div>
        <div className="login">
            <div className=".text-center">
                <div className="text-center">
                    <div className="header">
                        <div>
                            {/* <img />  */}
                        </div>
                        <Link to="/signin" className="btn btn-secondary btnUno text-letter"><FontAwesomeIcon icon={faCircleNotch} size="lg" />Ingresar</Link>
                        <Link to="/signup" className="btn btn-secondary btnDos text-letter"><FontAwesomeIcon icon={faCircleNotch} size="lg" />Registrar</Link>
                    </div>
                </div>
                <div className="card-body">
                    {props.children}
                </div>
            </div>
        </div>
        </div>
    )
}

export default Login