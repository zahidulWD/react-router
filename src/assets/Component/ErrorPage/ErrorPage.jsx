
import { Link, useRouteError } from "react-router-dom";


const ErrorPage = () => {

    const error = useRouteError();
    return (
        <div>
            <h2>Oops!!!</h2>
            <p>{error.statusText || error.message}</p>

            {
                error.status === 404 && <div>
                    <h4>Page not found</h4>
                    <p>Go back where you from</p>
                    <Link><button>Home Page</button></Link>
                </div>
            }
        </div>
    );
};

export default ErrorPage;