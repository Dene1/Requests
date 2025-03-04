import {useRef, useState} from "react";
import {debounce} from "./utils/debounce.jsx";
import {setSearchPhrase} from "../../../reducer/actions/actions.js";
import {useDispatch} from "react-redux";

export const Search = () => {
    const [value, setValue] = useState("")
    const dispatch = useDispatch();


    const debouncedSearch = useRef(debounce((val) => dispatch(setSearchPhrase(val)), 1500)).current

    const onChange = ({target}) => {
        setValue(target.value)
        debouncedSearch(target.value)
    }

    const onSubmit = (event) => {
        event.preventDefault()
        dispatch(setSearchPhrase(value))
    }

    return (
        <form onSubmit={onSubmit}>
            <input
                className="search"
                type="text"
                value={value}
                placeholder="Поиск..."
                onChange={onChange}
            />
        </form>
    )
}
