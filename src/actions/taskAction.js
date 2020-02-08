import {database} from '../firebase/firebase'

export const addTaskAction = (newTask) => ({
    type : "ADD_TASK",
    data : newTask
})

export const addTaskApi = (newTask) => {
    const {taskId, focused, ...taskInfo} = newTask;
    return (dispatch, getState) => {
        const uid = getState().auth.uid;
        // cái return này là để cho test
        return database.ref(`users/${uid}/tasks`).push({...taskInfo}).then((firebaseTask)=>{
            dispatch(addTaskAction({...taskInfo, taskId: firebaseTask.key}))
        })
    }
}

export const editTaskAction = (editTask) => ({
    type: "EDIT_TASK",
    data: editTask
})

export const editTaskApi = (editTask) => {
    const {taskId, focused, ...updateTask} = editTask;
    return (dispatch, getState) => {
        const uid = getState().auth.uid;
        database.ref(`users/${uid}/tasks/${editTask.taskId}`).update(updateTask).then(()=>{
            dispatch(editTaskAction(editTask))
        })
    }
}

export const deleteTaskAction = (taskId) => ({
    type: "DELETE_TASK",
    data: {
        taskId
    }
})

export const deleteTaskApi = (taskId) => {
    return (dispatch, getState) => {
        const uid = getState().auth.uid;
        return database.ref(`users/${uid}/tasks/${taskId}`).remove().then(()=>{
            dispatch(deleteTaskAction(taskId))
        })
    }
    // database.ref(`tasks/${taskId}`).remove()
    // return {type:""}
}


export const setTask = (listTask) => ({
    type: "SET_TASK",
    listTask
})

export const setTaskApi = () => {
    const listTask = [];
    return (dispatch, getState)=>{
        const uid = getState().auth.uid;
        // cái return này là để cho test
        return database.ref(`users/${uid}/tasks`)
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
