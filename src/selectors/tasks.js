const selectTask = (listTask, filter) => {
    return listTask.filter(task=>{
        const startDateMatch = typeof filter.startDate !== "number" || task.deadline >= filter.startDate
        const endDateMatch = typeof filter.endDate !== "number" || task.deadline <= filter.endDate
        const textMatch = task.title.toLowerCase().indexOf(filter.text.toLowerCase()) >= 0
        return startDateMatch && endDateMatch && textMatch
    })
    .sort((a,b)=>{
        if(filter.order.toLowerCase() == "asc"){
            return a.deadline < b.deadline ? -1 : 1;
        }else{
            return a.deadline < b.deadline ? 1 : -1;
        }
    })
}

export default selectTask;