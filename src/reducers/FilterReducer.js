
const init = {
    text: "",
    order: "asc",
    startDate: null,
    endDate: null
}

const filterReducer = (state=init, action)=>{
    switch (action.type) {
        case "SET_TEXT":
            return {...state, text: action.text};
        case "SET_ORDER":
            return {...state, order: action.order};
        case "SET_DATE":
            return {...state, startDate: action.startDate, endDate: action.endDate};
        default:
            return state;
    }
}

 export default filterReducer;