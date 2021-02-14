import React, { useState } from "react";

const Input = () => {
  const [description, setDescription] = useState("");

  const onSubmitForm = async (e) => {
    e.preventDefault();
    if (e.target.value) {
      try {
        const body = { description };
        const response = await fetch(`http://localhost:5000/todos`, {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(body),
        });

        window.location = "/";
      } catch (err) {
        console.error(err.message);
      }
    } else {
      e.target.placeholder = "enter your goal here";
    }
  };

  return (
    <>
      <form className="d-flex flex-row" onSubmit={onSubmitForm}>
        <input
          type="text"
          className="form-control"
          value={description}
          placeholder="enter your goal here"
          onFocus={(e) => (e.target.placeholder = "")}
          onBlur={onSubmitForm}
          onChange={(e) => setDescription(e.target.value)}
        />
        <button className="btn btn-success">Add</button>
      </form>
    </>
  );
};

export default Input;
