import { createBrowserRouter } from "react-router-dom";
import Root from "../layouts/Root";
import ErrorPage from "../error/ErrorPage";
import Home from "../Pages/Home";
import Login from "../Pages/Authentication/Login";
import Registration from "../Pages/Authentication/Registration";
import AllServices from "../Pages/AllServices";
import AddService from "../Pages/AddService";
import Profile from "../Pages/Authentication/Profile";
import ServiceDetails from "../Pages/ServiceDetails";
import BookingServices from "../Pages/BookingServices";
import ManageService from "../Pages/ManageService";
import UpdateServices from "../Pages/UpdateServices";
import PrivateRoute from "./PrivateRoute";
import BookedServerByMe from "../Pages/BookedServerByMe";
import ServiceTODO from "../Pages/ServiceTODO";
import FAQ from "../Pages/FAQ";
import About from "../Pages/About";

const router = createBrowserRouter([
    {
        path: "/",
        element: <Root />,
        errorElement: <ErrorPage />,
        children: [
            {
                path: '/',
                element: <Home />,
                loader: () => fetch(`${import.meta.env.VITE_SERVER}/services`)
            },
            {
                path: '/login',
                element: <Login />
            },
            {
                path: '/registration',
                element: <Registration />
            },
            {
                path: '/profile',
                element: <PrivateRoute><Profile /></PrivateRoute>
            },
            {
                path: '/services',
                element: <AllServices />
            },
            {
                path: '/addServices',
                element: <PrivateRoute><AddService /></PrivateRoute>
            },
            {
                path: '/services/:id',
                element: <PrivateRoute><ServiceDetails /></PrivateRoute>,
                loader: ({ params }) => fetch(`${import.meta.env.VITE_SERVER}/services/${params.id}`)
            },
            {
                path: '/services/booking-services/:id',
                element: <PrivateRoute><BookingServices /></PrivateRoute>,
                loader: ({ params }) => fetch(`${import.meta.env.VITE_SERVER}/services/${params.id}`)
            },
            {
                path: `/services/managed-services`,
                element: <PrivateRoute><ManageService /></PrivateRoute>,
            },
            {
                path: '/services/managed-service/update-service/:id',
                element: <PrivateRoute><UpdateServices /></PrivateRoute>,
                loader: ({ params }) => fetch(`${import.meta.env.VITE_SERVER}/services/${params.id}`)
            },
            {
                path: 'services/my-booked-services',
                element: <PrivateRoute><BookedServerByMe /></PrivateRoute>

            },
            {
                path: 'services/service-to-do',
                element: <PrivateRoute><ServiceTODO /></PrivateRoute>
            },
            {
                path: '/faq',
                element: <FAQ />
            },
            {
                path: '/about',
                element: <About />
            }
        ]
    },
]);

export default router;