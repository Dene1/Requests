import {useState} from "react";
import {Button} from "../../button/button.jsx";
import {setIsAlphabetSorting} from "../../../reducer/actions/actions.js";
import {useDispatch} from "react-redux";

export const Sorting = () => {

    const [isEnabled, setIsEnabled] = useState(false)
    const dispatch = useDispatch()

    const onChange = ({target}) => {
        setIsEnabled(target.checked)
        dispatch(setIsAlphabetSorting(target.checked))
    }

    return (
        <Button className="sorting">
            <input
                className="checkbox1"
                id="sorting-button"
                type="checkbox"
                checked={isEnabled}
                onChange={onChange}
            />
            <label htmlFor="sorting-button">A&darr;</label>
        </Button>
    )
}
