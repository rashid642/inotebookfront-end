import React, { useContext } from 'react'
import notescontext from "../context/notes/NoteContext"

const NotesItem = (props) => {
    const context = useContext(notescontext);
    const {deleteNote} = context;
    const {note, updateNote} = props;
    return (
        <div className='col-md-3'>
            <div className="card my-3 mx-1">
                <div className="card-body">
                    <h5 className="card-title">Name - {note.title}</h5>
                    <p className="card-text">Course - {note.description}</p>
                    <p className="card-text">PT1 - {note.pt1}</p>
                    <p className="card-text">PT2 - {note.pt2}</p>
                    <p className="card-text">Avg - {(note.pt1 + note.pt2)/2}</p>
                    <i className="fa-sharp fa-solid fa-trash mx-3" onClick={() => {deleteNote(note._id)}}></i>
                    <i className="fa-solid fa-pen-to-square mx-3" onClick={()=>{updateNote(note)}}></i>
                </div>
            </div>
        </div>
    )
}
export default NotesItem