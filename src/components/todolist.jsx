import React from 'react'
import Todos from '../components/todos'
function todolist({ todos }) {
    return (
        <div className='todolist' >
            {
                todos && todos.map((todo) => (
                    <Todos todo={todo} />
                ))
            }
        </div>
    )
}

export default todolist