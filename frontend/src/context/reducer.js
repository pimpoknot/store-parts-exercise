import { 
    GET_JOBS_BEGIN,
    GET_JOBS_SUCCESS,
    PRICE_ORDER_SUCCESS,
    PRICE_ORDER_BEGIN,
    ASCENDING_PRICE_TRUE,
    ASCENDING_PRICE_FALSE
 } from "./action";

import { initialState } from "./AppContext";

const reducer = (state, action) => {
    if(action.type === GET_JOBS_BEGIN) {
        return {
            ...state,
            isLoading: true
        }
    }
    
    if(action.type === GET_JOBS_SUCCESS) {
       return {
        ...state,
        isLoading: false
       }
    }

}

export default reducer
