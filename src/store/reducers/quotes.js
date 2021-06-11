import {LOAD_QUOTES, SET_SCREEN_QUOTES} from "../types";

const initialState = {
    quotes: [],
    screenQuotes: false,
}


export const quotesReducer = (state = initialState, action) => {
    switch (action.type){

        case LOAD_QUOTES: return {
            quotes: action.payload,
        }

        case SET_SCREEN_QUOTES: return {
            screenQuotes: action.payload
        }

        default: return state
    }

    return state
}