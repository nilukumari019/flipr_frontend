import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Navbar from "./components/Navbar";
import { Booking, Destination, Home, Hotel, Login, Signup } from "./pages";

const router = createBrowserRouter([
    {
        path: "/",
        element: <Navbar />,
        children: [
            { index: true, element: <Home /> },
            { path: "/destination", element: <Destination /> },
            { path: "/hotel", element: <Hotel /> },
            { path: "/booking", element: <Booking /> },
            {
                path: "/login",
                element: <Login />,
            },
            {
                path: "/signup",
                element: <Signup />,
            },
        ],
    },
]);

function App() {
    return <RouterProvider router={router} />;
}

export default App;
