import {Link, Navigate, useLocation} from "react-router-dom";
import {useEffect} from "react";

export const NotFound = () => {
    const location = useLocation();

    useEffect(() => {
        if (location.pathname !== "404") {
            return <Navigate to="/404" replace/>
        }
    }, [location]);

    return (
        <div className="not-found">
            <h1>404</h1>
            <p>Page not found</p>
            <p>Unfortunately, the page you requested does not exist.</p>
            <Link to="/">Go to Home</Link>
        </div>
    )
}
