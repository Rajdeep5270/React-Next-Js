import { createBrowserRouter } from "react-router";
import App from "../App";
import addProductPage from "../page/addProductPage";
import viewProductPage from "../page/viewProductPage";
import notFoundPage from "../page/notFoundPage";
import homePage from "../page/homePage";

export const router = createBrowserRouter([
    {
        path: "/",
        Component: App,
        children: [
            {
                index: true,
                Component: homePage,
            },
            {
                path: "add-product",
                Component: addProductPage
            },
            {
                path: "view-product",
                Component: viewProductPage
            },
            {
                path: "*",
                Component: notFoundPage
            }
        ]
    }
])