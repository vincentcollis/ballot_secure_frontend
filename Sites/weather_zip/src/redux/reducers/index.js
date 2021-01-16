import { combineReducers } from "redux";

import searchDataReducer from './searchDataReducer'

export default combineReducers({
    search: searchDataReducer
})