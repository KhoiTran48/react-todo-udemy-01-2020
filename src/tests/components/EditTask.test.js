import React from 'react'
import {shallow} from 'enzyme'
import {EditTask} from '../../components/EditTask'
import listTask from '../fixtures/listTask'

let editTaskApiProp, deleteTaskApiProp, wrapper, history;

beforeEach(()=>{
    editTaskApiProp = jest.fn();
    deleteTaskApiProp = jest.fn();
    history = {push: jest.fn()}
    wrapper = shallow(<EditTask editTask={listTask[0]} editTaskApiProp={editTaskApiProp} deleteTaskApiProp={deleteTaskApiProp} history={history}/>)
})

test("render", ()=>{
    expect(wrapper).toMatchSnapshot();
})

test("edit task", ()=>{
    wrapper.find("TaskForm").props().handleSubmit(listTask[0]);
    expect(editTaskApiProp).toHaveBeenLastCalledWith(listTask[0]);
    expect(history.push).toHaveBeenLastCalledWith("/")
})

test("delete task", ()=>{
    wrapper.find("button").props().onClick();
    // wrapper.find("button").simulate("click");
    expect(deleteTaskApiProp).toHaveBeenLastCalledWith(listTask[0].taskId);
    expect(history.push).toHaveBeenLastCalledWith("/")
})

