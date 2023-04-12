import React, { useState } from "react";

const EditForm = ({ editNote, note }) => {
  const [inputValue, setInputValue] = useState(note.todo);
  const submit = (event) => {
    event.preventDefault();
    editNote(inputValue, note.id);
    // setInputValue("");
  };

  return (
    <form className="form" onSubmit={submit}>
      <input
        type="text"
        className="input"
        placeholder="Update Note"
        onInput={(event) => setInputValue(event.target.value)}
        value={inputValue}
      />
      <button type="submit" className="btn">
        Save
      </button>
    </form>
  );
};

export default EditForm;
