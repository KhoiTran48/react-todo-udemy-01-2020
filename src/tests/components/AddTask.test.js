import React from 'react'
import {AddTask} from '../../components/AddTask'
import {shallow} from 'enzyme'
import listTask from '../fixtures/listTask'

let addTaskApi, history, wrapper;
beforeEach(()=>{
    addTaskApi = jest.fn();
    history = {push: jest.fn()}
    wrapper = shallow(<AddTask addTaskApiProp={addTaskApi} history={history}/>)
})

test("render AddTask", ()=>{
    expect(wrapper).toMatchSnapshot(); 
})

test("handle submit", ()=>{
    wrapper.find("TaskForm").prop("handleSubmit")(listTask[0]);
    expect(history.push).toHaveBeenLastCalledWith("/");
    expect(addTaskApi).toHaveBeenLastCalledWith(listTask[0]);
})

