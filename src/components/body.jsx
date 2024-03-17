import React from 'react';
import data from './data/data.js';
import './body.css';


export default function Body(){
    function showNotesData(datas){
        return (
            <div className="container">
                <h1 className="container-name">{datas.title}</h1>
                <p>{datas.description}</p>
            </div>
        );
    }
    return(
        <section id='body'>
            {data.map(showNotesData)}
        </section>

       
    );
}