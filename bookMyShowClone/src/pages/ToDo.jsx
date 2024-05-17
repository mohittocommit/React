import React, { useState } from 'react'

const ToDo = () => {
    const [toDoItem, setToDoItem] = useState('');
    const [toDoList, setToDoList] = useState([]);

    const handleToDoChange = (e) => {
        setToDoItem(e.target.value)
    }
    const handleAddToDo = () => {
        setToDoList([...toDoList, toDoItem]);
        setToDoItem(''); // Clear the input field
    }
    const handleToDoDelete = (index) =>  {
        const updatedToDo = toDoList.filter((item,i)=> index !== i)
        setToDoList(updatedToDo);
    }

    console.log(toDoList)
    return (
        <div className='page-todo page'>
            <div className="container">
                <div className="row">
                    <div className="todo-inner">
                        <h1 class="text-center mb-4">To-Do List</h1>
                        <form>
                            <div class="input-group mb-3">
                                <input type="text" class="form-control" placeholder="Add new task" onChange={handleToDoChange} value={toDoItem}/>
                                <button class="btn btn-primary" type="button" onClick={handleAddToDo}>Add</button>
                            </div>
                        </form>
                        <ul class="list-group">
                            {
                                toDoList.map((item, index) => {
                                    return (
                                        <li class="list-group-item d-flex justify-content-between align-items-center">
                                            {item}
                                            <div class="task-actions">
                                                <button type="button" class="btn btn-primary btn-sm me-2">Edit</button>
                                                <button type="button" class="btn btn-danger btn-sm" onClick={()=> handleToDoDelete(index)}>Delete</button>
                                            </div>
                                        </li>
                                    )
                                })
                            }
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ToDo
