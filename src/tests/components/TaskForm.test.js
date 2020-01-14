import React from 'react'
import TaskForm from '../../components/TaskForm'
import {shallow} from 'enzyme'

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