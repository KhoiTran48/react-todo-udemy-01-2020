import uuid from 'uuid'

export const addTaskAction = (newTask) => ({
    type : "ADD_TASK",
    data : {
        ...newTask,
        taskId: uuid(), 
    }
})

export const editTaskAction = (editTask) => ({
    type: "EDIT_TASK",
    data: editTask
})

export const deleteTaskAction = (taskId) => ({
    type: "DELETE_TASK",
    data: {
        taskId
    }
})