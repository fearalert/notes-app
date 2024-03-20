import React, { useState } from 'react';
import './body.css';
import Cards from './card.jsx';
import ContentsArea from './contents.jsx';


export default function Body(){

    const [notes, setNotes] = useState([]);
    function addNote(note) {
      setNotes((prevValue) => {
        return [...prevValue, note];
      });
    }
  
    function deleteNote(id) {
      setNotes((prevNotes) => {
        return prevNotes.filter((note, index) => {
          return index !== id;
        });
      });
    }
    // function showNotesData(){
    //     return (
    //         <div className="container">

    //                 {notes.map((noteItem) =>{
    //                     return(
    //                         <div>
    //                             <h1 className="container-name">{noteItem.title}</h1>
    //                             <p>{noteItem.description}</p>
    //                         </div>
    //                     );
    //                     })
    //                 }
    //         </div>

            
    //     );
    // }
    return(
        <section id='body'>
        <ContentsArea onAdd={addNote} />
        {notes.map((note, index) => (
        <Cards
          key={index}
          id={index}
          title={note.title}
          content={note.content}
          onDelete={deleteNote}
        />
      ))}
        </section>

       
    );
}