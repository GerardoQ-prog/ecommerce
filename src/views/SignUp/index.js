import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { useForm } from 'react-hook-form'

import Login from "../../components/Login";

const SignUp = (props) => {
    const defaultValues = {
        nombre: "",
        apellido: "",
        email: "",
        password: "",
    };
    const [data, setData] = useState({
        nombre: '',
        apellido: '',
        email: '',
        password: ''
    })

    const onChangeData = (e) => {
        setData({
            ...data,
            [e.target.name]: e.target.value,
            
        })
    }
    const { errors, handleSubmit, register } = useForm({
        defaultValues
    });

    const onSubmit = async (data, e) => {
        console.log(data);
        e.target.reset();

    };
    return (
        <Login>
            <form action="/signup" method="POST" onSubmit={handleSubmit(onSubmit)}>
                <div className="form-grupo">
                    <label className="labelText">Nombres</label>
                    <input type="text" className="form-control" name="nombre" id="name" 
                    onChange={onChangeData}
                    ref={register({
                        required: {
                            value: true,
                            message: "Nombre es Requerido",
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
                        {errors?.nombre?.message}
                    </span>
                </div>
                <div className="form-grupo">
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
                </div>
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
                        {errors?.password?.message}
                    </span>
                </div>
                <button className="btn btn-block btn-primary">
                    SignUp
                    </button>
            </form>
            <Link to="/recuperar">
                <h4 className="recuperar">Recuperar Contraseña</h4>
            </Link>
        </Login>
    )
}

export default SignUp