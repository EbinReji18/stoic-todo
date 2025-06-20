import { useState } from "react";
import '../components/Form.css'
export default function Form({ todos, setTodos }) {
  const [todo, setTodo] = useState("");

  function handleSubmit(e) {
    e.preventDefault();
    if (!todo.trim()) return; // avoid empty items
    setTodos([...todos, todo]);
    setTodo("");
  }

  return (
    <form className="todoform" onSubmit={handleSubmit}>
      <div className="inputContainer">
      <input
      className="modernInput"
        type="text"
        value={todo}
        onChange={(e) => setTodo(e.target.value)}
        placeholder="Enter a task"
      />
      <button className="modernButton" type="submit">Add</button>
      </div>
    </form>
  );
}
