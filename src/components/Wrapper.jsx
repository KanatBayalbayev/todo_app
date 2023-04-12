import React, { useState } from "react";
import Form from "./Form";
import { v4 as uuidv4 } from "uuid";
import ToDo from "./ToDo";
import EditForm from "./EditForm";
uuidv4();
const Wrapper = () => {
  const [notes, setNotes] = useState([]);
  const addNote = (note) => {
    setNotes([
      { id: uuidv4(), todo: note, complete: false, isEdited: false },
      ...notes,
    ]);
  };
  const toggle = (id) => {
    setNotes(
      notes.map((note) =>
        note.id === id ? { ...note, complete: !note.complete } : note
      )
    );
  };
  const deleteNote = (id) => {
    setNotes(notes.filter((note) => note.id !== id));
  };
  const editNote = (id) => {
    setNotes(
      notes.map((note) =>
        note.id === id ? { ...note, isEdited: !note.isEdited } : note
      )
    );
  };
  const editToDo = (todo, id) => {
    setNotes(
        notes.map((note) =>
          note.id === id ? { ...note, todo, isEdited: !note.isEdited } : note
        )
      );
  }
  return (
    <div className="TodoWrapper">
      <h1 className="name">ToDo List</h1>
      <Form addNote={addNote} />
      {notes.map((object, index) =>
        object.isEdited ? (
          <EditForm key={index} note={object} editNote={editToDo}/>
        ) : (
          <ToDo
            key={index}
            note={object}
            toggle={toggle}
            deleteNote={deleteNote}
            editNote={editNote}
          />
        )
      )}
    </div>
  );
};

export default Wrapper;
