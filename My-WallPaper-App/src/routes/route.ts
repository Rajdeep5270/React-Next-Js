import { createBrowserRouter } from "react-router";
import App from "../App";
import homePage from "../pages/homePage";

export const router = createBrowserRouter([
    {
        path: "/",
        Component: App,
        children: [
            {
                index: true,
                Component: homePage
            }
        ]
    }
])