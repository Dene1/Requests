import {Search} from "./components/search.jsx";
import {Button} from "../components/button/button.jsx";
import {Sorting} from "./components/sorting.jsx";

export const ControlPanel = ({
                                 onCaseAdd,
                                 onSearch,
                                 onSorting,
                             }) => {
    return (
        <div className="panel">
            <Search onSearch={onSearch}/>

            <Button className="buttons"
                    onClick={onCaseAdd}
                    type="button"
            >
                Add Case ➕
            </Button>

            <Sorting onSorting={onSorting}/>
        </div>
    )
}
