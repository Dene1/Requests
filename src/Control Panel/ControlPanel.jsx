import {Button} from "../components/button/button.jsx"
import {Search} from "./components/search.jsx"
import {Sorting} from "./components/sorting.jsx"

export const ControlPanel = ({onCaseAdd, onSearch, onSorting}) => {
    return (
        <div className="panel">
            <Search onSearch={onSearch}/>
            <Sorting onSorting={onSorting}/>

            <Button className="button"
                    onClick={onCaseAdd}
                    type="button"
            >
                ➕
            </Button>
        </div>
    )
}

