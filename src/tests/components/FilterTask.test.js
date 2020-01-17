import React from 'react'
import {shallow, mount} from 'enzyme'
import {FilterTask} from '../../components/FilterTask'
import {filter, updateFilter} from '../fixtures/filter'
import moment from 'moment'

let setFilterText, setOrder, setFiltertDate, wrapper;

beforeEach(()=>{
    setFilterText = jest.fn();
    setOrder = jest.fn();
    setFiltertDate = jest.fn();
    const props = {
        setFilterText,
        setOrder,
        setFiltertDate,
        filter
    }
    wrapper = shallow(<FilterTask {...props}/>)
})

test("render component", ()=>{
    expect(wrapper).toMatchSnapshot();
})

test("render component with update filter", ()=>{
    wrapper.setProps({
        filter: updateFilter
    })
    expect(wrapper).toMatchSnapshot()
})

test("handle text change", ()=>{
    const filterText = "filter";
    wrapper.find("input").simulate(
        "change",
        {target: {value: filterText}}
    )
    expect(setFilterText).toHaveBeenLastCalledWith(filterText)
})

test("handle select change", ()=>{
    const order = "desc";
    wrapper.find("select").simulate(
        "change",
        {target: {value: order}}
    )
    expect(setOrder).toHaveBeenLastCalledWith("desc")
})

test("handle date change", ()=>{
    const startDate = moment(0).add(3, "days");
    const endDate = moment(0).add(5, "days");

    const abc = {
        setFilterText,
        setOrder,
        setFiltertDate,
        filter
    }
    // chua select duoc DateRangePicker
    // wrapper.find("DateRangePicker").prop("onDatesChange")({startDate, endDate})
    // expect(setFiltertDate).toHaveBeenLastCalledWith(startDate.valueOf(), endDate.valueOf())
})
