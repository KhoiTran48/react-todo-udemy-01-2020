import selectTask from '../../selectors/tasks'
import listTask from '../fixtures/listTask'

test("select by text", ()=>{
    const filter = {
        text: "p",
        order: "asc",
        startDate: null,
        endDate: null
    }

    const result = selectTask(listTask, filter);
    expect(result).toEqual([listTask[1], listTask[2]])
})

test("select by start date", ()=>{
    const filter = {
        text: "",
        order: "asc",
        startDate: 2000,
        endDate: null
    }

    const result = selectTask(listTask, filter);
    expect(result).toEqual([listTask[2]])
})

test("select by end date", ()=>{
    const filter = {
        text: "",
        order: "asc",
        startDate: null,
        endDate: 1000
    }

    const result = selectTask(listTask, filter);
    expect(result).toEqual([listTask[0], listTask[1]])
})

test("order by deadline desc", ()=>{
    const filter = {
        text: "",
        order: "desc",
        startDate: null,
        endDate: null
    }

    const result = selectTask(listTask, filter);
    expect(result).toEqual([listTask[2], listTask[1], listTask[0]])
})
 