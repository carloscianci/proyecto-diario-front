import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './navbarAdmin.css'

const NavbarAdmin = () => {
    return (
        <div className='color_navbar'>
            <nav className="navbar navbar-expand-lg navbar-dark color_navbar alto_navbar">
                <a className="navbar-brand px-2 fs-3" href="/#">RollingDiario</a>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse color_navbar" id="navbarNav">
                    <ul className="navbar-nav">
                        <li className="nav-item active">
                            <a className="nav-link fs-5" href="adminNoticias">Noticias </a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link fs-5" href="adminSuscrip">Suscripciones </a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link fs-5" href="adminUsuarios">Usuarios </a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link bi bi-box-arrow-left fs-5" href="/#"> </a>
                        </li>
                    </ul>
                </div>
            </nav>
        </div>
    );
};

export default NavbarAdmin;