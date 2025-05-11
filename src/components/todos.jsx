import React, { useState } from 'react'
import '../styles/todos.css'
import { TiDelete } from "react-icons/ti";
import { MdEdit } from "react-icons/md";
function todos({ todo }) {

    function sil() {

    }

    return (

        <div className="todos">
            <div className='yazi'>
                {todo}
            </div>
            <div className='icons'>
                <MdEdit className='icon' />
                <TiDelete onClick={sil} className='icon' />

            </div>


        </div>
    )
}

export default todos