import '../components/Todoitem.css'
import Todo from './Todo';
export default function TodoItem({ item,todos,setTodos }) {
  function handleDelete(item) {
    console.log(item,"deleted")
    setTodos(todos.filter((todo) => todo !== item))
  }

  function handleClick(name){
    setTodos(todos.map((todo)=> todo.name === name ? {...todo, done: !todo.done} : todo)
  );
  }

  const strikeclass = item.done ? "completed" : ""

  return (

    <div className='item'>
      <div className='itemname'>

        <span 
          className={strikeclass}
          onClick={() => handleClick(item.name)}> {item.name} 
        </span>

        <span>
          <button onClick={() => handleDelete(item)} 
            className='deletebutton'>x</button>
        </span>
      </div>
    <hr className='line' />
    </div>
  );
}
