export const setFilterTextAction = (text)=>(
    {
        type: "SET_TEXT",
        text
    }
)

export const setOrderAction = (order)=>(
    {
        type: "SET_ORDER",
        order
    }
)

export const setFiltertDateAction = (startDate, endDate) => (
    {
        type: "SET_DATE",
        startDate,
        endDate
    }
)
