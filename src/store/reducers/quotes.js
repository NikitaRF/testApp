import {LOAD_QUOTES} from "../types";

const initialState = {
    quotes: [],
}


export const quotesReducer = (state = initialState, action) => {
    switch (action.type){

        case LOAD_QUOTES: return {
            quotes: action.payload,
        }
        default: return state
    }

    return state
}