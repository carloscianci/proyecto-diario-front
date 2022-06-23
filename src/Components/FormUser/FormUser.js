const FormUser = () => {
  return(
    <>
      <form className="container d-flex justify-content-center">
        <div className="d-flex container flex-column justify-content-center size">
          <div className="item-registro">
            <label for="nombreCompleto" className="form-label">Nombre/s: </label>
            <input type="text" className="form-control" id="nombreCompleto" placeholder="Nombre completo" />
          </div>
          <div className="item-registro">
            <label for="apellidoCompleto" className="form-label">Apellido/s: </label>
            <input type="text" className="form-control" id="apellidoCompleto" placeholder="Apellido completo" />
          </div>
        </div>
        <div className="item-registro">
          <label for="email" className="form-label">E-mail: </label>
          <input type="email" className="form-control" id="email" placeholder="correoelectronico@example.com" />
        </div>
        <div className="item-registro">
          <label for="numeroTel" className="form-label">Celular: </label>
          <input type="text" className="form-control" id="numeroTel" placeholder="N° de telefono" />
        </div>
        <div>
          <button type="submit" class="btn btn-primary">Sign in</button>
        </div>
      </form>
    </>
  );
}

export default FormUser;