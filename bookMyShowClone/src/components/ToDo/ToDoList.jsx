import React from 'react'

const ToDoList = ({toDoList , handleToDoDelete}) => {
    return (
        <>
            {
                toDoList.map((item, index) => {
                    return (
                        <li class="list-group-item d-flex justify-content-between align-items-center">
                            {item}
                            <div class="task-actions">
                                <button type="button" class="btn btn-primary btn-sm me-2">Edit</button>
                                <button type="button" class="btn btn-danger btn-sm" onClick={() => handleToDoDelete(index)}>Delete</button>
                            </div>
                        </li>
                    )
                })
            }
        </>
    )
}

export default ToDoList
