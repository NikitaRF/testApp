import {LOAD_QUOTES} from "../types";

const initialState = {
    quotes: {},
}


export const quotesReducer = (state = initialState, action) => {
    switch (action.type){

        // если это действие, тогда мы берем стейт, разворавичавем его при помощи оператора spread,
        // и заменяем в нем определенные поля
        case LOAD_QUOTES: return {
            ...state,
            quotes: action.payload,
        }
        default: return state
    }

    return state
}