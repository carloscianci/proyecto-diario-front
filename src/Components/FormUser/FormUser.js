import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './formUser.css'

const FormUser = () => {
  return (
    <>
      <div className='d-flex flex-column justify-content-center align-items-center titulo titulo-1'><h2>¿Desea saber más sobre lo que pasa en el mundo?</h2></div>
      <div className='d-flex flex-column justify-content-center align-items-center titulo titulo-2'><h2>Suscríbase y permanezca informado junto a nosotros!</h2></div>
      <div className='d-flex flex-column justify-content-center align-items-center container-formulario'>
        <form className='d-flex flex-column justify-content-center align-items-center form-container'>
          <div className='d-flex justify-content-center'>
            <div className='item-registro'>
              <label for='nombreCompleto' className='form-label'>Nombre/s: </label>
              <input type='text' className='form-control' id='nombreCompleto' placeholder='Nombre completo' />
            </div>
            <div className='item-registro'>
              <label for='apellidoCompleto' className='form-label'>Apellido/s: </label>
              <input type='text' className='form-control' id='apellidoCompleto' placeholder='Apellido completo' />
            </div>
          </div>
          <div className='item-registro'>
            <label for='email' className='form-label'>E-mail: </label>
            <input type='email' className='form-control' id='email' placeholder='correoelectronico@example.com' />
          </div>
          <div className='item-registro'>
            <label for='numeroTel' className='form-label'>Celular: </label>
            <input type='text' className='form-control' id='numeroTel' placeholder='N° de telefono' />
          </div>
          <div>
            <button type='submit' className='btn btn-primary boton-registro'>Suscribirse</button>
          </div>
        </form>
      </div>
      
    </>
  );
};

export default FormUser;
