import moment from 'moment'

const filter = {
    text: "",
    order: "asc",
    startDate: null,
    endDate: null
}

const updateFilter = {
    text: "update",
    order: "desc",
    startDate: moment(0),
    endDate: moment(0).add(3, 'days')
}

export {filter, updateFilter}