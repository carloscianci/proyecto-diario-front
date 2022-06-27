import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import {Modal, ModalBody, ModalHeader, ModalFooter} from 'reactstrap';
import axios from 'axios';
import { useState, useEffect } from 'react';
import './adminNoticias.css'

const AdminNoticias = () => {
    const [noticias, setNoticias] = useState([])
    const [modalEditar, setModalEditar] = useState(false)
    const [modalEliminar, setModalEliminar] = useState(false)
    const [modalInsertar, setModalInsertar] = useState(false)
    const [seleccionado, setSeleccionado] = useState({
        _id: "",
        idtiponoticia: 0,
        titulo: "",
        resumen: "",
        texto: "",
        urlImagen: ""
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

    const getNoticias = async () => {
        const respNoticias = await axios.get('http://localhost:8000/noticia')

        if (respNoticias.data.resultado) 
            setNoticias(respNoticias.data.listaNoticias)
        else 
            setNoticias([])
    }

    useEffect(() => {
        getNoticias()
    }, [])  

    const seleccionarNoticia = (elemento, caso) => {
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
            const updateNoticia = await axios.put('http://localhost:8000/noticia',{
                "idnoticia" : seleccionado._id,
                "idtiponoticia" : seleccionado.idtiponoticia,
                "titulo" : seleccionado.titulo,
                "resumen" : seleccionado.resumen,
                "texto" : "",
                "urlImagen" : seleccionado.urlImagen,
                "access_token" : getToken()
            })
    
            if (updateNoticia) {
                if (updateNoticia.data.resultado) {
                    setModalEditar(false);
                    window.location.reload()
                } else {
                    alert(updateNoticia.data.message)
                }
            }  else {
                alert("ERROR!!! No se pudo actualizar la noticia.")    
            }
        } catch (error) {
            console.log(error)
        }
    }

    const eliminar = async() => {
        try {
            const deleteNoticia = await axios.delete('http://localhost:8000/noticia',{data : {
                "idnoticia" : seleccionado._id,
                "access_token" : getToken()
            }})

            if (deleteNoticia) {
                if (deleteNoticia.data.resultado) {
                    setModalEditar(false);
                    window.location.reload()
                } else {
                    alert(deleteNoticia.data.message)
                }
            }  else {
                alert("ERROR!!! No se pudo actualizar la noticia.")    
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
            const insertNoticia = await axios.post('http://localhost:8000/noticia',{
                "idtiponoticia" : seleccionado.idtiponoticia,
                "titulo" : seleccionado.titulo,
                "resumen" : seleccionado.resumen,
                "texto" : "",
                "urlImagen" : seleccionado.urlImagen,
                "access_token" : getToken()
            })
    
            if (insertNoticia) {
                if (insertNoticia.data.resultado) {
                    setModalInsertar(false);
                    window.location.reload()
                } else {
                    alert(insertNoticia.data.message)
                }
            }  else {
                alert("ERROR!!! No se pudo agregar la noticia.")    
            }
        } catch (error) {
            console.log(error)
        }
    }
    
    const traduceNoticia = (idtipo) => {
        var nombreTraducido = ""
        switch (idtipo) {
            case 1:
                nombreTraducido = "Política"
                break;
            case 2:
                nombreTraducido = "Economía"
                break;
            case 3:
                nombreTraducido = "Policiales"
                break;
            case 4:
                nombreTraducido = "Espectáculo"
                break;
            case 5:
                nombreTraducido = "Deportes"
                break;
            default:
                break;
        }
        return nombreTraducido
    }

    return (
        <div className='container-fluid'>
            <h1>ADMINISTRADOR DE NOTICIAS</h1>
            <button className='btn btn-success btnFixed bi bi-plus-lg' onClick={()=>abrirInsertar()}></button>
            <table className='table'>
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>Sección</th>
                        <th>Título</th>
                        <th>Resumen</th>
                        <th>URL Imagen</th>
                        <th></th>
                    </tr>
                </thead>
                <tbody>
                    {
                        noticias.map(elemento =>( 
                            <tr>
                                <td>{elemento._id}</td>
                                <td>{traduceNoticia(elemento.idtiponoticia)}</td>
                                <td>{elemento.titulo}</td>
                                <td>{elemento.resumen}</td>
                                <td>{elemento.urlImagen}</td>
                                <td>
                                    <button className="btn btn-primary mx-1 bi bi-pencil" onClick={()=>seleccionarNoticia(elemento, 'Editar')}></button>
                                    <button className="btn btn-danger mx-1 bi bi-trash" onClick={()=>seleccionarNoticia(elemento, 'Eliminar')}></button>
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
                            <h3>Editar noticia</h3>
                        </div>
                    </ModalHeader>
                    <ModalBody>
                        <div className="form-group">
                            <label>ID</label>
                            <input className="form-control" readOnly type="text" name="id" value={seleccionado && seleccionado._id}/>
                            <br />

                            <label>Sección</label>
                            <select class="form-select" aria-label="Seleccionar" name="idtiponoticia" required onChange={handleChange}>
                                <option selected>{seleccionado && traduceNoticia(seleccionado.idtiponoticia)}</option>
                                <option value="1">Política</option>
                                <option value="2">Economía</option>
                                <option value="3">Policiales</option>
                                <option value="4">Espectáculo</option>
                                <option value="5">Deportes</option>
                            </select>   
                            <br />

                            <label>Título</label> 
                            <input className="form-control" type="text" name="titulo" required value={seleccionado && seleccionado.titulo}                    
                            onChange={handleChange}
                            />
                            <br />

                            <label>Resumen</label>
                            <textarea className="form-control" name="resumen" rows="3" required value={seleccionado && seleccionado.resumen} 
                            onChange={handleChange}
                            />
                            <br />

                            <label>URL Imagen</label>
                            <input className="form-control" type="text" name="urlImagen" required value={seleccionado && seleccionado.urlImagen}
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
                    Estás Seguro que deseas eliminar la noticia "{seleccionado && seleccionado.titulo}"? 
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
                        <h3>Agregar Noticia</h3>
                    </div>
                    </ModalHeader>
                    <ModalBody>
                        <div className="form-group">
                            <label>ID</label>
                            <input className="form-control" readOnly type="text" name="id" value=""/>
                            <br />

                            <label>Sección</label>
                            <select class="form-select" aria-label="Seleccionar" name="idtiponoticia" required onChange={handleChange}>
                                <option value="1">Política</option>
                                <option value="2">Economía</option>
                                <option value="3">Policiales</option>
                                <option value="4">Espectáculo</option>
                                <option value="5">Deportes</option>
                            </select>   
                            <br />

                            <label>Título</label> 
                            <input className="form-control" type="text" name="titulo" required value={seleccionado ? seleccionado.titulo : ''} onChange={handleChange}/>
                            <br />

                            <label>Resumen</label>
                            <textarea className="form-control" name="resumen" rows="3" required value={seleccionado ? seleccionado.resumen : ''} onChange={handleChange}/>
                            <br />

                            <label>URL Imagen</label>
                            <input className="form-control" type="text" name="urlImagen" required value={seleccionado ? seleccionado.urlImagen : ''} onChange={handleChange}/>
                            <br />
                        </div>
                    </ModalBody>
                    <ModalFooter>
                        <button className="btn btn-primary" type="submit">Insertar</button>
                        <button className="btn btn-danger" onClick={()=>setModalInsertar(false)}>Cancelar</button>
                    </ModalFooter>
                </form>
            </Modal>
        </div>
    )
}

export default AdminNoticias;
