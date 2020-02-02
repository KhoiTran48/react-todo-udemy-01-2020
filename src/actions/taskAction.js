import {database} from '../firebase/firebase'

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
        // cái return này là để cho test
        return database.ref("tasks").push({...taskInfo}).then((firebaseTask)=>{
            dispatch(addTaskAction({...taskInfo, taskId: firebaseTask.key}))
        })
    }
}

export const setTask = (listTask) => ({
    type: "SET_TASK",
    listTask
})

export const setTaskApi = () => {
    const listTask = [];
    return (dispatch)=>{
        // cái return này là để cho test
        return database.ref("tasks")
        .once("value")
        .then((snapshot)=>{
            snapshot.forEach((child)=>{
                listTask.push({
                    taskId: child.key,
                    ...child.val()
                })
            })
            dispatch(setTask(listTask))
        })
        .catch((e)=>{
            console.log("Error: ", e)
        })
    }
    
}
