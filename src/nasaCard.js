import React from 'react';

const NasaCard = (props) => {
return (
    <div className='mainContainer'>
        <p>{props.data.title}</p>
        <p>Date: {props.data.date}</p>
        <img src={props.data.hdurl} alt={props.data.title}/>
<p>Description: {props.data.explanation}</p>
        <p>Photo Copyright by: {props.data.copyright}</p>
      </div>

);
};

export default NasaCard;