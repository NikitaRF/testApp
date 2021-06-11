import {LOAD_QUOTES, SET_SCREEN_QUOTES} from "../types";

export const setScreenQuotes = () => {
     return {
         type: SET_SCREEN_QUOTES,
         payload: true
    }
}

