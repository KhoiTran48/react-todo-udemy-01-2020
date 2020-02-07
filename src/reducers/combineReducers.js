import {combineReducers} from 'redux'
import TaskReducer from './TaskReducer'
import FilterReducer from './FilterReducer'
import AuthReducer from './AuthReducer'

const allReducer = combineReducers({listTask: TaskReducer, filter: FilterReducer, auth: AuthReducer})

export default allReducer