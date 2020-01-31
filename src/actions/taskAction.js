import uuid from 'uuid'
import {firebase, database} from '../firebase/firebase'

export const addTaskAction = (newTask) => ({
    type : "ADD_TASK",
    data : newTask
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

export const addTaskApi = (newTask) => {
    const {taskId, focused, ...taskInfo} = newTask;
    return (dispatch) => {
        database.ref("tasks").push({...taskInfo}).then((firebaseTask)=>{
            dispatch(addTaskAction({...taskInfo, taskId: firebaseTask.key}))
        })
    }
}
