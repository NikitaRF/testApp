import {LOAD_QUOTES, SET_INTERVAL_ID} from "../types";

const initialState = {
    quotes: [],
    intervalId: null
}


export const quotesReducer = (state = initialState, action) => {
    switch (action.type){

        case LOAD_QUOTES: return {
            ...state,
            quotes: action.payload,
        }

        case SET_INTERVAL_ID: return {
            intervalId: action.payload
        }

        default: return state
    }

    return state
}