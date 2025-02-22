import {useRef, useState} from "react";
import {debounce} from "./utils/debounce.jsx";

export const Search = ({onSearch}) => {
    const [value, setValue] = useState("")

    const debouncedSearch = useRef(debounce(onSearch, 1500)).current

    const onChange = ({target}) => {
        setValue(target.value)
        debouncedSearch(target.value)
    }

    const onSubmit = (event) => {
        event.preventDefault()
        onSearch(value)
    }

    return (
        <form onSubmit={onSubmit}>
            <input
                className="search"
                type="text"
                value={value}
                placeholder="Enter the task for searching ... 🔎"
                onChange={onChange}
            />
        </form>
    )
}
