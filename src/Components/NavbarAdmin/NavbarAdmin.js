import React from 'react';
import { Link } from 'react-router-dom';
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
                            <Link className="nav-link fs-5" to="/adminNoticias">Noticias  </Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link fs-5" to="/adminSuscrip">Suscripciones  </Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link fs-5" to="/adminUsuarios">Usuarios  </Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link bi bi-box-arrow-left fs-5" to="/"> </Link>
                        </li>
                    </ul>
                </div>
            </nav>
        </div>
    );
};

export default NavbarAdmin;