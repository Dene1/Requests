import {HTTP_METHODS} from "../constants/http-method.jsx"

const fetchServer = (method, {id, ...payload} = {}) => {
    console.log("fetchServer - method:", method, "payload:", payload);
    let url = `http://localhost:3005/tasks`

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
            : ""
        url += `?${sortingParams}&title_like=${searchPhrase}`
    } else {
        if (method !== HTTP_METHODS.POST) {
            url += `/${id}`
        }

        if (method !== HTTP_METHODS.DELETE) {
            options.body = JSON.stringify(payload)
        }
    }
    return fetch(url, options).then((jsonData) => {
            console.log("fetchServer - fetch URL:", url, "options:", options);
            return jsonData.json()
        }
    )
}

export const createCase = (newCase) => fetchServer("POST", newCase)

export const readCase = (searchPhrase = "", isAlphabetSorting = false) =>
    fetchServer("GET", {
        searchPhrase,
        isAlphabetSorting
    })

export const updateCase = ({
                               id,
                               title,
                               completed,
                               ...updCase
                           }) => fetchServer("PATCH", {id, title, completed, ...updCase})

export const deleteCase = (CaseId) => fetchServer("DELETE", {id: CaseId})
