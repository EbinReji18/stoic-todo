import '../components/Footer.css'
export default function Footer({completedTodos,totalTodos}) {

    return (
        <div className='footer'>
            <span className='footer-item'>Completed Todos: {completedTodos}</span>
            <span className='footer-item'>Total Todos: {totalTodos}</span>

        </div>
    )
}