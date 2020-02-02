import listTask from '../fixtures/listTask'
import taskReducer from '../../reducers/TaskReducer'
import uuid from 'uuid'

test("add task", ()=>{
    const newTask = {
        taskId: uuid(),
        title: "Go",
        desc: "new talent",
        deadline: 1000
    }
    const updateListTask = taskReducer(listTask, {type: "ADD_TASK", data: newTask})
    expect(updateListTask).toEqual([...listTask, newTask])
})

test("edit by existing id", ()=>{
    const updateTask = {
        taskId: listTask[0].taskId,
        title: "JS-Update",
        desc: "Update",
        deadline: 5000
    }
    const updateListTask = taskReducer(listTask, {type: "EDIT_TASK", data: updateTask})
    expect(updateListTask).toEqual([updateTask, listTask[1], listTask[2]])
})

test("edit by no existing id", ()=>{
    const updateTask = {
        taskId: -1,
        title: "JS-Update",
        desc: "Update",
        deadline: 5000
    }
    const updateListTask = taskReducer(listTask, {type: "EDIT_TASK", data: updateTask})
    expect(updateListTask).toEqual(listTask)
})

test("delete by existing id", ()=>{
    const taskId = listTask[0].taskId;
    const updateListTask = taskReducer(listTask, {type: "DELETE_TASK", data: {taskId}})
    expect(updateListTask).toEqual([listTask[1], listTask[2]])
})

test("delete by no existing id", ()=>{
    const taskId = -1;
    const updateListTask = taskReducer(listTask, {type: "DELETE_TASK", data: {taskId}})
    expect(updateListTask).toEqual(listTask)
})

test("set task", ()=>{
    const listTaskStore = taskReducer([], {type:"SET_TASK", listTask})
    expect(listTaskStore).toEqual(listTask)
})
