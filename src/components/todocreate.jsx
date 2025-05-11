import React from 'react'
import { useState } from 'react'
import '../styles/todocreate.css'
function todocreate({ onCreateTodo }) {
    const [newTodo, setNewTodo] = useState('');

    function createTodo() {

        onCreateTodo(newTodo)
        clearInput();
    }
    function clearInput() {
        setNewTodo('');
    }

    return (

        <div className="todocreate" >
            <input value={newTodo} onChange={(e) => setNewTodo(e.target.value)} id='todoinput' placeholder='ToDo giriniz...' type="text" />

            <button onClick={createTodo} >ToDo Oluştur</button>
        </div >
    )
}

export default todocreate