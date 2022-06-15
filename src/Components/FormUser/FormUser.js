const FormUser = () => {
  return(
    <>
      <div class="mb-3">
        <label for="exampleFormControlInput1" class="form-label">Email address</label>
        <input type="email" class="form-control" id="exampleFormControlInput1" placeholder="name@example.com" />
      </div>
      <div class="mb-3">
        <label for="exampleFormControlInput1" class="form-label">Email address</label>
        <input type="email" class="form-control" id="exampleFormControlInput1" placeholder="name@example.com" />
      </div>
      <div class="mb-3">
        <label for="contraseña" class="form-label">Contraseña: </label>
        <input type="password" class="form-control" id="contraseña" placeholder="name@example.com" />
      </div>
    </>
  );
}

export default FormUser;