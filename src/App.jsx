import "./App.css"
import {useEffect, useState} from "react";

export default function App() {

    const [posts, setPosts] = useState([])
    const [isLoading, setIsLoading] = useState(false)
    const [error, setError] = useState(null)

    useEffect(() => {
        setIsLoading(true)

        fetch("https://jsonplaceholder.typicode.com/todos")
            .then(response => {
                if (!response.ok) {
                    throw new Error(`HTTP error! status: ${response.status}`);
                }
                return response.json()
            })
            .then(todo => {
                setPosts(todo)
            })
            .catch(error => {
                setError(error.message)
            })
            .finally(() => setIsLoading(false))
    }, [])

    return (
        <div className="App">
            <h1>Список Задач</h1>
            {isLoading ? (
                <p>Ошибка: {error}</p> // Отображение сообщения об ошибке
            ) : (
                <div>
                    {posts.map((post) => (
                        <div key={post.id}>
                            <input type="checkbox" id={`todo-${post.id}`}
                                   checked={post.completed} readOnly name="text"/>
                            <label className="text"
                                   htmlFor={`todo-${post.id}`}>{post.title}</label>
                        </div>
                    ))}
                < /div>
            )}
        < /div>
    )
}
