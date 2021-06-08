import {LOAD_QUOTES} from "../types";




export const loadQuotes = () => {

    const getQuotes = async () => {
        try {
            const response = await fetch(`https://poloniex.com/public?command=returnTicker`,{
                method: 'GET',
            } )
            const data = await response.json()
            console.log(data)

            return data
        } catch (e) {

            console.log(e)
        }
    }


    return {
        type: LOAD_QUOTES,
        payload: getQuotes()
    }
}