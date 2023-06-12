import {combineReducers} from 'redux'
import categoryReducer from './categoryReducer'
import brandReducer from './brandReducers'

export default combineReducers({
    allCategory:categoryReducer,
    allBrand:brandReducer,
})