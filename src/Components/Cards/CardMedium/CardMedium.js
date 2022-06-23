import React from 'react';
import '../CardMedium/CardMedium.css'


const CardMedium = (props) => {
    return (
        <div className= 'card_style_medium responsive_m' id={props.id}>
            <img className='card_img_medium' src={props.img} alt='imagen' id='img.id'></img>
            
            <div>
                <h5 className='card_seccion_medium' id='seccion-id'>{props.seccion}</h5>

                <h3 className='card_title_medium'>{props.title}</h3>

                <p className= 'card_texto_medium' id='parrafo-id' >{props.text_p}</p>
            </div>
        </div>
    );
};

export default CardMedium;