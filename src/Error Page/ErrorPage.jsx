import { useEffect } from "react";
import { Link, useLocation, useRouteError } from "react-router-dom";


const ErrorPage = () => {
    const error = useRouteError()
    const location = useLocation();

    useEffect(() => {
        document.title = "404";
    }, [location.pathname]);

    return (
        <div className="mt-44">
            <h1 className="text-[100px] text-gray-400 font-semibold text-center mb-10">Error</h1>
            <p className="text-center text-lg font-medium mb-10">{error.statusText || error.massage}</p>
            <p className="text-center"><Link to="/"><button className="btn btn-error text-white">Go Back To Home</button></Link></p>
        </div>
    );
};

export default ErrorPage;