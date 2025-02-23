import "./App.css"
import {useCallback, useEffect, useState} from "react";
import {ControlPanel} from "./Control Panel/ControlPanel.jsx";
import {Case} from "./components/Case/Case.jsx";
import {createCase, deleteCase, readCase, updateCase} from "./assets/api.jsx";
import {setCaseInCases} from "./utils/setCaseInCases.jsx";
import {removeCase} from "./utils/removeCase.jsx";
import {findCase} from "./utils/find-case.jsx";
import {addCaseInCases} from "./utils/addCaseInCases.jsx";
import {NEW_CASE_ID} from "./constants/newCaseId.jsx";
import {Context} from "./context.jsx";

export default function App() {

    const [cases, setCases] = useState([])
    const [searchPhrase, setSearchPhrase] = useState("")
    const [isAlphabetSorting, setIsAlphabetSorting] = useState(false)

    const [isLoading, setIsLoading] = useState(false)
    const [refreshCaseFlag, setRefreshCaseFlag] = useState(false)

    const refreshCase = useCallback(() => {
        setRefreshCaseFlag(!refreshCaseFlag)
    }, [refreshCaseFlag, setRefreshCaseFlag])

    useEffect(() => {
        readCase(searchPhrase, isAlphabetSorting)
            .then((loadedCases) => setCases(loadedCases))
            .catch(error => {
                console.log(error)
            })
            .finally(() => setIsLoading(false))

    }, [refreshCase, searchPhrase, isAlphabetSorting])

    const onCaseAdd = () => setCases(addCaseInCases(cases))

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
                setCases(updatedCases)
            })
        } else {
            updateCase({id: caseId, title}).then(() => {
                setCases(setCaseInCases(cases, {id: caseId, isEditing: false}))
            })
        }
    }

    const onCaseEdit = (id) => {
        setCases(setCaseInCases(cases, {id, isEditing: true}))
    }

    const onCaseChange = (id, newTitle) => {
        setCases(setCaseInCases(cases, {id, title: newTitle}))
    }

    const onCaseCompletedChange = (id, newCompleted) => {
        updateCase({id, completed: newCompleted}).then(() => {
            setCases(setCaseInCases(cases, {id, completed: newCompleted}))
        })
    }

    const onCaseRemove = (id) => {
        deleteCase(id).then(() => setCases(removeCase(cases, id)))
    }

    return (
        <div className="App">
            <h1>Список Задач</h1>
            <Context value={onCaseAdd}>
                <ControlPanel
                    onSearch={setSearchPhrase}
                    onSorting={setIsAlphabetSorting}
                />
            </Context>
            {
                isLoading ? (<div> Загрузка... </div>) : (
                    <div className="cases_one">
                        {cases.map(({id, title, completed, isEditing = false}) => (
                                <Context key={id} value={{title, completed, isEditing}}>
                                    <Case
                                        onChange={(newTitle) => onCaseChange(id, newTitle)}
                                        onCompletedChange={(newCompleted) =>
                                            onCaseCompletedChange(id, newCompleted)}
                                        onEdit={() => onCaseEdit(id)}
                                        onSave={() => onCaseSave(id)}
                                        onRemove={() => onCaseRemove(id)}/>
                                </Context>
                            )
                        )}
                    < /div>)
            }
        < /div>
    )
}
