import {Button} from "../button/button.jsx";
import {useSelector} from "react-redux";

export const Case = ({
                         id,
                         onSave,
                         onChange,
                         onCompletedChange,
                         onEdit,
                         onRemove
                     }) => {
    const caseData = useSelector(state => state.cases.find(c => c.id === id))
    const isEditing = caseData?.isEditing ?? false

    return (
        <div className="cases">
            <input
                className="checkbox"
                type="checkbox"
                checked={caseData.completed}
                onChange={({target}) => onCompletedChange(target.checked)}
            />
            <div className="caseTitle">
                {isEditing ? (
                    <input
                        type="text"
                        value={caseData.title}
                        onChange={({target}) => onChange(target.value)}
                    />
                ) : (
                    <div onClick={onEdit}>{caseData.title}</div>
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
