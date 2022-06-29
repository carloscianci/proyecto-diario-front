import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './navbarAdmin.css'

const NavbarAdmin = () => {
    return (
        <div className='bg-dark'>
            <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
                <a className="navbar-brand px-2" href="/#">RollingDiario</a>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarNav">
                    <ul className="navbar-nav">
                        <li className="nav-item active">
                            <a className="nav-link" href="adminNoticias">Noticias </a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="adminSuscrip">Suscripciones </a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="adminUsuarios">Usuarios </a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="/#">Salir</a>
                        </li>
                    </ul>
                </div>
            </nav>
        </div>
    );
};

export default NavbarAdmin;