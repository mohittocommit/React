import React, { useState } from 'react'
import { showToast } from '../utils/toast';
import ToDoList from '../components/ToDo/ToDoList';
import ToDoAdd from '../components/ToDo/ToDoAdd';

const ToDo = () => {
    const [toDoItem, setToDoItem] = useState('');
    const [toDoList, setToDoList] = useState([]);
    const [isEditing, setIsEditing] = useState(false);
    const [currentIndex, setCurrentIndex] = useState(null);

    const handleToDoChange = (e) => {
        setToDoItem(e.target.value)
    }
    const handleAddToDo = () => {
        const updatedToDo = [...toDoList];
        if(isEditing) {
            updatedToDo[currentIndex] = toDoItem;
            setToDoList(updatedToDo)
            setIsEditing(false);
            setCurrentIndex(null);
            setToDoItem('');
            showToast('To Do Updated Successfully!', 'success');
        } else {
            if(!toDoList.includes(toDoItem)) {
                setToDoList([...toDoList, toDoItem]);
                setToDoItem('');
                showToast('To Do Added Successfully!', 'success');
            }
        }
    }
    const handleToDoEdit = (index) => {
        setToDoItem(toDoList[index])
        setIsEditing(true)
        setCurrentIndex(index)
    }
    const handleToDoDelete = (index) =>  {
        const updatedToDo = [...toDoList];
        updatedToDo.splice(index, 1);
        setToDoList(updatedToDo);
        showToast('To Do Deleted Successfully!', 'error');
    }
    return (
        <div className='page-todo page'>
            <div className="container">
                <div className="row">
                    <div className="todo-inner">
                        <h1 class="text-center mb-4">To-Do List</h1>
                        <ToDoAdd toDoItem={toDoItem} handleToDoChange={handleToDoChange} handleAddToDo={handleAddToDo} />
                        <ul class="list-group">
                            <ToDoList toDoList={toDoList} handleToDoEdit={handleToDoEdit} handleToDoDelete={handleToDoDelete} />
                        </ul>
                    </div>
                </div>
            </div>
            
        </div>
    )
}

export default ToDo
