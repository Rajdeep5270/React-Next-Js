import { createBrowserRouter } from "react-router";
import App from "../App";
import addProductPage from "../page/addProductPage";
import viewProductPage from "../page/viewProductPage";
import notFoundPage from "../page/notFoundPage";
import homePage from "../page/homePage";
import editProductPage from "../page/editProductPage";
import productDetailPage from "../page/productDetailPage";
import addToCartPage from "../page/addToCartPage";

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
                path: "edit-product/:id",
                Component: editProductPage
            },
            {
                path: "product-detail/:id",
                Component: productDetailPage
            },
            {
                path: "add-to-cart",
                Component: addToCartPage
            },
            {
                path: "*",
                Component: notFoundPage
            }
        ]
    }
])