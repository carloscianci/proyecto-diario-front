import React from 'react';
import {Modal, ModalBody, ModalHeader, ModalFooter} from 'reactstrap';
import axios from 'axios';
import { useState, useEffect } from 'react';

const Admin = () => {
    const [noticias, setNoticias] = useState([])
    const [modalEditar, setModalEditar] = useState(false)

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
    
    return (
        <div>
            <h1>ADMINISTRADOR DE NOTICIAS</h1>
            <button color='primary'>Insertar Noticia</button>
            <a href="/#">GO BACK</a>
            <table className='table'>
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>Id Sección</th>
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
                                <td>{elemento.idtiponoticia}</td>
                                <td>{elemento.titulo}</td>
                                <td>{elemento.resumen}</td>
                                <td>{elemento.urlImagen}</td>
                                <td>
                                    <a href="/#" class="btn btn-primary">
                                        <span class="glyphicon glyphicon-pencil"></span> 
                                    </a> {"  "}
                                    <a href="/#" class="btn btn-danger">
                                        <span class="glyphicon glyphicon-trash"></span> 
                                    </a> {"  "}
                                    <a href="/#" class="btn btn-info">
                                        <span class="glyphicon glyphicon-plus"></span> 
                                    </a>
                                </td>
                            </tr>
                        ))
                    }
                    {
                        noticias.map(elemento =>( 
                            <tr>
                                <td>{elemento._id}</td>
                                <td>{elemento.idtiponoticia}</td>
                                <td>{elemento.titulo}</td>
                                <td>{elemento.resumen}</td>
                                <td>{elemento.urlImagen}</td>
                                <td>
                                    <a href="#" class="btn btn-primary">
                                        <span class="glyphicon glyphicon-pencil"></span> 
                                    </a> {"  "}
                                    <a href="#" class="btn btn-danger">
                                        <span class="glyphicon glyphicon-trash"></span> 
                                    </a> {"  "}
                                    <a href="#" class="btn btn-info">
                                        <span class="glyphicon glyphicon-plus"></span> 
                                    </a>
                                </td>
                            </tr>
                        ))
                    }
                    {
                        noticias.map(elemento =>( 
                            <tr>
                                <td>{elemento._id}</td>
                                <td>{elemento.idtiponoticia}</td>
                                <td>{elemento.titulo}</td>
                                <td>{elemento.resumen}</td>
                                <td>{elemento.urlImagen}</td>
                                <td>
                                    <a href="#" class="btn btn-primary">
                                        <span class="glyphicon glyphicon-pencil"></span> 
                                    </a> {"  "}
                                    <a href="#" class="btn btn-danger">
                                        <span class="glyphicon glyphicon-trash"></span> 
                                    </a> {"  "}
                                    <a href="#" class="btn btn-info">
                                        <span class="glyphicon glyphicon-plus"></span> 
                                    </a>
                                </td>
                            </tr>
                        ))
                    }
                </tbody>
            </table>
            
            {/* <Modal isOpen={modalEditar}>
            <ModalHeader>
                <div>
                    <h3>Editar noticia</h3>
                </div>
            </ModalHeader>
            <ModalBody>
                <div className="form-group">
                    <label>ID</label>
                    <input
                        className="form-control"
                        readOnly
                        type="text"
                        name="id"
                        value={paisSeleccionado && paisSeleccionado.id}
                    />
                    <br />

                    <label>País</label>
                    <input
                    className="form-control"
                    type="text"
                    name="nombre"
                    value={paisSeleccionado && paisSeleccionado.nombre}
                    onChange={handleChange}
                    />
                    <br />

                    <label>Minutos</label>
                    <input
                    className="form-control"
                    type="text"
                    name="minutos"
                    value={paisSeleccionado && paisSeleccionado.minutos}
                    onChange={handleChange}
                    />
                    <br />
                </div>
        </ModalBody>
        <ModalFooter>
          <button className="btn btn-primary" onClick={()=>editar()}>
            Actualizar
          </button>
          <button
            className="btn btn-danger"
            onClick={()=>setModalEditar(false)}
          >
            Cancelar
          </button>
        </ModalFooter>
      </Modal> */}

        </div>
    )
}

export default Admin;
