import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './CardGiant.css'


const CardGiant = (props) => {
    return (
            <div className='card_style_giant responsive_g' id={props.id}>

                <div className="container_card">
                    <div className='background_style_title'>
                        <h3 className='card_seccion_giant' id='seccion-id'>{props.seccion}</h3>
                    </div>

                    <div className="text_res text_min">
                        <p className='card_text_giant' id='parrafo-id' >{props.text_p}</p>
                    </div>

                </div>

                    <div className='img_card'>
                       <img className='card_img_giant' src={props.img} alt='imagen' id='img.id'></img>
                    </div>
            </div>
    );
};

export default CardGiant;