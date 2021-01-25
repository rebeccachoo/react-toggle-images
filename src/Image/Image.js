import React from 'react';
import './Image.css';

const image = ( props ) => {
    return (
        <div className="Person">
            <div className="title">{props.name}</div>
            <img src={props.url} alt={props.name} onClick={props.click} />
        </div>
    )
};

export default image;