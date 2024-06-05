import React from 'react'

const ToDoAdd = ({toDoItem, handleToDoChange, handleAddToDo}) => {
    return (
        <>
            <form>
                <div className="input-group mb-3">
                    <input type="text" className="form-control" placeholder="Add new task" onChange={handleToDoChange} value={toDoItem} />
                    <button className="btn btn-primary" type="button" onClick={handleAddToDo}>Submit</button>
                </div>
            </form>
        </>
    )
}

export default ToDoAdd
