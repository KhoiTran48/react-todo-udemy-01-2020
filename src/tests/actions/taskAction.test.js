import configureMockStore from 'redux-mock-store'
import thunk from 'redux-thunk'
import {addTaskApi, addTaskAction, editTaskAction} from '../../actions/taskAction'
import {database} from '../../firebase/firebase'

const createMockStore = configureMockStore([thunk])

test("add task to firebase and store", (done)=>{

    // store giả lập, cũng có các method getStore, dispatch, subscrible
    const store = createMockStore({});

    const newTask = {title: "Title", desc: "Description", deadline: 123}
    store.dispatch(addTaskApi(newTask)).then(()=>{

        // lấy các actions được dispatch vào store
        const actions = store.getActions();
        expect(actions[0]).toEqual({type:"ADD_TASK", data:{taskId: expect.any(String), ...newTask}})

        // lấy data từ firebase và so sánh
        database.ref(`tasks/${actions[0].data.taskId}`).once("value").then((snapshot)=>{
            expect(snapshot.val()).toEqual(newTask)
            done()
            // cái này quan trọng nè, để jest biết các async action đã thực hiện song
                // có thể bắt đầu so sánh
        })
    });
})

test("add task", ()=>{
    const task = {title: "Title", desc: "Description"}
    const actual = addTaskAction(task)
    expect(actual).toEqual({
        type: "ADD_TASK",
        data: {
            ...task,
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



