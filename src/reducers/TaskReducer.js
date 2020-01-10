
const taskReducer = (state=[], action) => {
    switch (action.type) {
        case "ADD_TASK":
            return [...state, action.data]
        case "EDIT_TASK":
            return state.map((task)=>{
                if(task.taskId === action.data.taskId){
                    return {...task, ...action.data}
                }else{
                    return task;
                }
            })
        case "DELETE_TASK":
            return state.filter((task)=>{
                return task.taskId !== action.data.taskId
            })
        default:
            return state
    }
}

export default taskReducer;