import {useState} from "react";
import {useNavigate, useParams} from "react-router-dom";
import {Button} from "../button/button.jsx"
import styles from "./task-page-details.module.css"

export const TaskPageDetails = ({
                                    cases,
                                    onCaseChange,
                                    onCaseCancel,
                                    onCaseEdit,
                                    onCaseUpdate,
                                    onCaseRemove,
                                    onCaseCompletedChange
                                }) => {
    const {id: routeId} = useParams();
    const navigate = useNavigate();
    const task = cases.find((c) => c.id === Number(routeId));
    const [isEditing, setIsEditing] = useState(false);

    const handleEditClick = (id) => {
        console.log("handleEditClick");
        setIsEditing(true); // Устанавливаем isEditing локально
        onCaseEdit(id);
    };

    const handleSaveClick = (id, title) => {
        console.log("handleSaveClick");
        setIsEditing(false); // Устанавливаем isEditing локально
        onCaseUpdate(id, title);
    };

    return (
        <div className={styles.taskPageDetails}>
            {isEditing ? (
                <>
                    <div className={styles.taskName}>
                        <input
                            className={styles.editTitle}
                            type="text"
                            value={task.title}
                            onChange={(e) => onCaseChange(task.id, e.target.value)}
                        />
                    </div>
                    <div className={styles.completed}>
                        <input
                            className={styles.checkbox}
                            type="checkbox"
                            checked={task.completed}
                            onChange={(e) => {
                                onCaseCompletedChange(task.id, e.target.checked)
                            }}
                        />
                        <p style={{textDecoration: task.completed ? "line-through" : "none"}}>
                            Completed: {task.completed ? "Yes" : "No"}
                        </p>
                    </div>
                    <div className={styles.buttons}>
                        <Button
                            onClick={() => handleSaveClick(task.id, task.title)}>✔️</Button>
                        <Button onClick={() => onCaseCancel()}>✖️</Button>
                    </div>
                </>
            ) : (
                <>
                    <div className={styles.taskName}>
                        {task.title}
                    </div>
                    <div className={styles.completed}>
                        <input
                            className={styles.checkbox}
                            type="checkbox"
                            checked={task.completed}
                            onChange={(e) => {
                                onCaseCompletedChange(task.id, e.target.checked)
                            }}
                        />
                        <p style={{textDecoration: task.completed ? "line-through" : "none"}}>
                            Completed: {task.completed ? "Yes" : "No"}
                        </p>
                    </div>
                    <div className={styles.buttons}>
                        <Button
                            onClick={() => handleEditClick(task.id)}>✏️️️</Button>
                        <Button onClick={() => onCaseRemove(task.id)}>➖</Button>
                    </div>
                </>
            )}
            <div className={styles.buttonBack}>
                <Button onClick={() => navigate("/")} type="button">
                    🔙 Go Back
                </Button>
            </div>
        </div>
    );
};
