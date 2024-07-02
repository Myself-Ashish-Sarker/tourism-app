import { createBrowserRouter } from "react-router-dom";
import Root from "../layout/Root/Root";
import Home from "../pages/Home/Home";
import AllSpots from "../pages/AllSpots/AllSpots";
import AddSpots from "../pages/AddSpots/AddSpots";
import MyList from "../pages/MyList/MyList";
import Login from "../pages/Login/Login";
import Register from "../pages/Register/Register";
import SpotDetails from "../pages/SpotDetails/SpotDetails";
import PrivateRouter from "./PrivateRouter";
import UpdateSpots from "../pages/UpdateSpots/UpdateSpots";
import ErrorPage from "../pages/ErrorPage/ErrorPage";

const router = createBrowserRouter([
    {
        path: "/",
        element: <Root></Root>,
        errorElement: <ErrorPage></ErrorPage>,
        children: [
            {
                path: "/",
                element: <Home></Home>,
            },
            {
                path: "/allspots",
                element: <AllSpots></AllSpots>,
                loader: () => fetch('https://tourism-app-gray.vercel.app/addspots')
            },
            {
                path: "/addSpots",
                element: <PrivateRouter><AddSpots></AddSpots></PrivateRouter>
            },
            {
                path: "/spotdetails/:_id",
                element: <SpotDetails></SpotDetails>,
                loader: () => fetch('https://tourism-app-gray.vercel.app/addspots')
            },
            {
                path: "/mylist",
                element: <PrivateRouter><MyList></MyList></PrivateRouter>,
                loader: () => fetch('https://tourism-app-gray.vercel.app/addspots')
            },
            {
                path: "/updatespots/:id",
                element: <PrivateRouter><UpdateSpots></UpdateSpots></PrivateRouter>,
                loader: ({ params }) => fetch(`https://tourism-app-gray.vercel.app/spots/${params.id}`)
            },
            {
                path: "/login",
                element: <Login></Login>
            },
            {
                path: "/register",
                element: <Register></Register>
            }
        ]
    },
]);

export default router