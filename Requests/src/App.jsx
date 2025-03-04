import "./App.css"
import {useCallback, useEffect} from "react";
import {ControlPanel} from "./components/Control Panel/ControlPanel.jsx";
import {Case} from "./components/Case/Case.jsx";
import {createCase, deleteCase, readCase, updateCase} from "./assets/api.jsx";
import {setCaseInCases} from "./utils/setCaseInCases.jsx";
import {removeCase} from "./utils/removeCase.jsx";
import {findCase} from "./utils/find-case.jsx";
import {addCaseInCases} from "./utils/addCaseInCases.jsx";
import {NEW_CASE_ID} from "./constants/constants.jsx";
import {useDispatch, useSelector} from "react-redux";
import {setCases, setIsLoading, setRefreshCaseFlag} from "./reducer/actions/actions.js";

export default function App() {
    const cases = useSelector(state => state.cases);
    const searchPhrase = useSelector(state => state.searchPhrase);
    const isLoading = useSelector(state => state.isLoading);
    const isAlphabetSorting = useSelector(state => state.isAlphabetSorting);
    const refreshCaseFlag = useSelector(state => state.refreshCaseFlag);

    const dispatch = useDispatch();

    const refreshCase = useCallback(() => {
        dispatch(setRefreshCaseFlag(!refreshCaseFlag))
    }, [refreshCaseFlag, setRefreshCaseFlag])

    useEffect(() => {
        dispatch(setIsLoading(true));

        readCase(searchPhrase, isAlphabetSorting)
            .then((loadedCases) => dispatch(setCases(loadedCases)))
            .finally(() => dispatch(setIsLoading(false)))

    }, [refreshCase, searchPhrase, isAlphabetSorting])

    const onCaseSave = (caseId) => {
        const {title, completed} = findCase(cases, caseId) || {}

        if (caseId === NEW_CASE_ID) {
            createCase({title, completed}).then((casee) => {
                let updatedCases = setCaseInCases(cases, {
                    id: NEW_CASE_ID,
                    isEditing: false
                })
                updatedCases = removeCase(updatedCases, NEW_CASE_ID)
                updatedCases = addCaseInCases(updatedCases, casee)
                dispatch(setCases(updatedCases))
            })
        } else {
            updateCase({id: caseId, title}).then(() => {
                dispatch(setCases(setCaseInCases(cases, {id: caseId, isEditing: false})))
            })
        }
    }

    const onCaseEdit = (id) => {
        dispatch(setCases(setCaseInCases(cases, {id, isEditing: true})))
    }

    const onCaseChange = (id, newTitle) => {
        dispatch(setCases(setCaseInCases(cases, {id, title: newTitle})))
    }

    const onCaseCompletedChange = (id, newCompleted) => {
        updateCase({id, completed: newCompleted})
            .then(() => {
                dispatch(setCases(setCaseInCases(cases, {id, completed: newCompleted})))
            })
    }

    const onCaseRemove = (id) => {
        deleteCase(id).then(() => setCases(removeCase(cases, id)))
        refreshCase()
    }

    return (
        <div className="App">
            <h1>Список Задач</h1>
            <ControlPanel/>
            {isLoading ? (<div> Загрузка... </div>) : (
                <div className="cases_one">
                    {cases.map(({id}) => (
                        <Case
                            key={id}
                            id={id}
                            onChange={(newTitle) => onCaseChange(id, newTitle)}
                            onCompletedChange={(newCompleted) =>
                                onCaseCompletedChange(id, newCompleted)}
                            onEdit={() => onCaseEdit(id)}
                            onSave={() => onCaseSave(id)}
                            onRemove={() => onCaseRemove(id)}/>)
                    )}
                < /div>)}
        < /div>
    )
}
