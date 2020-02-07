import React from 'react'
import ReactShallowRenderer from 'react-test-renderer/shallow'
import {Menu} from '../../components/Menu'
import {shallow} from 'enzyme'

test("render Menu correctly", ()=>{
    // const redenerer = new ReactShallowRenderer();
    // redenerer.render(<Menu/>)
    // expect(redenerer.getRenderOutput()).toMatchSnapshot();

    const wrapper = shallow(<Menu/>)
    expect(wrapper.find("NavLink").length).toBe(2);

})

test("click sign out", ()=>{
    const signOut = jest.fn();
    const wrapper = shallow(<Menu signOut={signOut} />)
    wrapper.find("button").simulate("click");
    expect(signOut).toHaveBeenCalled()
})
