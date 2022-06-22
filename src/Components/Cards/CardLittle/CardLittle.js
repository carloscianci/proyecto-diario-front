import React from 'react';
import './CardLittle.css'


const CardLittle = (props) => {
    return (
        <div className= 'card_style_little' id={props.id}>
            <img className='card_img_little' src={props.img} alt='imagen' id='img.id'></img>
            <div>
                <h3 className='card_titulo_little' id='titulo-id'>{props.title}</h3>
                <p className= 'card_texto_little' id='parrafo-id' >{props.text_p}</p>
            </div>
        </div>
    );
};

export default CardLittle;