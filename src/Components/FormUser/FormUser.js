import React from 'react';
import './formUser.css'

const FormUser = () => {
  return (
    <>
      <section className="container d-flex justify-content-center">
        <div className="d-flex container flex-column justify-content-center size">
          <div className="item-registro">
            <label for="nombreCompleto" className="form-label">Nombre: </label>
            <input type="text" className="form-control" id="nombreCompleto" placeholder="" />
          </div>
          <div className="item-registro">
            <label for="email" className="form-label">Email address: </label>
            <input type="email" className="form-control" id="email" placeholder="name@example.com" />
          </div>
          <div className="item-registro">
            <label for="contraseña" className="form-label">Contraseña: </label>
            <input type="password" className="form-control" id="contraseña" placeholder="contraseña" />
          </div>
          <div className="item-registro">
            <label for="contraseña" className="form-label">Confirmar contraseña: </label>
            <input type="password" className="form-control" id="contraseña" placeholder="contraseña" />
          </div>
        </div>
      </section>
    </>
  );
};

export default FormUser;
