import React from 'react';
import './body.css';

export default function Cards(props){
    return(
        <section id='body'>
            <div className="container">
                <h1 className="container-name">{props.title}</h1>
                <p>{props.description}</p>
            </div>
        </section>

       
    );
}