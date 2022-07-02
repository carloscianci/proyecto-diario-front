import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import './formUser.css'
import { useForm } from "react-hook-form";
import axios from "axios";

const FormUser = () => {

  const { register, handleSubmit } = useForm()
  const url = REACT_APP_URL_API
  const postFormUser = async(dataForm, e) => {
    const resultsFU = await axios.post(rl + '/suscripcion',{
      "nombre" : dataForm.nombre,
      "apellido" : dataForm.apellido,
      "email" : dataForm.email,
      "telefono" : dataForm.telefono
    })
    // e.target.reset()
    if(resultsFU && resultsFU.data.resultado){
      alert('Se ha registrado con exito.')
    }else{
      
      alert(resultsFU.data.message)
    }
  }

  

  return (
    <>
      <div className='d-flex flex-column justify-content-center align-items-center titulo titulo-1'><h2>¿Desea saber más sobre lo que pasa en el mundo?</h2></div>
      <div className='d-flex flex-column justify-content-center align-items-center titulo titulo-2'><h2>Suscríbase y permanezca informado junto a nosotros!</h2></div>
      <div className='d-flex flex-column justify-content-center align-items-center container-formulario'>
        <form onSubmit={handleSubmit(postFormUser)} className='d-flex flex-column justify-content-center align-items-center form-container'>
          <div className='d-flex justify-content-center'>
            <div className='item-registro'>
              <label for='nombreCompleto' className='form-label'>Nombre/s: </label>
              <input type='text' className='form-control' id='nombreCompleto' placeholder='Nombre completo' required 
                {...register("nombre",{
                    pattern:/[a-zA-Z]+/gm
                })}
              />
            </div>
            <div className='item-registro'>
              <label for='apellidoCompleto' className='form-label'>Apellido/s: </label>
              <input type='text' className='form-control' id='apellidoCompleto' placeholder='Apellido completo' required 
                {...register("apellido",{
                  pattern:/[a-zA-Z]+/gm
                })}
              />
            </div>
          </div>
          <div className='item-registro'>
            <label for='email' className='form-label'>E-mail: </label>
            <input type='email' className='form-control' id='email' placeholder='correoelectronico@example.com' required {...register("email", {
                        pattern:/[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/g
                      })}
            />
          </div>
          <div className='item-registro'>
            <label for='numeroTel' className='form-label'>Celular: </label>
            <input type='text' className='form-control' id='numeroTel' placeholder='N° de telefono' required {...register("telefono", {
                        pattern:/[0-9]+/g
                      })}
            />
          </div>
          <div>
            <button type="submit" className='btn btn-primary boton-registro'>Suscribirse</button>
          </div>
        </form>
      </div>
    </>
  );
};

export default FormUser;
