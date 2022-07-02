import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import {Modal, ModalBody, ModalHeader, ModalFooter} from 'reactstrap';
import axios from 'axios';
import { useState, useEffect } from 'react';
import './adminUsuarios.css'
import NavbarAdmin from '../../Components/NavbarAdmin/NavbarAdmin';

const AdminUsuarios = () => {

    const [usuarios, setUsuarios] = useState([])
    const [modalEditar, setModalEditar] = useState(false)
    const [modalEliminar, setModalEliminar] = useState(false)
    const [modalInsertar, setModalInsertar] = useState(false)
    const [seleccionado, setSeleccionado] = useState({
        _id: "",
        nombre: 0,
        email: "",
        clave: "",
        clave1: "",
        clave2: "",
        principal: 0
    });

    const url = process.env.REACT_APP_URL_API

    const getUsuarios = async () => {
        const respUsuarios = await axios.post(url + '/usuario/listaUsuarios',{
            "access_token" : getToken()
        })
        
        if (respUsuarios.data.resultado) 
            setUsuarios(respUsuarios.data.listaUsuarios)
        else 
            setUsuarios([])
    }

    useEffect(() => {
        getUsuarios()
    }, [])  

    const seleccionarUsuario = (elemento, caso) => {
        elemento.clave1 = ""
        elemento.clave2 = ""
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
        return datoToken
    }

    const editar = async() => {
        try {
            if(seleccionado.clave1 === seleccionado.clave2 && seleccionado.clave1.length > 0) {
                const updateUsuario = await axios.put(url + '/usuario',{
                    "idusuario" : seleccionado._id,
                    "nombre" : seleccionado.nombre,
                    "email" : seleccionado.email,
                    "clave" : seleccionado.clave1,
                    "principal" : seleccionado.principal,
                    "access_token" : getToken()
                })
        
                if (updateUsuario) {
                    if (updateUsuario.data.resultado) {
                        setModalEditar(false);
                        window.location.reload()
                    } else {
                        alert(updateUsuario.data.message)
                    }
                }  else {
                    alert("ERROR!!! No se pudo actualizar el usuario.")    
                }
            } else {
                alert("ERROR!!! Las contraseñas no coinciden.")            
            }
        } catch (error) {
            console.log(error)
        }
    }

    const eliminar = async() => {
        try {
            const deleteUsuario = await axios.delete(url + '/usuario',{data : {
                "idusuario" : seleccionado._id,
                "access_token" : getToken()
            }})

            if (deleteUsuario) {
                if (deleteUsuario.data.resultado) {
                    setModalEditar(false);
                    window.location.reload()
                } else {
                    alert(deleteUsuario.data.message)
                }
            }  else {
                alert("ERROR!!! No se pudo eliminar el usuario.")    
            }
        } catch (error) {
            console.log(error)
        }
    }

    const abrirInsertar = () => {
        setSeleccionado(null)
        setModalInsertar(true)
    }

    const insertar = async () => {
        try {
            if(seleccionado.clave1 === seleccionado.clave2 && seleccionado.clave1.length > 0) {
                const insertUsuario = await axios.post(url + '/usuario',{
                    "nombre" : seleccionado.nombre,
                    "email" : seleccionado.email,
                    "clave" : seleccionado.clave1,
                    "principal" : 0,
                    "access_token" : getToken()
                })
        
                if (insertUsuario) {
                    if (insertUsuario.data.resultado) {
                        setModalInsertar(false);
                        window.location.reload()
                    } else {
                        alert(insertUsuario.data.message)
                    }
                }  else {
                    alert("ERROR!!! No se pudo agregar el usuario.")    
                }
            } else {
                alert("ERROR!!! Las contraseñas no coinciden.")            
            }
        } catch (error) {
            console.log(error)
        }
    }
    
    return (
        <>
            <NavbarAdmin />
               
            <div className='container-fluid'>
                <h1>ADMINISTRADOR DE USUARIOS</h1>
                <button className='btn btn-success btnFixed bi bi-plus-lg' onClick={()=>abrirInsertar()}></button>
                <table className='table'>
                    <thead>
                        <tr>
                            <th>ID</th>
                            <th>Nombre</th>
                            <th>Email</th>
                            <th></th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            usuarios.map(elemento =>( 
                                <tr>
                                    <td>{elemento._id}</td>
                                    <td>{elemento.nombre}</td>
                                    <td>{elemento.email}</td>
                                    <td>
                                        <button className="btn btn-primary mx-1 bi bi-pencil" onClick={()=>seleccionarUsuario(elemento, 'Editar')}></button>
                                        <button className="btn btn-danger mx-1 bi bi-trash" onClick={()=>seleccionarUsuario(elemento, 'Eliminar')}></button>
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
                                <h3>Editar Usuario</h3>
                            </div>
                        </ModalHeader>
                        <ModalBody>
                            <div className="form-group">
                                <label>ID</label>
                                <input className="form-control" readOnly type="text" name="id" value={seleccionado && seleccionado._id}/>
                                <br />

                                <label>Nombre</label> 
                                <input className="form-control" type="text" name="nombre" readOnly={seleccionado && seleccionado.principal===1} required value={seleccionado && seleccionado.nombre}                    
                                onChange={handleChange}/>
                                <br />

                                <label>Email</label>
                                <input className="form-control" type="email" name="email" readOnly={seleccionado && seleccionado.principal===1} required value={seleccionado && seleccionado.email}                    
                                onChange={handleChange}/>
                                <br />

                                <label>Contraseña</label>
                                <input className="form-control" type="password" name="clave1" required value={seleccionado && seleccionado.clave1}
                                onChange={handleChange}/>
                                <br />

                                <label>Repetir Contraseña</label>
                                <input className="form-control" type="password" name="clave2" required value={seleccionado && seleccionado.clave2}
                                onChange={handleChange}/>
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
                        Estás Seguro que deseas eliminar el usuario "{seleccionado && seleccionado.email}"? 
                    </ModalBody>
                    <ModalFooter>
                        <button className="btn btn-danger" onClick={()=>eliminar()}>Sí</button>
                        <button className="btn btn-secondary" onClick={()=>setModalEliminar(false)}>No</button>
                    </ModalFooter>
                </Modal>

                <Modal isOpen={modalInsertar}>
                    <form onSubmit={()=>insertar()}>
                        <ModalHeader>
                        <div>
                            <h3>Agregar Usuario</h3>
                        </div>
                        </ModalHeader>
                        <ModalBody>
                            <div className="form-group">
                                <label>ID</label>
                                <input className="form-control" readOnly type="text" name="id" value=""/>
                                <br />

                                <label>Nombre</label> 
                                <input className="form-control" type="text" name="nombre" required value={seleccionado ? seleccionado.nombre : ''}                    
                                onChange={handleChange}/>
                                <br />

                                <label>Email</label> 
                                <input className="form-control" type="email" name="email" required value={seleccionado ? seleccionado.email : ''}                    
                                onChange={handleChange}/>
                                <br />
                                
                                <label>Contraseña</label> 
                                <input className="form-control" type="password" name="clave1" required value={seleccionado ? seleccionado.clave1 : ''}                    
                                onChange={handleChange}/>
                                <br />

                                <label>Contraseña</label> 
                                <input className="form-control" type="password" name="clave2" required value={seleccionado ? seleccionado.clave2 : ''}                    
                                onChange={handleChange}/>
                                
                            </div>
                        </ModalBody>
                        <ModalFooter>
                            <button className="btn btn-primary" type='submit'>Insertar</button>
                            <button className="btn btn-danger" onClick={()=>setModalInsertar(false)}>Cancelar</button>
                        </ModalFooter>
                    </form>
                </Modal>
            </div>
        </>
    )
}

export default AdminUsuarios;
