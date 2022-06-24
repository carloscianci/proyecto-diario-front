// import axios from 'axios';
// import React from 'react';
// import { useState } from 'react';
// import { useEffect } from 'react';
// import '../Loguin/Loguin.css'

// const Loguin = () => {

//     const [getLogin, setGetLogin] = useState([])

//     const getUser = async() => {
//         const getInfo = await axios.get('')
//     }
    
//     return (
//         <div id="contenedor">
            
//             <div id="contenedorcentrado">
//                 <div id="login">
//                     <form id="loginform">
//                         <label for="usuario">Usuario</label>
//                         <input id="usuario" type="text" name="usuario" placeholder="Usuario" required />
                        
//                         <label for="password">Contraseña</label>
//                         <input id="password" type="password" placeholder="Contraseña" name="password" required />
                        
//                         <button type="submit" title="Ingresar" name="Ingresar">Login</button>
//                     </form>
                    
//                 </div>
//                 <div id="derecho">
//                     <div class="titulo">
//                         Bienvenido
//                     </div>
//                     <hr />
//                     <div class="pie-form">
//                         <a href="#/">¿Perdiste tu contraseña?</a>
//                         <a href="#/">¿No tienes Cuenta? Registrate</a>
//                         <hr />
//                         <a href="#">« Volver</a>
//                     </div>
//                 </div>
//             </div>
//         </div>
        
//     );
// };

// export default Loguin;