import React from 'react'
import {TaskList} from '../../components/TaskList'
import {shallow} from 'enzyme'
import listTask from '../fixtures/listTask'

test("render task list", ()=>{
    const wrapper = shallow(<TaskList listTask={listTask}/>)
    expect(wrapper).toMatchSnapshot();
})