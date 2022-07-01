import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './Separator.css'

const Separator = (props) => {
    return (
        <>
            <div className='separator_style' id={props.id}>
                <h3 className='text-separator'>{props.seccion}</h3>
            </div>

            <div className='container'>
                <hr className='hr_style' />
            </div>
        </>
    );
};

export default Separator;