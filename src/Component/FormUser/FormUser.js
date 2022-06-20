const FormUser = () => {
  return(
    <>
      <section className="container d-flex justify-content-center">
        <div className="d-flex container flex-column justify-content-center size">
          <div className="item-registro">
            <label for="nombreCompleto" className="form-label">Nombre/s: </label>
            <input type="text" className="form-control" id="nombreCompleto" placeholder="" />
          </div>
          <div className="item-registro">
            <label for="apellidoCompleto" className="form-label">Apellido/s: </label>
            <input type="text" className="form-control" id="apellidoCompleto" placeholder="" />
          </div>
          <div className="item-registro">
            <label for="email" className="form-label">Email address: </label>
            <input type="email" className="form-control" id="email" placeholder="name@example.com" />
          </div>
          <div className="item-registro">
            <label for="nombreCompleto" className="form-label">Celular: </label>
            <input type="text" className="form-control" id="nombreCompleto" placeholder="N° de telefono" />
          </div>
        </div>
      </section>
    </>
  );
}

export default FormUser;