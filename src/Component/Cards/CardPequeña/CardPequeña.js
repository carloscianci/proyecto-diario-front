import React from 'react';
import '../CardPequeña/CardPequeña.css'


const CardPequeña = (props) => {
    return (
        <div className= 'card_style' id={props.id}>
            <img className='card_img' src={props.img} alt='imagen' id='img.id'></img>
            <div>
                <h3 className='card_titulo' id='titulo-id'>{props.titulo}</h3>
                <p className= 'card_texto' id='parrafo-id' >{props.texto_parrafo}</p>
            </div>
        </div>
    );
};

export default CardPequeña;