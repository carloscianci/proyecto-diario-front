import React from 'react';
import { useForm } from 'react-hook-form';
import './Login.css'

const Login = () => {

    const { register, handleSubmit, formState: { errors } } = useForm()


  const onSubmit = (data) => console.log(data);


    return (
        <form onSubmit={handleSubmit(onSubmit)} id="contenedor">
            
            <div id="contenedorcentrado">
                <div id="login">
                    <form id="loginform">
                        <label for="usuario">Usuario</label>
                        <input id="usuario" type="email" name="usuario" placeholder="Email" required {...register('email')}/>
                        
                        <label for="password">Contraseña</label>
                        <input id="password" type="password" placeholder="Contraseña" name="password" required 
                        {...register('password')} />

                        {errors.password && <span>{errors.password.message}</span>}
                        
                        <button type="submit" title="Ingresar" name="Ingresar">Login</button>

                        {/*  */}
                    </form>
                    
                </div>
                <div id="derecho">
                    <div className="titulo">
                        Bienvenido
                    </div>
                    <hr />
                    <div className="pie-form">
                        <a href="#/">¿Perdiste tu contraseña?</a>
                        <a href="#/">¿No tienes Cuenta? Registrate</a>
                        <hr />
                        <a href="#/">« Volver</a>
                    </div>
                </div>
            </div>
        </form>
        
    );
};

export default Login;