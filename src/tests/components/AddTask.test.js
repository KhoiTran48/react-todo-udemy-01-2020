import React from 'react'
import {AddTask} from '../../components/AddTask'
import {shallow} from 'enzyme'
import listTask from '../fixtures/listTask'

let addTaskAction, history, wrapper;
beforeEach(()=>{
    addTaskAction = jest.fn();
    history = {push: jest.fn()}
    wrapper = shallow(<AddTask addTaskAction={addTaskAction} history={history}/>)
})

test("render AddTask", ()=>{
    expect(wrapper).toMatchSnapshot(); 
})

test("handle submit", ()=>{
    wrapper.find("TaskForm").prop("handleSubmit")(listTask[0]);
    expect(history.push).toHaveBeenLastCalledWith("/");
    expect(addTaskAction).toHaveBeenLastCalledWith(listTask[0]);
})

