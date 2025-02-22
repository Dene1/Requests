import {Link} from "react-router-dom";
import {Button} from "../button/button.jsx";

export const TasksPage = ({
                              cases,
                              onCaseChange,
                              onCaseCreate,
                              onCaseCancel,
                              searchPhrase
                          }) => {
    const filteredCases = cases.filter(c =>
        searchPhrase ? c.title.toLowerCase().includes(searchPhrase.toLowerCase()) : true
    );

    const hasFilteredTasks = filteredCases.length > 0;

    const renderContent = () => {
        if (!hasFilteredTasks && searchPhrase) {
            return <div className="loader">No coincidences were found</div>;
        } else if (!hasFilteredTasks && !searchPhrase) {
            return <div className="loader">There are no tasks for today</div>;
        }
        return null;
    };

    return (
        <div>
            {renderContent() || (
                cases.map((c) => (
                    <div key={c.id}>
                        {c.isEditing ? (
                            <>
                                <input
                                    className="caseInput"
                                    type="text"
                                    value={c.title}
                                    onChange={(e) => onCaseChange(c.id, e.target.value)}
                                />
                                <Button
                                    onClick={() => onCaseCreate(c.id, c.title)}>✔️
                                </Button>
                                <Button
                                    onClick={() => onCaseCancel(c.id)}>✖️
                                </Button>
                            </>
                        ) : (
                            <Link to={`/task/${c.id}`} className="cases" key={c.id}>
                                {c.title}
                            </Link>
                        )}
                    </div>
                ))
            )}
        </div>
    );
}
