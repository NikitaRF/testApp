import {LOAD_QUOTES, SET_INTERVAL_ID, SET_LOADING} from "../types";


const initialState = {
    quotes: [],
    intervalId: null,
    loading: true,
}


export const quotesReducer = (state = initialState, action) => {
    switch (action.type){

        case LOAD_QUOTES: return {
            ...state,
            quotes: action.payload,
            loading: false
        }

        case SET_INTERVAL_ID: return {
            intervalId: action.payload,
            loading: false,
        }

        case SET_LOADING: return {
            ...state,
            loading: true,
        }

        default: return state
    }

    return state
}