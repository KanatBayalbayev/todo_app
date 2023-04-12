import React, { useState } from "react";

const Form = ({ addNote }) => {
  const [inputValue, setInputValue] = useState("");
  const submit = (event) => {
    event.preventDefault();
    addNote(inputValue);
    setInputValue("");
  };

  return (
    <form className="form" onSubmit={submit}>
      <input
        type="text"
        className="input"
        placeholder="print your task"
        onInput={(event) => setInputValue(event.target.value)}
        value={inputValue}
      />
      <button type="submit" className="btn">
        ADD
      </button>
    </form>
  );
};

export default Form;
