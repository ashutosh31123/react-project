import React from 'react'
import { useState } from 'react'
import { useTodo } from '../contexts/TodoContext';

function TodoItem({todos}) {

    const [isTodoEditable, setIsTodoEditable] = useState(false);
    const [todoMsg, setTodoMsg] = useState(todos.todo);

    const {updateTodo, deleteTodo, toggleComplete} = useTodo();

    const editTodo = () => {
        updateTodo(todos.id, {...todos, todo: todoMsg})
        setIsTodoEditable(false)
    }

    const toggleCompleted = () => {
        toggleComplete(todos.id)
    }

  return (
        <div
            className={`flex border border-black/10 rounded-lg px-3 py-1.5 gap-x-3 shadow-sm shadow-white/50 duration-300  text-black ${todos.completed ? "bg-[#c6e9a7]" : "bg-[#ccbed7]"}`}
        >
            <input type="checkbox" 
            className='cursor-pointer'
            checked={todos.completed}
            onChange={toggleCompleted}
            />
            <input type="text" 
            className={`border outline-none w-full bg-transparent rounded-lg ${isTodoEditable ? "border-black/10 px-2" : "border-transparent"}`}
            value={todoMsg}
            onChange={(e) => setTodoMsg(e.target.value)}
            readOnly={!isTodoEditable}
            />
            <button
            className='inline-flex w-8 h-8 rounded-lg text-sm border border-black/10 justify-center items-center bg-gray-50 hover:bg-gray-100 shrink-0 disabled:opacity-50'
            onClick={() => {
                if (todos.completed) return
                if (isTodoEditable) {
                    editTodo()
                }else setIsTodoEditable((prev) => !prev)
            }}
            disabled={todos.completed}
            >{isTodoEditable ? "📁": "✏️"}</button>
            <button
            className='inline-flex w-8 h-8 rounded-lg text-sm border border-black/10 justify-center items-center bg-gray-50 hover:bg-gray-100 shrink-0'
            onClick={() => deleteTodo(todos.id)}
            >❌</button>
        </div>
    )
}

export default TodoItem