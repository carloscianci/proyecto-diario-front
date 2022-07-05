import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './error404.css';
// import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { Link } from 'react-router-dom';

const Error404 = () =>{
  return(
    <>
      <section className='container-error404 d-flex flex-column align-items-center'>
        <div className='div-texto-error d-flex flex-column align-items-center'>
          <h1 className='margin-titulo-pc fuente-titulo-error-pc fuente-titulo-error-mobile d-flex flex-column align-items-center margin-titulo-mobile'>ERROR </h1>
          <h1 className='fuente-titulo-error-pc fuente-titulo-error-mobile d-flex flex-column align-items-center'>404</h1>
        </div>
        
        <div className='fuente-texto-error-mobile d-flex flex-column align-items-center'>
          <h3 className='texto-mobile'>
            No se ha podido encontrar la página que está buscando.
          </h3>
          <h3 className='texto-mobile'>
            Por favor, intente de nuevo más tarde.
          </h3>
        </div>

        <div className="boton-retornar-principal">
          <Link className="btn btn-primary" to="/">Volver a la página principal</Link>
        </div>

      </section>
    </>
  );
}

export default Error404;