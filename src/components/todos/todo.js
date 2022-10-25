import React, { useState } from 'react'
import TodoList from './todoList'

export default function Todo() {

    const [inputValue, setInputValue] = useState('')
    const [todos, setTodos] = useState([])
    


    const handleOnChangeInput = (e) => {
        setInputValue(e.target.value)
    }
    
    const AddTodo = () => {
        setTodos(prev => ([...prev, { title: inputValue, id: Math.random() * 10, isCheck: false }]))
        setInputValue('')
    }

    const todoDelete = (id) => {
        setTodos(prev => prev.filter(todo => todo.id !== id))
    }



    const HandleResetTodos = () => {
        setTodos(prev => [...prev, { title: inputValue, id: Math.random() * 10, isCheck: false }])
        setInputValue('')
    }




    const handleCheck = () => {
        setTodos(prev => prev.map(item => {

            return item.isCheck = !item.isCheck
        }
        ))
    }

    const deleteChecked = (id) => {
        setTodos(prev => prev.map(item => {

        }))
    }





    return (
        <div>
            <input value={inputValue} onChange={handleOnChangeInput} type={'text'} />
            <button onClick={AddTodo}>Add Todo</button>


            <button onClick={HandleResetTodos}>Reset Todo</button>
            

            <button onClick={deleteChecked} >Delete checked</button>


            {todos.map(todo => {
                return <TodoList

                    handlCheck={handleCheck}
                    deleteTodo={todoDelete}
                    key={todo.id}
                    {...todo}
                />

            })}
        </div>



    )
}
