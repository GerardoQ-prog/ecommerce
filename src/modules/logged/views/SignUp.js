import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { useForm } from 'react-hook-form'
import Axios from '../../../config/axios';
import Login from "../../../components/Login";
import Loading from '../../../components/Login/Loading';
import Swal from 'sweetalert2'
import { withRouter } from 'react-router-dom'

const SignUp = ({history}) => {

    const [users, setUsers] = useState({
        name: '',
        email: '',
        password: ''
    })

    const [loading, setLoading] = useState(false)

    const Toast = Swal.mixin({
        toast: true,
        position: 'top',
        showConfirmButton: false,
        timer: 3000,
        timerProgressBar: true,
        onOpen: (toast) => {
          toast.addEventListener('mouseenter', Swal.stopTimer)
          toast.addEventListener('mouseleave', Swal.resumeTimer)
        }
      })

    const onChangeData = (e) => {
        setUsers({
            ...users,
            [e.target.name]: e.target.value,
            
        })
    }
    const { errors, handleSubmit, register } = useForm();

    const onSubmit = async (data, e) => {
        setLoading({ loading: true });
    
        Axios.post('/api/users',users)
        .then(res =>{
            
            //validar si hay errores de mongo
            if(res.data.code === 11000){
                Toast.fire({
                    icon: 'error',
                    html: '<p class="text-alert m">Error</p>',
                    customClass: {
                        popup: 'popup-class-error',    
                      }
                  })
            }else{
                Toast.fire({
                    icon: 'success',
                    html: '<p class="text-secondary m">Usuario creado satisfactoriamente</p>',
                    customClass: {
                        popup: 'popup-class-success',    
                      }
                },                  
                  res.data.mensaje
                )
            }

            setTimeout(() => {
                setLoading({ loading: false });
            }, 2000);
        
            
             e.target.reset();
            history.push('/signIn')
        })

    };
    return (
        <Login>
            <form action="/signup" onSubmit={handleSubmit(onSubmit)}>
                <div className="form-grupo">
                    <label className="labelText">Nombres</label>
                    <input type="text" className="form-control" name="name" id="name" 
                    onChange={onChangeData}
                    ref={register({
                        required: {
                            value: true,
                            message: "Nombre es Requerido",
                        },
                         minLength: {
                             value: 8,
                             message: "no menos de 4",
                         },
                    })}/>
                    <span className="">
                        {errors?.name?.message}
                    </span>
                </div>
                {/* <div className="form-grupo">
                    <label className="labelText">Apellidos</label>
                    <input type="text" className="form-control" name="apellido" id="apellido" 
                    onChange={onChangeData}
                    ref={register({
                        required: {
                            value: true,
                            message: "Apellido es Requerido",
                        },
                        maxLength: {
                            value: 8,
                            message: "No mas de 8 caracteres!",
                        },
                        minLength: {
                            value: 4,
                            message: "no menos de 4",
                        },
                    })}/>
                    <span className="">
                        {errors?.apellido?.message}
                    </span>
                </div> */}
                <div className="form-grupo">
                    <label className="labelText">Correo</label>
                    <input type="email" className="form-control" name="email" id="email"
                    onChange={onChangeData}
                    ref={register({
                        required: {
                            value: true,
                            message: "Se require Email",
                          },
                           pattern: {
                             value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i,
                             message: "invalid email address",
                           },
                        }
                        )} />
                        <span className="">
                        {errors?.email?.message}
                    </span>
                </div>
                <div className="form-grupo">
                    <label className="labelText">Contraseña</label>
                    <input type="password" className="form-control" name="password" id="password" 
                    onChange={onChangeData}
                    ref={register({
                        required: {
                            value: true,
                            message: "Contrasea es Requerida",
                        },
                        minLength: {
                            value: 8,
                            message: "no menos de 4",
                        },
                    })}/>
                    <span className="">
                        {errors?.password?.message}
                    </span>
                </div>
                <button className="btn btn-block btn-primary" type="submit">
                    {loading && (
                        <Loading />
                    )}
                    {loading && <span>Procesando</span>}
                    {!loading && <span>Crear Cuenta</span>}
                </button>
            </form>
            <Link to="/recuperar">
                <h4 className="recuperar">Recuperar Contraseña</h4>
            </Link>
        </Login>
    )
}

export default withRouter(SignUp)