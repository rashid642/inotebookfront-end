import React, { useContext, useEffect, useRef , useState} from 'react'
import notescontext from "../context/notes/NoteContext"
import NotesItem from './NoteItem';
import { AddNote } from './AddNote'
import { useNavigate } from 'react-router-dom';
const Notes = () => {
    const navigate = useNavigate();
    const context = useContext(notescontext);
    const { notes, getNotes, editNote } = context;
    useEffect(() => {
        if(localStorage.getItem('token')){
            getNotes();
        }else{
            navigate("/login");
        }
    }, [])
    const [note, setNote] = useState({
        id : "",
        etitle : "",
        edescription : "",
        etag : "",
        pt1 : 0,
        pt2 : 0
    })
    const ref = useRef(null)
    const refclose = useRef(null)
    const updateNote = (currentnote) => {
        ref.current.click();
        setNote({id : currentnote._id, etitle: currentnote.title, edescription: currentnote.description, etag: currentnote.tag, pt1 : currentnote.pt1, pt2 : currentnote.pt2});
    }
    const handleClick = (e) => {
        e.preventDefault();
        editNote(note.id, note.etitle, note.edescription, note.etag, note.pt1, note.pt2);
        refclose.current.click();
    }
    const onChange = (e) => {
        setNote({...note, [e.target.name] : e.target.value})
    }

    return (
        <>
            <button type="button" ref={ref} className="btn btn-primary d-none" data-bs-toggle="modal" data-bs-target="#exampleModal">
                Launch demo modal
            </button>
            <div className="modal fade" id="exampleModal" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                <div className="modal-dialog">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h5 className="modal-title" id="exampleModalLabel">Edit Student details</h5>
                            <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                        </div>
                        <div className="modal-body">
                            <form>
                                <div className="mb-3">
                                    <label htmlFor="exampleInputEmail1" className="form-label">Name of Student</label>
                                    <input type="text" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" onChange={onChange} name="etitle" value={note.etitle}/>
                                </div>
                                <div className="mb-3">
                                    <label htmlFor="exampleInputPassword1" className="form-label">Course Enrolled</label>
                                    <input type="text" className="form-control" id="exampleInputPassword1" onChange={onChange} name="edescription" value={note.edescription} minLength={5} required/>
                                </div>
                                <div className="mb-3">

                                    <label htmlFor="exampleInputPassword1" className="form-label">PNR Number</label>
                                    <input type="text" className="form-control" id="exampleInputPassword1" onChange={onChange} name="etag" value={note.etag} minLength={5} required/>
                                </div>
                                <div className="mb-3">
                                    
                                    <label htmlFor="exampleInputPassword1" className="form-label">PT-1 Marks</label>
                                    <input type="number" className="form-control" id="exampleInputPassword1" onChange={onChange} name="pt1" value={note.pt1} minLength={5} required/>
                                </div>
                                <div className="mb-3">
                                    
                                    <label htmlFor="exampleInputPassword1" className="form-label">PT-2 Marks</label>
                                    <input type="number" className="form-control" id="exampleInputPassword1" onChange={onChange} name="pt2" value={note.pt2} minLength={5} required/>
                                </div>
                                {/* <button type="submit" className="btn btn-primary" onClick={handleClick}>Submit</button> */}
                            </form>
                        </div>
                        <div className="modal-footer">
                            <button ref={refclose} type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                            <button disabled={note.etitle.length < 5 || note.edescription.length < 5} type="button" className="btn btn-primary" onClick={handleClick}>Update Student</button>
                        </div>
                    </div>
                </div>
            </div>
            <AddNote />
            <div className='row my-3'>
                <h2>Student List</h2>
                <div className='container'>
                    {notes.length === 0 && "You have not added any students yet"}
                </div>
                {notes.map((note) => {
                    return <NotesItem key={note._id} updateNote={updateNote} note={note} />
                })}

            </div>
        </>
    )
}

export default Notes