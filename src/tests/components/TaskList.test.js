import React from 'react'
import {TaskList} from '../../components/TaskList'
import {shallow} from 'enzyme'
import listTask from '../fixtures/listTask'

test("render task list", ()=>{
    const setTaskApiProp = jest.fn();
    const wrapper = shallow(<TaskList listTask={listTask} setTaskApiProp={setTaskApiProp}/>)
    expect(wrapper).toMatchSnapshot();
})