import React from 'react';
import './CardGiant.css'

const CardGiant = (props) => {
    return (
        <div className='card_style_giant' id={props.id}>
                <div>
                    <h3 className='card_seccion_giant' id='seccion-id'>{props.seccion}</h3>
                    <p className='card_text_giant' id='parrafo-id' >{props.text_p}</p>
                </div>
                <img className='card_img_giant' src={props.img} alt='imagen' id='img.id'></img>
            </div>
    );
};

export default CardGiant;