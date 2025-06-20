import '../components/Todoitem.css'
import Todo from './Todo';
export default function TodoItem({ item,todos,setTodos }) {
  function handleDelete(item) {
    console.log(item,"deleted")
    setTodos(todos.filter((todo) => todo !== item))
  }

  return (
    <div className='item'>
    <div className='itemname'>
      {item}
      <span>
        <button onClick={() => handleDelete(item)} className='deletebutton'>x</button>
      </span>
      </div>
    <hr className='line' />
    </div>
  );
}
