import filterReducer from '../../reducers/FilterReducer'

test("default reducer", ()=>{
    const state = filterReducer(undefined, {type: "DEFAULT"})
    expect(state).toEqual({
        text: "",
        order: "asc",
        startDate: null,
        endDate: null
    })
})

test("set text reducer", ()=>{
    const state = filterReducer(undefined, {type: "SET_TEXT", text: "search text"})
    expect(state.text).toEqual("search text")
})

test("update start date", ()=>{
    const currentState = {
        text: "",
        order: "asc",
        startDate: 1000,
        endDate: 2000
    }
    const updateState = filterReducer(currentState, {type: "SET_DATE", startDate: 2000})
    expect(updateState.startDate).toEqual(2000)
})


