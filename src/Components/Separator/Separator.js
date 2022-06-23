import React from 'react';
import './Separator.css'

const Separator = (props) => {
    return (
        <div className='separator_style'>
            <h3 className='text-separator'>{props.seccion}</h3>
        </div>
    );
};

export default Separator;