import React from 'react'
import ReactShallowRenderer from 'react-test-renderer/shallow'
import Menu from '../../components/Menu'

test("render Menu correctly", ()=>{
    const redenerer = new ReactShallowRenderer();
    redenerer.render(<Menu/>)
    // console.log(redenerer.getRenderOutput());
    expect(redenerer.getRenderOutput()).toMatchSnapshot();
})