import { createBrowserRouter } from "react-router-dom";
import Homepage from "@/pages/HomePage";
import Loginpage from "@/pages/LoginPage";
import Signuppage from "@/pages/SignupPage";

export const router = createBrowserRouter([
    {
        path: "/",
        element: <Homepage />,
    },
    {
        path: "/login",
        element: <Loginpage />,
    },
    {
        path: "/signup",
        element: <Signuppage />,
    }
    
])