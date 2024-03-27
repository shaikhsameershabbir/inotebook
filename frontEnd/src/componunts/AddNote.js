import React, { useContext, useState } from "react";
import noteContext from "../context/notes/noteContext";
const AddNote = () => {
  let { addNote } = useContext(noteContext);

  const [note, setNote] = useState({ title: "", discription: "", tag: "" });
  const submitNote = (event) => {
    event.preventDefault();
    addNote(note);
  };
  //   Chnage the state of note which is user adding put the values to the note
  const onchange = (event) => {
    setNote({ ...note, [event.target.name]: event.target.value });
  };
  return (
    <div>
      <div className="container my-3">
        <h2> Add Your note Note </h2>
        <form>
          <div className="mb-3">
            <label htmlFor="title" className="form-label">
              Enter title
            </label>
            <input
              type="text"
              className="form-control"
              id="title"
              name="title"
              aria-describedby="emailHelp"
              onChange={onchange}
            />
          </div>
          <div className="mb-3">
            <label htmlFor="desc" className="form-label">
              Discription
            </label>
            <input
              type="text"
              className="form-control"
              id="discription"
              name="discription"
              onChange={onchange}
            />
          </div>
          <div className="mb-3">
            <label htmlFor="desc" className="form-label">
              Tag
            </label>
            <input
              type="text"
              className="form-control"
              id="tag"
              name="tag"
              onChange={onchange}
            />
          </div>
          <div className="mb-3 form-check">
            <input
              type="checkbox"
              className="form-check-input"
              id="exampleCheck1"
            />
            <label className="form-check-label" htmlFor="exampleCheck1">
              Check me out
            </label>
          </div>
          <button
            type="submit"
            className="btn btn-primary"
            onClick={submitNote}
          >
            Add Note
          </button>
        </form>
      </div>
    </div>
  );
};

export default AddNote;
