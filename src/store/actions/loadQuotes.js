import {LOAD_QUOTES} from "../types";
import {getQuotes} from "../../getQuotes";


export const loadQuotes = () => {

    return async dispatch => {
        const allQuotes = await getQuotes()
        console.log(allQuotes)

        dispatch({
            type: LOAD_QUOTES,
            payload: allQuotes.quotesArr
        })
    }
}