import React from 'react';
import '../CardGrande/CardGrande.css'

const CardGrande = (props) => {
    return (
        <div className='card_style_grande' id={props.id}>
                <div>
                    <h3 className='card_seccion_grande' id='seccion-id'>{props.titulo}</h3>
                    <p className='card_texto_grande' id='parrafo-id' >{props.texto_parrafo}</p>
                </div>
                <img className='card_img_grande' src={props.img} alt='imagen' id='img.id'></img>
            </div>
    );
};

export default CardGrande;