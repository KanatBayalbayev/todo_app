import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPenToSquare } from "@fortawesome/free-solid-svg-icons";
import { faTrash } from "@fortawesome/free-solid-svg-icons";
const ToDo = ({ note, toggle, deleteNote, editNote }) => {
  return (
    <div className="note">
      <p
        onClick={() => toggle(note.id)}
        className={`${note.complete ? "completed" : ""}`}
      >
        {note.todo}
      </p>
      <div>
        <FontAwesomeIcon
          icon={faPenToSquare}
          onClick={() => editNote(note.id)}
        />
        <FontAwesomeIcon icon={faTrash} onClick={() => deleteNote(note.id)} />
      </div>
    </div>
  );
};

export default ToDo;
