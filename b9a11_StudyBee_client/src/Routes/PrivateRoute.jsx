import { useContext } from "react";
import { Navigate, useLocation } from "react-router-dom";
import { AuthContext } from "../AuthProvider/AuthProvider";
import PropTypes from 'prop-types';

const PrivateRoute = ({ children }) => {
    const { user, loading } = useContext(AuthContext);
    const location = useLocation()
    // console.log(typeof children)
    if (loading) return (
        <div className="min-h-[500px] flex items-center justify-center"><span className="loading-ring loading loading-lg"></span></div>
    )
    if (user) return (
        children
    )
    return (
        <Navigate to={'/login'} state={location.pathname} replace={true} />
    );
};

export default PrivateRoute;

PrivateRoute.propTypes = {
    children: PropTypes.object
}