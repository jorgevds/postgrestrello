import React, { useEffect, useState } from "react";
import Input from "./Input";
import Edit from "./Edit";

const ListAll = () => {
  const [todos, setTodos] = useState([]);

  const deleteTodo = async (id) => {
    try {
      const deleteTodo = await fetch(`http://localhost:5000/todos/${id}`, {
        method: "DELETE",
      });

      setTodos(todos.filter((todo) => todo.todo_id !== id));
    } catch (err) {
      console.error(err.message);
    }
  };

  const getTodos = async () => {
    try {
      const response = await fetch(`http://localhost:5000/todos/`);
      const jsonData = await response.json();

      setTodos(jsonData);
    } catch (err) {
      console.error(err.message);
    }
  };

  useEffect(() => {
    getTodos();
  }, []);

  return (
    <ul className="d-flex list-group flex-row mt-5">
      {todos.map((todo) => (
        <>
          <li key={todo.todo_id} className="list-group-item ">
            <Edit todo={todo} />
            <button
              className="btn btn-danger"
              onClick={() => deleteTodo(todo.todo_id)}
            >
              &times;
            </button>
            <Input />
          </li>
        </>
      ))}
      <li className="list-group-item">
        <Input />
      </li>
    </ul>
  );
};

export default ListAll;
