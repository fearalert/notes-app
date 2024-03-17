import React from 'react';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBook } from '@fortawesome/free-solid-svg-icons';
import './header.css';

export default function Header(){

    return(
        <header className="header">
            <FontAwesomeIcon className="icon" icon={faBook} size='2x' color="#377BE0"/>
            <h1 className="header-name">Notes App</h1>
        </header>
    );
}