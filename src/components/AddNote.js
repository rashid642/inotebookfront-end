import React, { useContext, useState } from 'react'
import notescontext from "../context/notes/NoteContext"

export const AddNote = () => {
    const context = useContext(notescontext)
    const [note, setNote] = useState({
        title : "",
        description : "",
        tag : "",
        pt1 : 0,
        pt2 : 0
    })
    const {addNote} = context;
    const handleClick = (e) => {
        e.preventDefault();
        addNote(note.title, note.description, note.tag, note.pt1, note.pt2);
        console.log(note,"sgsergw")
        setNote({
            title : "",
            description : "",
            tag : "",
            pt1 : 0,
            pt2 : 0
        })
    }
    const onChange = (e) => {
        setNote({...note, [e.target.name] : e.target.value})
    }
    return (
        <div>
            <h2>Add a Student</h2>
            <form>
                <div className="mb-3">
                    <label htmlFor="exampleInputEmail1" className="form-label">Name of Student</label>
                    <input type="text" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" onChange={onChange} name="title" minLength={5} required value={note.title}/>
                </div> 
                <div className="mb-3">
                    <label htmlFor="exampleInputPassword1" className="form-label">Course Enrolled</label>
                    <input type="text" className="form-control" id="exampleInputPassword1" onChange={onChange} name="description" minLength={5} required value={note.description}/>
                </div>
                <div className="mb-3">
                    <label htmlFor="exampleInputPassword1" className="form-label">PNR Number</label>
                    <input type="text" className="form-control" id="exampleInputPassword1" onChange={onChange} name="tag" value={note.tag}/>
                </div>
                <div className="mb-3">
                    <label htmlFor="exampleInputPassword1" className="form-label">PT-1 Marks</label>
                    <input type="number" className="form-control" id="exampleInputPassword1" onChange={onChange} name="pt1" value={note.pt1}/>
                </div>
                <div className="mb-3">
                    <label htmlFor="exampleInputPassword1" className="form-label">PT-2 Marks</label>
                    <input type="number" className="form-control" id="exampleInputPassword1" onChange={onChange} name="pt2" value={note.pt2}/>
                </div>
                <button disabled={note.title.length < 5 || note.description.length < 5} type="submit" className="btn btn-primary" onClick={handleClick}>Submit</button>
            </form>
        </div>
    )
}