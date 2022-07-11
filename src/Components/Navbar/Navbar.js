import React from 'react';
import { Link } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import './navbar.css'

const Navbar = () => {
    return (
        <div className='color_navbar'>
            <nav className="navbar navbar-expand-lg navbar-dark color_navbar alto_navbar">
                <a className="navbar-brand px-2 fs-3" href="/#">RollingDiario</a>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse color_navbar ms-auto" id="navbarNav">
                    <ul className="navbar-nav w-100">
                        <li className="nav-item active">
                            <a className="nav-link fs-5" href="#sPolitica">Política </a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link fs-5" href="#sEconomia">Economía </a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link fs-5" href="#sPoliciales">Policiales </a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link fs-5" href="#sEspectaculos">Espectáculos </a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link fs-5" href="#sDeportes">Deportes </a>
                        </li>
                    </ul>
                    <a className="nav-item justify-content-end">
                        <Link className="nav-link fa-solid fa-user-group color_icono fs-3 " title='Sección Administrador' to="LoginAdmin"> </Link>
                    </a>
                </div>
            </nav>
        </div>
    );
};

export default Navbar;