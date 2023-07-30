import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Navbar from "./components/Navbar";
import { Booking, Destination, Home, Hotel, Login, Signup } from "./pages";
import CheckAuthentication from "./components/CheckAuthentication";
import HotelDetails from "./pages/Booking/HotelDetails/HotelDetails";

const router = createBrowserRouter([
    {
        path: "/",
        element: <Navbar />,
        children: [
            {
                index: true,
                element: (
                    <CheckAuthentication>
                        <Home />
                    </CheckAuthentication>
                ),
            },
            {
                path: "/destination",
                element: (
                    <CheckAuthentication>
                        <Destination />
                    </CheckAuthentication>
                ),
            },
            {
                path: "/hotel",
                element: (
                    <CheckAuthentication>
                        <Hotel />
                    </CheckAuthentication>
                ),
            },
            {
                path: "/booking",
                element: (
                    <CheckAuthentication required={true}>
                        <Booking />
                    </CheckAuthentication>
                ),
            },
            {
                path: "/login",
                element: (
                    <CheckAuthentication r={true}>
                        <Login />
                    </CheckAuthentication>
                ),
            },
            {path: '/hotel/detail', element: <HotelDetails/>},
            {
                path: "/signup",
                element: (
                    <CheckAuthentication r={true}>
                        <Signup />
                    </CheckAuthentication>
                ),
            },
        ],
    },
]);

function App() {
    return <RouterProvider router={router} />;
}

export default App;
