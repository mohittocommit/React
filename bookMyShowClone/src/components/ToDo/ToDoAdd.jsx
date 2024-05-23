import React from 'react'

const ToDoAdd = ({toDoItem, handleToDoChange, handleAddToDo}) => {
    return (
        <>
            <form>
                <div class="input-group mb-3">
                    <input type="text" class="form-control" placeholder="Add new task" onChange={handleToDoChange} value={toDoItem} />
                    <button class="btn btn-primary" type="button" onClick={handleAddToDo}>Add</button>
                </div>
            </form>
        </>
    )
}

export default ToDoAdd
