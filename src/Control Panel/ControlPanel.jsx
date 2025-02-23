import {Button} from "../components/button/button.jsx"
import {Search} from "./components/search.jsx"
import {Sorting} from "./components/sorting.jsx"
import {useContext} from "react";
import {Context} from "../context.jsx";


export const ControlPanel = ({onSearch, onSorting}) => {

    const onCaseAdd = useContext(Context)

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

