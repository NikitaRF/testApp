import {SET_INTERVAL_ID} from "../types";

export const setIntervalId = (id) => {
     return {
         type: SET_INTERVAL_ID,
         payload: id
    }
}

