import React from 'react'
import TaskForm from '../../components/TaskForm'
import {shallow} from 'enzyme'
import listTask from '../fixtures/listTask'

test("render task form", ()=>{
    const wrapper = shallow(<TaskForm/>)
    expect(wrapper).toMatchSnapshot();
})

test("change state: title", ()=>{
    const title = "New title";
    const wrapper = shallow(<TaskForm/>);
    const event = {
        target: {
            name: "title",
            value: title
        }
    }
    // wrapper.find("input").at(1).simulate("change",{    
    wrapper.find("input[name='title']").simulate("change",event)
    expect(wrapper.state("title")).toBe(title)
})

test("call onSubmit prop", ()=>{
    const onSubmitSpy = jest.fn();
    const wrapper = shallow(<TaskForm  {...listTask[0]} handleSubmit={onSubmitSpy}/>)
    wrapper.find("button").simulate("click");
    expect(onSubmitSpy).toHaveBeenLastCalledWith(listTask[0]);
})

test("update state deadline", ()=>{
    const title = "New title";
    const event = {
        target: {
            name: "title",
            value: title
        }
    }
    const wrapper = shallow(<TaskForm/>);
    wrapper.find("input").at(0).props().onChange(event)
    expect(wrapper.state("title")).toBe(title)

    // code nay chua chay, k tim thay SingleDatePicker
    // wrapper.find("SingleDatePicker").prop("onDateChange")(now)
    // expect(wrapper.state("deadline")).toEqual(now)

})