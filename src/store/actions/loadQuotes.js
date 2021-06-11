import {LOAD_QUOTES} from "../types";
import {getQuotes} from "../../test";




export const loadQuotes = () => {

    return async dispatch => {
        const allQuotes = await getQuotes()

        dispatch({
            type: LOAD_QUOTES,
            payload: allQuotes.quotesArr
        })
    }


    // const getQuotes = async () => {
    //     try {
    //         const response = await fetch(`https://poloniex.com/public?command=returnTicker`,{
    //             method: 'GET',
    //         })
    //         const data = await response.json()
    //         const quotesArr = Object.keys(data).map((key) => {
    //             return {
    //                 id: data[key].id,
    //                 [key]: {
    //                     last: data[key].last,
    //                     highestBid: data[key].highestBid,
    //                     percentChange: data[key].percentChange,
    //                 }
    //             }
    //         })
    //         return {
    //             quotesArr
    //         }
    //     } catch (e) {
    //
    //         console.log(e)
    //     }
    // }
    //
    // return {
    //     type: LOAD_QUOTES,
    //     payload: [{id: 1}]
    // }
}