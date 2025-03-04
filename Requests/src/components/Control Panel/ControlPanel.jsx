import {Button} from "../button/button.jsx"
import {Search} from "./components/search.jsx"
import {Sorting} from "./components/sorting.jsx"
import {setCases} from "../../reducer/actions/actions.js";
import {addCaseInCases} from "../../utils/addCaseInCases.jsx";
import {useDispatch, useSelector} from "react-redux";

export const ControlPanel = () => {
    const dispatch = useDispatch();
    const cases = useSelector(state => state.cases);

    const onCaseAdd = () => dispatch(setCases(addCaseInCases(cases)))

    return (
        <div className="panel">
            <Search/>
            <Sorting/>

            <Button className="button"
                    onClick={onCaseAdd}
                    type="button"
            >
                ➕
            </Button>
        </div>
    )
}
