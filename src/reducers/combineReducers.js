import {combineReducers} from 'redux'
import TaskReducer from './TaskReducer'
import FilterReducer from './FilterReducer'

const allReducer = combineReducers({listTask: TaskReducer, filter: FilterReducer})

export default allReducer