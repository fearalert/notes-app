import React from 'react';
import './body.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrash } from '@fortawesome/free-solid-svg-icons';

export default function Cards(props){

    function handleClick() {
        props.onDelete(props.id);
      }
        return(
            <div className="container">
              <h1 className='container-name'>{props.title}</h1>
              <p>{props.content}</p>
              <button className="delete-button" onClick={handleClick}>            
                    <FontAwesomeIcon className="icon" icon={faTrash} color="#FFFFFF"/>
                </button>
            </div>
          );

}