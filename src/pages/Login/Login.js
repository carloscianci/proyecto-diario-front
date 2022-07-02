import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import './Login.css';
import { useForm } from "react-hook-form";
import axios from "axios";


const Login = () => {

    const { register, handleSubmit, formState: { errors } } = useForm()
    const url = process.env.REACT_APP_URL_API

    const getLogin = async(data) => {
        console.log(data);
        const result = await axios.post(url + '/usuario/login',{
            "email" : data.email,
            "clave" : data.clave
            // body: JSON.stringify(data)
            
        })

        console.log(result);
        if (result && result.data.resultado) {
            localStorage.setItem("access_token", result.data.token)
            window.open('adminNoticias')
        }
        

        }

    
    
    return (
        <form id="contenedor">
            
            <div id="contenedorcentrado">
                <div id="login">
                    <form id="loginform">
                        <label for="usuario">Usuario</label>
                        <input  type="email" placeholder="Email" required {...register("email", {
                            // pattern:/[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/g
                        })}/>

                        {errors.email?.type === 'minLength' && <small>El minimo de caracteres es de 4</small>}
                        
                        <label for="password">Contraseña</label>
                        <input type="password" placeholder="Contraseña" required 
                        {...register("clave",{
                            // pattern:/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/gm
                        })} />

                        <button onClick={handleSubmit(getLogin)} title="Ingresar" name="Ingresar">Login</button>

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