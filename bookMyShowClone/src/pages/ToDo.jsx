import React, { useState } from 'react'
import { showToast } from '../utils/toast';
import ToDoList from '../components/ToDo/ToDoList';
import ToDoAdd from '../components/ToDo/ToDoAdd';

const ToDo = () => {
    const [toDoItem, setToDoItem] = useState('');
    const [toDoList, setToDoList] = useState([]);

    const handleToDoChange = (e) => {
        setToDoItem(e.target.value)
    }
    const handleAddToDo = () => {
        if(!toDoList.includes(toDoItem)) {
            setToDoList([...toDoList, toDoItem]);
            setToDoItem('');
            showToast('To Do Added Successfully!', 'success');
        }
    }
    const handleToDoDelete = (index) =>  {
        const updatedToDo = toDoList.filter((item,i)=> index !== i)
        setToDoList(updatedToDo);
        showToast('To Do Added Successfully!', 'error');
    }
    return (
        <div className='page-todo page'>
            <div className="container">
                <div className="row">
                    <div className="todo-inner">
                        <h1 class="text-center mb-4">To-Do List</h1>
                        <ToDoAdd toDoItem={toDoItem} handleToDoChange={handleToDoChange} handleAddToDo={handleAddToDo} />
                        <ul class="list-group">
                            <ToDoList toDoList={toDoList} handleToDoDelete={handleToDoDelete} />
                        </ul>
                    </div>
                </div>
            </div>
            
        </div>
    )
}

export default ToDo
