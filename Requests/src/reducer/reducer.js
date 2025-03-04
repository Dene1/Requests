import {initialState} from "./initialState.js";
import {
    RESET,
    SET_ALPHABET_SORTING,
    SET_CASES,
    SET_LOADING,
    SET_REFRESH_FLAG,
    SET_SEARCH_PHRASE
} from "../constants/constants.jsx";


export const appReducer = (state = initialState, action) => {
    const {type, payload} = action;

    switch (type) {
        case SET_CASES:
            return {
                ...state,
                cases: payload,
            }
        case SET_LOADING:
            return {
                ...state,
                isLoading: payload
            }
        case SET_SEARCH_PHRASE:
            return {
                ...state,
                searchPhrase: payload
            }
        case SET_ALPHABET_SORTING:
            return {
                ...state,
                isAlphabetSorting: payload
            }
        case SET_REFRESH_FLAG:
            return {
                ...state,
                refreshCaseFlag: payload
            }
        case RESET :
            return initialState
        default:
            return state;
    }
}
