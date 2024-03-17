import React from 'react';
import './footer.css';


export default function Footer(){
   const name = "Rohan Dhakal";

   const date = new Date();

   const currentDate = date.getFullYear();


    return(
        <footer className="footer">
            <h6 className="footer-name">Copyright © {name} {currentDate}</h6>
        </footer>
    );
}