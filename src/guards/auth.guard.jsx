import { Navigate, useLocation } from "react-router-dom";

const authGuard = (Component) => {
    const AuthGuard = (props) => {
        const token = localStorage.getItem("token");
        const location = useLocation();

        // If no token, redirect to login with the attempted location
        if (!token) {
            return <Navigate to="/login" state={{ from: location }} replace />;
        }

        // Token exists, allow access
        return <Component {...props} />;
    };

    return AuthGuard;
};

export default authGuard;
