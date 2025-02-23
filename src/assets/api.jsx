import {HTTP_METHODS} from "../constants/http-method.jsx"

const fetchServer = (method, {id, ...payload} = {}) => {

    let url = `http://localhost:3005/posts`

    let options = {
        method,
        headers: {
            "Content-Type": "application/json"
        },
    }

    if (method === HTTP_METHODS.GET) {
        const {searchPhrase, isAlphabetSorting} = payload
        const sortingParams = isAlphabetSorting
            ? `_sort=title&__order=asc`
            : "_sort=id&_order=desc"
        url += `?${sortingParams}&title_like=${searchPhrase}`
    } else {
        if (method !== HTTP_METHODS.POST) {
            url += `/${id}`
        }

        if (method !== HTTP_METHODS.DELETE) {
            options.body = JSON.stringify(payload)
        }
    }

    return fetch(url, options).then((jsonData) => jsonData.json())
}

export const createCase = (newCase) => fetchServer("POST", newCase)

export const readCase = (searchPhrase = "", isAlphabetSorting = false) =>
    fetchServer("GET", {
        searchPhrase,
        isAlphabetSorting
    })

export const updateCase = (updCase) => fetchServer("PATCH", updCase)

export const deleteCase = (CaseId) => fetchServer("DELETE", {id: CaseId})


