import { createStore, combineReducers } from "redux";
import { quotesReducer } from "./reducers/quotes";


const rootReducer = combineReducers({
    quotes: quotesReducer
})

export default createStore(rootReducer)
