import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './CardGiant.css'


const CardGiant = (props) => {
    return (
        <div className='card_style_giant container-fluid p-0' id={props.id}>

            <div className="row m_r ">

                <div className="container_text col-12 col-xs-12 col-sm-12 col-md-5 col-xl-6 col-xxl-6">

                    <div className='card_title_c  col col-xs-6'>
                        <h3 className='card_title mt-4 p-2' id='seccion-id'>{props.seccion}</h3>
                    </div>

                    <div className="card_text_c text_min col col-xs-6 m-2 pt-2">
                        <p className='card_text' id='parrafo-id' >{props.text_p}</p>
                    </div>
                </div>

                <div className='row card_img_c m-0 p-0 col-xs-12 col-12 col-sm-12 col-md-7 col-xl-6 col-xxl-6'>
                    <img className='card_img p-0' src={props.img} alt='imagen' id='img.id'></img>
                </div>

            </div>

        </div>
    );
};

export default CardGiant;