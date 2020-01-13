import {addTaskAction, editTaskAction} from '../../actions/taskAction'

test("add task", ()=>{
    const task = {title: "Title", desc: "Description"}
    const actual = addTaskAction(task)
    expect(actual).toEqual({
        type: "ADD_TASK",
        data: {
            ...task,
            taskId: expect.any(String)
        }
    })
})

test("edit task", ()=>{
    const task = {title: "Title Update", desc: "Description"}
    const actual = editTaskAction(task)
    expect(actual).toEqual({
        type: "EDIT_TASK",
        data: task
    })
})



