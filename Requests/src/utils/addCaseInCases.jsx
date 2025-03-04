import {NEW_CASE_ID} from "../constants/constants.jsx";

export const addCaseInCases = (cases, casee) => {
    const newCase = casee || {
        id: NEW_CASE_ID,
        title: "",
        completed: false,
        isEditing: true
    }

    return [newCase, ...cases]
}
