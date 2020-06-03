import React ,{ useState}from 'react';
import Axios from '../../config/axios'

const Register = () => {
        const[users,setusers]=useState({
            name:'',
            password:'',
            email:'',
        })
        //leer datos del formulario
        const actualizaState = e =>{
            //alamacena lo que se escribe
            setusers({
                //copia del state actual
                ...users,
                [e.target.name]:e.target.value
    
            })
            
        }
        //añade en la rest api un cliente nuevo
        const agregarCliente = e =>{
            e.preventDefault()
    
            //envair peticion
            Axios.post('/api/users',users)
            .then(function (response) {
                console.log(response);
              })
              .catch(function (error) {
                console.log(error);
              });
    

        }
    return ( 
        <div>

            <form onSubmit={agregarCliente}>
                <legend>Llena todos los campos</legend>

                <div className="campo">
                    <label>Nombre:</label>
                    <input type="text" 
                    placeholder="Nombre Cliente" 
                    name="name"
                    onChange={actualizaState}/>
                </div>

                <div className="campo">
                    <label>Apellido:</label>
                    <input type="text" 
                    placeholder="Apellido Cliente" 
                    name="email"
                    onChange={actualizaState}/>
                </div>
            
                <div className="campo">
                    <label>Empresa:</label>
                    <input type="text" 
                    placeholder="Empresa Cliente"
                    name="password"
                    onChange={actualizaState}/>
                </div>

                <div className="enviar">
                        <input type="submit" 
                        className="btn btn-azul" 
                        value="Agregar Cliente"/>
                </div>
            </form>
        </div>
    )
}
export default Register;