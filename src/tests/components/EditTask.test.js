import React from 'react'
import {shallow} from 'enzyme'
import {EditTask} from '../../components/EditTask'
import listTask from '../fixtures/listTask'

let editTaskAction, deleteTaskAction, wrapper, history;

beforeEach(()=>{
    editTaskAction = jest.fn();
    deleteTaskAction = jest.fn();
    history = {push: jest.fn()}
    wrapper = shallow(<EditTask editTask={listTask[0]} editTaskAction={editTaskAction} deleteTaskAction={deleteTaskAction} history={history}/>)
})

test("render", ()=>{
    expect(wrapper).toMatchSnapshot();
})

test("edit task", ()=>{
    wrapper.find("TaskForm").props().handleSubmit(listTask[0]);
    expect(editTaskAction).toHaveBeenLastCalledWith(listTask[0]);
    expect(history.push).toHaveBeenLastCalledWith("/")
})

test("delete task", ()=>{
    wrapper.find("button").props().onClick();
    // wrapper.find("button").simulate("click");
    expect(deleteTaskAction).toHaveBeenLastCalledWith(listTask[0].taskId);
    expect(history.push).toHaveBeenLastCalledWith("/")
})

