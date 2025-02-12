import {Button} from "../button/button.jsx";

export const Case = ({
                         title,
                         completed,
                         isEditing,
                         onSave,
                         onChange,
                         onCompletedChange,
                         onEdit,
                         onRemove
                     }) => {

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
