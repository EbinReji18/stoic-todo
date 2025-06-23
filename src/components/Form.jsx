import { useState } from "react";
import '../components/Form.css'
export default function Form({ todos, setTodos }) {
  const [todo, setTodo] = useState({ name: "",done: false });


  function handleSubmit(e) {
    e.preventDefault();
    setTodos([...todos, todo]);
    setTodo({ name: "",done: false });
  }

  return (
    <form className="todoform" onSubmit={handleSubmit}>
      <div className="inputContainer">
      <input
      className="modernInput"
        type="text"
        value={todo.name}
        onChange={(e) => setTodo({name:e.target.value, done:false})}
        placeholder="Enter a task"
      />
      <button className="modernButton" type="submit">Add</button>
      </div>
    </form>
  );
}
