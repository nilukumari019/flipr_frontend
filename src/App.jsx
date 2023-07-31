import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Navbar from "./components/Navbar";
import { Booking, Home, Hotel, Login, Signup, HotelDetails } from "./pages";
import CheckAuthentication from "./components/CheckAuthentication";

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
                path: "/hotel",
                element: (
                    <CheckAuthentication>
                        <Hotel />
                    </CheckAuthentication>
                ),
            },
            { path: "/hotel/:id", element: <HotelDetails /> },
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
