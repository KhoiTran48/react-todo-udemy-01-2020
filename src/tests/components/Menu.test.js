import React from 'react'
import ReactShallowRenderer from 'react-test-renderer/shallow'
import Menu from '../../components/Menu'
import {shallow} from 'enzyme'

test("render Menu correctly", ()=>{
    // const redenerer = new ReactShallowRenderer();
    // redenerer.render(<Menu/>)
    // expect(redenerer.getRenderOutput()).toMatchSnapshot();

    const wrapper = shallow(<Menu/>)
    expect(wrapper.find("NavLink").length).toBe(2);

})