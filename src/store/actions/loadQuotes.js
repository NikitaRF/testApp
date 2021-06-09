import {LOAD_QUOTES} from "../types";




export const loadQuotes = () => {

    const getQuotes = async () => {
        try {
            const response = await fetch(`https://poloniex.com/public?command=returnTicker`,{
                method: 'GET',
            } )
            const data = await response.json()
            const quotesArr = Object.keys(data).map((key) => {
                return {
                    id: data[key].id,
                    [key]: {
                        last: data[key].last,
                        highestBid: data[key].highestBid,
                        percentChange: data[key].percentChange,
                    }
                }
            })

            return quotesArr
        } catch (e) {

            console.log(e)
        }
    }


    return {
        type: LOAD_QUOTES,
        payload: getQuotes()
    }
}