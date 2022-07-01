import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './CardLittle.css'


const CardLittle = (props) => {
    return (
        <div className= 'card_style_little' id={props.id} >
            <img className='card_img_little text_redux' src={props.img} alt='imagen' id='img.id'></img>
            <div>
                <div>
                    <h3 className='card_titulo_little' id='titulo-id'>{props.title}</h3>
                </div>

                <div className="text_redux">
                    <p className= 'card_texto_little text_min' id='parrafo-id' >{props.text_p}</p>
                </div>
            </div>
            <div className='data-bs-spy="scroll'></div>
        </div>
    );
};

export default CardLittle;