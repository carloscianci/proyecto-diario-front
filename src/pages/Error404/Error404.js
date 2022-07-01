import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './error404.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

const Error404 = () =>{
  return(
    <>
      <section className='container-error404 d-flex justify-content-center align-items-center'>
        <div className=''>
          <h1>ERROR404!!</h1>
          <h2>
            A causa de un error en nuestros servidores no podremos brindarle nueva información.
            Intente de nuevo más tarde.
          </h2>
        </div>
      </section>
    </>
  );
}

export default Error404;