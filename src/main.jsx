import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import CartPage from "./pages/CartPage/CartPage";
import Admin from "./pages/AdminPage/AdminPage";
import ServicePage from "./pages/ServicePage/ServicePage";
import ContactPage from "./pages/ContactPage/ContactPage";
import ProductsPage from "./pages/ProductsPage/ProductsPage";
import ProductDetailsPage from "./pages/ProductDetailsPage/ProductDetailsPage";


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
    path: "/services",
    element: <ServicePage />,
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
    path: "/contacts",
    element: <ContactPage />,
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
