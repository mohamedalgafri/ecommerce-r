import {combineReducers} from 'redux'
import categoryReducer from './categoryReducer'
import brandReducer from './brandReducers'
import subCategoryReducer from './subCategoryReducer'
import poroductReducer from './productReducers'

export default combineReducers({
    allCategory:categoryReducer,
    allBrand:brandReducer,
    subCategory:subCategoryReducer,
    allProducts:poroductReducer,
})