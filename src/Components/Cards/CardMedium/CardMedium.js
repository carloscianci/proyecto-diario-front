import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../CardMedium/CardMedium.css'


const CardMedium = (props) => {
    return (
        <div className= 'card_style_medium' id={props.id}>
            <div className="img_card_m">
            <img className='card_img_medium' src={props.img} alt='imagen' id='img.id'></img>
            </div>
            
            <div>
                <div>
                    <h3 className='card_title_medium'>{props.title}</h3>
                </div>
                
                <div className="text_min">
                <p className= 'card_texto_medium' id='parrafo-id' >{props.text_p}</p>
                </div>
            </div>
        </div>
    );
};

export default CardMedium;