import React, { useReducer, useState } from "react";

const initialState = [];

function reducer(state, action) {
  switch (action.type) {

    case "ADD":
      return [
        ...state,
        {
          id: Date.now(),
          text: action.payload
        }
      ];

    case "EDIT":
      return state.map((todo) =>
        todo.id === action.payload.id
          ? { ...todo, text: action.payload.text }
          : todo
      );

    case "DELETE":
      return state.filter(
        (todo) => todo.id !== action.payload
      );

    default:
      return state;
  }
}

function App() {

  const [todos, dispatch] = useReducer(reducer, initialState);

  const [input, setInput] = useState("");
  const [editId, setEditId] = useState(null);

  function handleSubmit() {
    if (input.trim() === "") return;

    if (editId !== null) {
      dispatch({
        type: "EDIT",
        payload: {
          id: editId,
          text: input
        }
      });

      setEditId(null);

    } else {
      dispatch({
        type: "ADD",
        payload: input
      });
    }

    setInput("");
  }

  function handleEdit(todo) {
    setInput(todo.text);
    setEditId(todo.id);
  }

  function handleDelete(id) {
    dispatch({
      type: "DELETE",
      payload: id
    });
  }

  return (
    <div style={{ padding: "30px" }}>

      <h1>Todo App</h1>

      <input
        type="text"
        placeholder="Enter your task"
        value={input}
        onChange={(e) => setInput(e.target.value)}
      />

      <button onClick={handleSubmit}>
        {editId !== null ? "Update" : "Add"}
      </button>

      {todos.map((todo) => (
        <div key={todo.id}>

          <span>{todo.text}</span>

          <button onClick={() => handleEdit(todo)}>
            Edit
          </button>

          <button onClick={() => handleDelete(todo.id)}>
            Delete
          </button>

        </div>
      ))}

    </div>
  );
}

export default App;