import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import {Modal, ModalBody, ModalHeader, ModalFooter} from 'reactstrap';
import axios from 'axios';
import { useState, useEffect } from 'react';

const Admin = () => {
    const [noticias, setNoticias] = useState([])
    const [modalEditar, setModalEditar] = useState(false)
    const [modalEliminar, setModalEliminar] = useState(false)
    const [seleccionado, setSeleccionado] = useState({});

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
        <div>
            <h1>ADMINISTRADOR DE NOTICIAS</h1>
            
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
                                    <button className="btn btn-primary mx-1 glyphicon glyphicon-pencil" onClick={()=>seleccionarNoticia(elemento, 'Editar')}>Editar</button>
                                    <button className="btn btn-danger mx-1 glyphicon glyphicon-trash" onClick={()=>seleccionarNoticia(elemento, 'Eliminar')}>Borrar</button>
                                    {/* <button className="btn btn-info mx-1 glyphicon glyphicon-plus"></button> */}
                                    
                                </td>
                            </tr>
                        ))
                    }
                </tbody>
            </table>
            
            <Modal isOpen={modalEditar}>
                <ModalHeader>
                    <div>
                        <h3>Editar noticia</h3>
                    </div>
                </ModalHeader>
                <ModalBody>
                    <div className="form-group">
                        <label>ID</label>
                        <input className="form-control" readOnly type="text" name="id"value={seleccionado && seleccionado._id}/>
                        <br />

                        <label>Sección</label>
                        <select class="form-select" aria-label="Seleccionar" value={seleccionado && seleccionado.idtiponoticia}>
                            <option value="1">Política</option>
                            <option value="2">Economía</option>
                            <option value="3">Policiales</option>
                            <option value="4">Espectáculo</option>
                            <option value="5">Deportes</option>
                        </select>   
                        <br />

                        <label>Título</label>
                        <input className="form-control" type="text" name="titulo" value={seleccionado && seleccionado.titulo}                    
                        onChange={handleChange}
                        />
                        <br />

                        <label>Resumen</label>
                        <textarea className="form-control" name="resumen" rows="3" value={seleccionado && seleccionado.resumen}
                        />
                        <br />

                        <label>URL Imagen</label>
                        <input className="form-control" type="text" name="urlImagen" value={seleccionado && seleccionado.urlImagen}
                        //onChange={handleChange}
                        />
                        <br />
                    </div>
                </ModalBody>
                <ModalFooter>
                    {/* <button className="btn btn-primary" onClick={()=>editar()}> */}
                    <button className="btn btn-primary">Actualizar</button>
                    <button className="btn btn-danger" onClick={()=>setModalEditar(false)}>Cancelar</button>
                </ModalFooter>
            </Modal>

            <Modal isOpen={modalEliminar}>
                <ModalBody>
                    Estás Seguro que deseas eliminar la noticia "{seleccionado && seleccionado.titulo}"? 
                </ModalBody>
                <ModalFooter>
                    {/* <button className="btn btn-danger" onClick={()=>eliminar()}>Sí</button> */}
                    <button className="btn btn-danger">Sí</button>
                    <button className="btn btn-secondary" onClick={()=>setModalEliminar(false)}>No</button>
                </ModalFooter>
            </Modal>

        </div>
    )
}

export default Admin;
