import React, { useState } from 'react'
import { showToast } from '../utils/toast';
import ToDoList from '../components/ToDo/ToDoList';
import ToDoAdd from '../components/ToDo/ToDoAdd';

const ToDo = () => {
    const [toDoItem, setToDoItem] = useState('');
    const [toDoList, setToDoList] = useState(localStorage.getItem("toDOList") ? JSON.parse(localStorage.getItem("toDOList")) : [] );
    const [isEditing, setIsEditing] = useState(false);
    const [currentIndex, setCurrentIndex] = useState(null);
    const handleToDoChange = (e) => {
        setToDoItem(e.target.value)
    }
    const handleAddToDo = () => {
        
        if(isEditing) {
            const updatedToDo = [...toDoList];
            updatedToDo[currentIndex].text = toDoItem;
            setToDoList(updatedToDo)
            localStorage.setItem('toDOList',JSON.stringify(updatedToDo))
            setIsEditing(false);
            setCurrentIndex(null);
            setToDoItem('');
            showToast('To Do Updated Successfully!', 'success');
        } else {
            if(!toDoList.some(item => item.text === toDoItem)) {
                setToDoList([...toDoList, {text: toDoItem}]);
                const updatedToDo = [...toDoList, {text: toDoItem}]
                localStorage.setItem('toDOList',JSON.stringify(updatedToDo))
                setToDoItem('');
                showToast('To Do Added Successfully!', 'success');
            }
        }
    }
    const handleToDoEdit = (index) => {
        setIsEditing(true)
        setToDoItem(toDoList[index].text)
        setCurrentIndex(index)
    }
    const handleToDoDelete = (index) =>  {
        const updatedToDo = [...toDoList];
        updatedToDo.splice(index, 1);
        setToDoList(updatedToDo);
        localStorage.setItem('toDOList',JSON.stringify(updatedToDo))
        showToast('To Do Deleted Successfully!', 'error');
    }
    return (
        <div className='page-todo page'>
            <div className="container">
                <div className="row">
                    <div className="todo-inner">
                        <h1 className="text-center mb-4">To-Do List</h1>
                        <ToDoAdd toDoItem={toDoItem} handleToDoChange={handleToDoChange} handleAddToDo={handleAddToDo} />
                        <ul className="list-group">
                            <ToDoList toDoList={toDoList} handleToDoEdit={handleToDoEdit} handleToDoDelete={handleToDoDelete} />
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ToDo
