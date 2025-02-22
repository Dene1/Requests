export const Button = ({children, onClick}) => {
    return (
        <button
            className="buttons"
            onClick={onClick}
            type="button"
        >
            {children}
        </button>
    )
}
