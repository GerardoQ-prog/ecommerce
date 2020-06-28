import React, {useState} from 'react'
import { Link } from 'react-router-dom'
import { useForm } from 'react-hook-form'

import Login from "../../../components/Login";
import Loading from '../../../components/Login/Loading';



const Recuperar = () => {

    const [recuperar, setRecuperar] = useState('')

    const [loading, setLoading] = useState(false)
    
    const { errors, handleSubmit, register } = useForm();

    const onChangeData = (e) => {
        setRecuperar({
            ...recuperar,
            [e.target.name]: e.target.value,

        })
    }

    const onSubmit = async (data, e) => {
        setLoading({ loading: true });
    
            // API call here
            
            setTimeout(() => {
                setLoading({ loading: false });
            }, 2000);
         e.target.reset();
};


    return (
        <Login>
            <form action="/recuperar" onSubmit={handleSubmit(onSubmit)}>

               <div className="form-grupo">
                   <label className="labelText">Ingrese correo para recuperar contraseña</label>
                   <input 
                        type="email" 
                        name="email" 
                        id="" 
                        className="form-control" 
                        onChange={onChangeData}
                        ref={register({
                            required: {
                                value: true,
                                message: "Se require Email",
                              },
                               pattern: {
                                 value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i,
                                 message: "Direccion de email invalido",
                               },
                            }
                            )}
                        />
                        <span className="">
                        {errors?.email?.message}
                    </span>
               </div> 
               <button type="submit" className="btn btn-block btn-primary">
               {loading && (
                       <Loading />
                    )}
                    {loading && <span>Procesando</span>}
                    {!loading && <span>Recuperar</span>}
               </button> 
            </form>
        </Login>
    )
}

export default Recuperar