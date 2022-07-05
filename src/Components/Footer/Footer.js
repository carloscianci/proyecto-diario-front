import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './Footer.css'
import { Link } from "react-router-dom"

const Footer = () => {
    return (
        <footer className="site-footer">
            <div className="container">
                <div className="row">
                    <div className="col-sm-12 col-md-6" id="aboutUs">
                        <h6>Rolling Diario</h6>
                        <p className="text-justify">Somos un diario independiente, que busca mantenerte informado con todas las novedades provinciales, nacionales e internacionales. Nuestro objetivo es convertirnos en el diario preferido de los Tucumanos. </p>
                    </div>

                    <div className="col-xs-6 col-md-3">
                        <h6>Secciones</h6>
                        <ul className="footer-links">
                            <li><a href="#sPolitica">Política</a></li>
                            <li><a href="#sEconomia">Economía</a></li>
                            <li><a href="#sPoliciales">Policiales</a></li>
                            <li><a href="#sEspectaculos">Espectáculos</a></li>
                            <li><a href="#sDeportes">Deportes</a></li>
                        </ul>
                    </div>

                    <div className="col-xs-6 col-md-3">
                        <ul className="footer-links">
                            <h6>Contribuidores</h6>
                            <li>
                                <a href="https://github.com/David-fStack/" >Moyano David</a>
                            </li>
                            <li>
                                <a href="https://www.linkedin.com/in/carlos-cianci" >Cianci Carlos</a>
                            </li>
                            <li>
                                <a href="https://www.linkedin.com/in/mariano-agust%C3%ADn-garz%C3%B3n-412600240/" >Mariano Garzón</a>
                            </li>
                        </ul>
                        <br />
                        <div>
                            <Link className="bi bi-facebook me-2 fs-3" title="Facebook" to="facebook"></Link>
                            <Link className="bi bi-instagram me-2 fs-3" title="Instagram" to="instagran"></Link>
                            <Link className="bi bi-twitter me-2 fs-3" title="Twitter" to="twitter"></Link>
                            <Link className="bi bi-youtube me-2 fs-3" title="Youtube" to="youtube"></Link>
                            <Link className="bi bi-telegram me-2 fs-3" title="Telegram" to="telegram"></Link>
                        </div>
                    </div>
                </div>
                {/* <hr className='ocultar_hr'/> */}

            </div>
        </footer>
    );
};

export default Footer;