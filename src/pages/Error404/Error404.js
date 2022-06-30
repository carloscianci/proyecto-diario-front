import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './error404.css'

const Error404 = () =>{
  return(
    <>
      <section className='container-error404 d-flex justify-content-center align-items-center'>
        <div className=''>
          <h1>ERROR404!!</h1>
          <h2>
            A causa de un error en nuestros servidores no podremos brindarle nueva información.
            Lamentamos esto y esperamos que vuelva pronto.
          </h2>
        </div>
      </section>
    </>
  );
}

export default Error404;