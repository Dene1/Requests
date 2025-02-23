import {Button} from "../button/button.jsx";
import {useContext} from "react";
import {Context} from "../../context.jsx"


export const Case = ({
                         onSave,
                         onChange,
                         onCompletedChange,
                         onEdit,
                         onRemove
                     }) => {
    const {title, completed, isEditing} = useContext(Context)

    return (
        <div className="cases">
            <input
                className="checkbox"
                type="checkbox"
                checked={completed}
                onChange={({target}) => onCompletedChange(target.checked)}
            />
            <div className="caseTitle">
                {isEditing ? (
                    <input
                        type="text"
                        value={title}
                        onChange={({target}) => onChange(target.value)}
                    />
                ) : (
                    <div onClick={onEdit}>{title}</div>
                )}
            </div>
            <div>
                {isEditing ? (
                    <Button onClick={onSave}>✓</Button>
                ) : (
                    <Button onClick={onRemove}>➖</Button>
                )}
            </div>
        </div>
    )
}
