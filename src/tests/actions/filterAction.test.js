import {setFilterTextAction, setOrderAction, setFilterDateAction} from '../../actions/filterAction'
import moment from 'moment'

test("set text", ()=>{
    const text = "Khoi ne";
    const filterTextActionObj = setFilterTextAction(text);
    expect(filterTextActionObj).toEqual({
        type: "SET_TEXT",
        text
    })
})

test("set order", ()=>{
    const order = "asc";
    const filterOrderActionObj = setOrderAction(order);
    expect(filterOrderActionObj).toEqual({
        type: "SET_ORDER",
        order
    })
})

test("set date", ()=>{
    const startDate = moment(0);
    const endDate = moment(0);
    const filterDateActionObj = setFilterDateAction(startDate, endDate);
    expect(filterDateActionObj).toEqual({
        type: "SET_DATE",
        startDate,
        endDate
    })
})
