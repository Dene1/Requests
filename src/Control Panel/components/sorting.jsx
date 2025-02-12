import {useState} from "react";
import {Button} from "../../components/button/button.jsx";

export const Sorting = ({onSorting}) => {

    const [isEnabled, setIsEnabled] = useState(false)

    const onChange = ({target}) => {
        setIsEnabled(target.checked)
        onSorting(target.checked)
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
