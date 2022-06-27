import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import {Modal, ModalBody, ModalHeader, ModalFooter} from 'reactstrap';
import axios from 'axios';
import { useState, useEffect } from 'react';
import './adminSuscripciones.css'

const AdminSuscripciones = () => {
    const [suscripciones, setSuscripciones] = useState([])
    const [modalEditar, setModalEditar] = useState(false)
    const [modalEliminar, setModalEliminar] = useState(false)
    const [modalInsertar, setModalInsertar] = useState(false)
    const [seleccionado, setSeleccionado] = useState({
        _id: "",
        nombre: "",
        apellido: "",
        email: "",
        telefono: ""
    });

    ////// Borrar cuando esté listo el Login
    const autenticar = async() => {
        const resultado = await axios.post('http://localhost:8000/usuario/login',{
            "email" : "administrador-diario@gmail.com",
            "clave" : "ad1234"
        })
        if (resultado && resultado.data.resultado) {
            localStorage.setItem("access_token", resultado.data.token)
        }

    }
    autenticar()
    /////////////////////////////////////////

    const getSuscripciones = async () => {
        const respSuscripciones = await axios.post('http://localhost:8000/suscripcion/listaSuscripciones', {
            "access_token" : getToken() 
        })

        if (respSuscripciones.data.resultado) 
            setSuscripciones(respSuscripciones.data.listaSuscripciones)
        else 
            setSuscripciones([])
    }

    useEffect(() => {
        getSuscripciones()
    }, [])  

    const seleccionarSuscripcion = (elemento, caso) => {
        setSeleccionado(elemento);
        (caso==='Editar')?setModalEditar(true):setModalEliminar(true)
    }

    const handleChange=e=>{
        const {name, value}=e.target;
        setSeleccionado((prevState)=>({
          ...prevState,
          [name]: value
        }));
    }

    const getToken = () => {
        const datoToken = localStorage.getItem("access_token")
        console.log(datoToken)
        return datoToken
    }

    const editar = async() => {
        try {
            const updateSuscripcion = await axios.put('http://localhost:8000/suscripcion',{
                "idsuscripcion" : seleccionado._id,
                "nombre" : seleccionado.nombre,
                "apellido" : seleccionado.apellido,
                "email" : seleccionado.email,
                "telefono" : seleccionado.telefono,
                "access_token" : getToken()
            })
    
            if (updateSuscripcion) {
                if (updateSuscripcion.data.resultado) {
                    setModalEditar(false);
                    window.location.reload()
                } else {
                    alert(updateSuscripcion.data.message)
                }
            }  else {
                alert("ERROR!!! No se pudo actualizar la suscripción.")    
            }
        } catch (error) {
            console.log(error)
        }
    }

    const eliminar = async() => {
        try {
            const deleteSuscripcion = await axios.delete('http://localhost:8000/suscripcion',{data : {
                "idsuscripcion" : seleccionado._id,
                "access_token" : getToken()
            }})

            if (deleteSuscripcion) {
                if (deleteSuscripcion.data.resultado) {
                    setModalEditar(false);
                    window.location.reload()
                } else {
                    alert(deleteSuscripcion.data.message)
                }
            }  else {
                alert("ERROR!!! No se pudo actualizar la suscripción.")    
            }
        } catch (error) {
            console.log(error)
        }
    }

    return (
        <div className='container-fluid'>
            <h1>ADMINISTRADOR DE SUSCRIPCIONES</h1>

            <table className='table'>
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>Nombre</th>
                        <th>Apellido</th>
                        <th>Email</th>
                        <th>Teléfono</th>
                        <th></th>
                    </tr>
                </thead>
                <tbody>
                    {
                        suscripciones.map(elemento =>( 
                            <tr>
                                <td>{elemento._id}</td>
                                <td>{elemento.nombre}</td>
                                <td>{elemento.apellido}</td>
                                <td>{elemento.email}</td>
                                <td>{elemento.telefono}</td>
                                <td>
                                    <button className="btn btn-primary mx-1 bi bi-pencil" onClick={()=>seleccionarSuscripcion(elemento, 'Editar')}></button>
                                    <button className="btn btn-danger mx-1 bi bi-trash" onClick={()=>seleccionarSuscripcion(elemento, 'Eliminar')}></button>
                                </td>
                            </tr>
                        ))
                    }
                </tbody>
            </table>
            
            <Modal isOpen={modalEditar}>
                <form onSubmit={() => editar()}>
                    <ModalHeader>
                        <div>
                            <h3>Editar suscripción</h3>
                        </div>
                    </ModalHeader>
                    <ModalBody>
                        <div className="form-group">
                            <label>ID</label>
                            <input className="form-control" readOnly type="text" name="id" value={seleccionado && seleccionado._id}/>
                            <br />
                            
                            <label>Nombre</label> 
                            <input className="form-control" type="text" name="nombre" required value={seleccionado && seleccionado.nombre}                    
                            onChange={handleChange}
                            />
                            <br />

                            <label>Apellido</label>
                            <input className="form-control" type="text" name="apellido" required value={seleccionado && seleccionado.apellido}                    
                            onChange={handleChange}
                            />
                            <br />

                            <label>Email</label>
                            <input className="form-control" type="email" name="email" required value={seleccionado && seleccionado.email}                    
                            onChange={handleChange}
                            />
                            <br />

                            <label>Teléfono</label>
                            <input className="form-control" type="text" name="telefono" required value={seleccionado && seleccionado.telefono}
                            onChange={handleChange}
                            />
                            <br />
                        </div>
                    </ModalBody>
                    <ModalFooter>
                        <button className="btn btn-primary" type="submit">Actualizar</button>
                        <button className="btn btn-danger" onClick={()=>setModalEditar(false)}>Cancelar</button>
                    </ModalFooter>
                </form>
            </Modal>

            <Modal isOpen={modalEliminar}>
                <ModalBody>
                    Estás Seguro que deseas eliminar la suscripción de  "{seleccionado && seleccionado.nombre}"? 
                </ModalBody>
                <ModalFooter>
                    <button className="btn btn-danger" onClick={()=>eliminar()}>Sí</button>
                    <button className="btn btn-secondary" onClick={()=>setModalEliminar(false)}>No</button>
                </ModalFooter>
            </Modal>

        </div>
    )
}

export default AdminSuscripciones;