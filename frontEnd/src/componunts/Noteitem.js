import React, { useContext } from "react";
import noteContext from "../context/notes/noteContext";
const Noteitom = (props) => {
  let { deleteNote } = useContext(noteContext);
  let { title, discription, tag, _id } = props.note;
  let {updateNote} = props;
  return (
    <div className=" col-md-3">
      <div className="card my-3">
        <div className="card-body">
          <h4 className="card-title">{title}</h4>
          <h5 className="card-title">{tag}</h5>
          <p className="card-text">{discription}</p>

          <i
            className="fa-sharp fa-solid fa-trash mx-2"
            onClick={() => {
              deleteNote(_id);
            }}
          ></i>
          <i
            className="fa-sharp fa-solid fa-pen-to-square mx-2"
            onClick={updateNote}
          ></i>
        </div>
      </div>
    </div>
  );
};

export default Noteitom;
