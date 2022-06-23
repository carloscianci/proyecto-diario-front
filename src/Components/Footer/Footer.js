import React from 'react';
import './Footer.css'

const Footer = () => {
    return (
        <footer className="site-footer">
            <div className="container">
                <div className="row">
                    <div className="col-sm-12 col-md-6" id="aboutUs">
                        <h6>Rolling Diario</h6>
                        <p className="text-justify">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ipsa sed at sequi quos quae commodi accusamus! Quam consequatur magnam deleniti aspernatur minus eos eveniet ullam quasi! Veritatis quam placeat facilis!</p>
                    </div>

                    <div className="col-xs-6 col-md-3">
                        <h6>Categorias</h6>
                        <ul className="footer-links">
                            <li><a href="#/">Home</a></li>
                            <li><a href="#/">Politica</a></li>
                            <li><a href="#/">Economia</a></li>
                            <li><a href="#/">Policiales</a></li>
                        </ul>
                    </div>

                    <div className="col-xs-6 col-md-3">
                        <ul className="footer-links">
                            <h6>Contribuidores</h6>
                            <li>
                                <a href="https://github.com/David-fStack/" target="_blank" >Moyano David</a>
                            </li>
                            <li>
                                <a href="https://www.linkedin.com/in/carlos-cianci" target="_blank">Cianci Carlos</a>
                            </li>

                            <li>
                                <a href="#/" target="_blank">Mariano</a>
                            </li>

                        </ul>
                    </div>
                </div>
                <hr />

            </div>
        </footer>
    );
};

export default Footer;