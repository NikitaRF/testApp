import {LOAD_QUOTES, SET_LOADING} from "../types";
import {getQuotes} from "../../getQuotes";


export const loadQuotes = () => {

    return async dispatch => {
        try {
            const allQuotes = await getQuotes()
            console.log('Мы получаем котировки')
            dispatch({
                type: LOAD_QUOTES,
                payload: allQuotes.quotesArr
            })
        } catch (e) {
            console.log("Возникла ошибка при загрузке данных с сервера! ", e)
            dispatch({
                type: SET_LOADING,
            })
        }



    }
}