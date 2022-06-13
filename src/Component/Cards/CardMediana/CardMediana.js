import React from 'react';
import '../CardMediana/CardMediana.css'


const CardMediana = (props) => {
    return (
        <div className= 'card_style_mediano' id={props.id}>
            <img className='card_img_mediano' src={props.img} alt='imagen' id='img.id'></img>
            
            <div>
                <h5 className='card_seccion_mediano' id='seccion-id'>{props.seccion}</h5>

                <h3 className='card_titulo_mediano'>{props.titulo}</h3>

                <p className= 'card_texto_mediano' id='parrafo-id' >{props.texto_parrafo}</p>
            </div>
        </div>
    );
};

export default CardMediana;