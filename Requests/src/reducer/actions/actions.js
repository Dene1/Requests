import {
    SET_ALPHABET_SORTING,
    SET_CASES,
    SET_LOADING,
    SET_REFRESH_FLAG,
    SET_SEARCH_PHRASE
} from "../../constants/constants.jsx";

export const setCases = (cases) => {
    return {
        type: SET_CASES,
        payload: cases
    }
}

export const setIsLoading = (isLoading) => {
    return {
        type: SET_LOADING,
        payload: isLoading
    }
}

export const setSearchPhrase = (phrase) => {
    return {
        type: SET_SEARCH_PHRASE,
        payload: phrase
    }
}

export const setIsAlphabetSorting = (search) => {
    return {
        type: SET_ALPHABET_SORTING,
        payload: search
    }
}

export const setRefreshCaseFlag = (flag) => {
    return {
        type: SET_REFRESH_FLAG,
        payload: flag
    }
}
