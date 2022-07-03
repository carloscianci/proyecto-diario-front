import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import './formUser.css'
import { useForm } from "react-hook-form";
import axios from "axios";
import Separator from "../Separator/Separator";

const FormUser = () => {

  const { register, handleSubmit } = useForm()
  const url = process.env.REACT_APP_URL_API
  const postFormUser = async(dataForm, e) => {
    const resultsFU = await axios.post(url + '/suscripcion',{
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

  return (
    <>
      <Separator id="formulario"/>
      <div className="espacio-titulos">
        <div className='d-flex flex-column justify-content-center align-items-center titulo titulo-1'><h2 className="color-titulo-formulario">¿Desea saber más sobre lo que pasa en el mundo?</h2></div>
        <div className='d-flex flex-column justify-content-center align-items-center titulo'><h2 className="color-titulo-formulario">¡Suscríbase y permanezca informado junto a nosotros!</h2></div>
      </div>
      <div className='d-flex flex-column justify-content-center align-items-center container-formulario'>
        <form onSubmit={handleSubmit(postFormUser)} className='d-flex flex-column justify-content-center align-items-center form-container texto-formulario'>
          <div className='d-flex justify-content-center justify-content-between item-registro'>
            <div className='d-flex flex-column'>
              <label for='nombreCompleto' className='form-label'>Nombre/s: </label>
              <input type='text' className='form-control items-pequeños' id='nombreCompleto' placeholder='Nombre completo' required 
                {...register("nombre",{
                    pattern:/[a-zA-Z]+/gm
                })}
              />
            </div>
            <div className='d-flex flex-column'>
              <label for='apellidoCompleto' className='form-label'>Apellido/s: </label>
              <input type='text' className='form-control items-pequeños' id='apellidoCompleto' placeholder='Apellido completo' required 
                {...register("apellido",{
                  pattern:/[a-zA-Z]+/gm
                })}
              />
            </div>
          </div>
          <div className='item-registro padding-items flex-column'>
            <label for='email' className='form-label'>E-mail: </label>
            <input type='email' className='form-control' id='email' placeholder='correoelectronico@gmail.com' required {...register("email", {
                        pattern:/[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/g
                      })}
            />
          </div>
          <div className='d-flex justify-content-start item-registro flex-column'>
            <label for='numeroTel' className='form-label'>Celular: </label>
            <input type='text' className='form-control items-pequeños' id='numeroTel' placeholder='N° de telefono' required {...register("telefono", {
                        pattern:/[0-9]+/g
                      })}
            />
          </div>
          <div className="boton-registro">
            <button type="submit" className='btn btn-primary texto-formulario'>Suscribirse</button>
          </div>
        </form>
      </div>
    </>
  );
};

export default FormUser;
