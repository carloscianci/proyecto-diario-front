import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import './formUser.css'
import { useForm } from "react-hook-form";
import axios from "axios";
import Separator from "../Separator/Separator";

const FormUser = () => {
  const url = process.env.REACT_APP_URL_API
  const { register, handleSubmit } = useForm()

  document.addEventListener("DOMContentLoaded", function() {
    document.getElementById("formulario").addEventListener('submit', validarFormulario); 
  });

  const postFormUser = async(dataForm, e) => {
    const resultsFU = await axios.post(`${url}/suscripcion`,{
      "nombre" : dataForm.nombre,
      "apellido" : dataForm.apellido,
      "email" : dataForm.email,
      "telefono" : dataForm.telefono
    })
    if(resultsFU && resultsFU.data.resultado){
      alert('Se ha registrado con exito.')
      e.target.reset()
    }else{
      alert(resultsFU.data.message)
      e.target.reset()
    }
  }

  
  
  const validarFormulario = (regexp, dataForm) => {
    const correoUser = document.getElementById('email').value;
    let regexMail = /[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/;
    if(regexMail.test(correoUser)) {
      console.log("el mail esta completo");
    }else{
      alert("el mail esta incompleto")
      return;
    }
    const numTel = document.getElementById('numeroTel');
    let regexTel = /^(?:(?:00)?)?0?(?:11|[2368]\d)(?:(?=\d{0,2}15)\d{2})??\d{8}$/;
    if (regexTel.test(numTel)) {
      console.log('El numero de celular corresponde.');
      return;
    }else{
      alert('El numero de celular es corto o hay caracteres que no corresponden.');
    }
  }

  return (
    <div className="container-fluid">
      <Separator id="formulario"/>
      <div className="espacio-titulos text-center">
        <div className='d-flex flex-column justify-content-center align-items-center titulo titulo-1'><h2 className="color-titulo-formulario">¿Desea saber más sobre lo que pasa en el mundo?</h2></div>
        <div className='d-flex flex-column justify-content-center align-items-center titulo'><h2 className="color-titulo-formulario">¡Suscríbase y permanezca informado junto a nosotros!</h2></div>
      </div>
      <div className='d-flex justify-content-center align-items-center'>
        <form onSubmit={handleSubmit(postFormUser)} className='d-flex flex-column ancho_form'>
              <label for='nombreCompleto' className='form-label mt-1'>Nombre/s: </label>
              <input type='text' className='form-control' id='nombreCompleto' placeholder='Nombre completo' required 
                {...register("nombre",{
                    pattern:/[a-zA-Z]+/gm
                })}
              />
            
              <label for='apellidoCompleto' className='form-label mt-1'>Apellido/s: </label>
              <input type='text' className='form-control' id='apellidoCompleto' placeholder='Apellido completo' required 
                {...register("apellido",{
                  pattern:/^[a-z ,.'-]+$/i
                })}
              />
           
          
          
            <label for='email' className='form-label mt-1'>E-mail: </label>
            <input type='email' className='form-control' id='email' placeholder='correoelectronico@gmail.com' required {...register("email", {
                        pattern:/[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/g
                      }, "El correo electronico es muy largo o esta faltando su correspondiente extension como .com")}
            />
          
            <label for='numeroTel' className='form-label mt-1'>Celular: </label>
            <input type='text' className='form-control items-pequeños' id='numeroTel' maxLength='10' placeholder='N° de telefono' required {...register("telefono", {
                        pattern:/^(?:(?:00)?)?0?(?:11|[2368]\d)(?:(?=\d{0,2}15)\d{2})??\d{8}$/g
                      })}
            />
          
          <div className="boton-registro w-100 text-center">
              <button type="submit" onSubmit={handleSubmit(validarFormulario)} className='btn btn-primary texto-formulario w-50'>Suscribirse</button>
            </div>
        </form>
      </div>
    </div>
  );
};

export default FormUser;
