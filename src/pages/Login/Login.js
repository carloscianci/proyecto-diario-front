import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import './Login.css';
import { useForm } from "react-hook-form";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";



const Login = () => {
    const url = process.env.REACT_APP_URL_API
    let navigate = useNavigate();

    const { register, handleSubmit, formState: { errors } } = useForm()
    

    const getLogin = async(data) => {
        const result = await axios.post(`${url}/usuario/login`,{
            "email" : data.email,
            "clave" : data.clave
        })

        if (result && result.data.resultado) {
            localStorage.setItem("access_token", result.data.token)
            navigate("/adminNoticias")
            //window.location.href = "adminNoticias"
        } else{
            alert('Usuario y contraseña ivalido')
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
                        <Link to="/recuperarPassword">¿Perdiste tu contraseña?</Link>
                        <Link to="/registro">¿No tienes Cuenta? Registrate</Link>
                        
                        <hr />
                        <Link to="/">« Volver </Link>       
                    </div>
                </div>
            </div>
        </form>
        
    );
};

export default Login;