import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../Loguin/Loguin.css'

const Loguin = () => {
    return (
        <div id="contenedor">
            
            <div id="contenedorcentrado">
                <div id="login">
                    <form id="loginform">
                        <label for="usuario">Usuario</label>
                        <input id="usuario" type="text" name="usuario" placeholder="Usuario" required />
                        
                        <label for="password">Contraseña</label>
                        <input id="password" type="password" placeholder="Contraseña" name="password" required />
                        
                        <button type="submit" title="Ingresar" name="Ingresar">Login</button>
                    </form>
                    
                </div>
                <div id="derecho">
                    <div class="titulo">
                        Bienvenido
                    </div>
                    <hr />
                    <div class="pie-form">
                        <a href="#">¿Perdiste tu contraseña?</a>
                        <a href="#">¿No tienes Cuenta? Registrate</a>
                        <hr />
                        <a href="#">« Volver</a>
                    </div>
                </div>
            </div>
        </div>
        
    );
};

export default Loguin;