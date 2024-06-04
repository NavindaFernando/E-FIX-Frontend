import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import ProductsPage from "./pages/ProductsPage.jsx";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import ProductDetailsPage from "./pages/ProductDetailsPage";
import CartPage from "./pages/CartPage";
import Admin from "./pages/AdminPage/AdminPage";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
  {
    path: "/products",
    element: <ProductsPage />,
  },
  {
    path: "/product_detail",
    element: <ProductDetailsPage />,
  },
  {
    path: "/cart",
    element: <CartPage />,
  },
  {
    path: "/admin",
    element: <Admin />,
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    {/* <App /> */}
    <RouterProvider router={router} />
  </React.StrictMode>
);
