import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Products from "./components/Shop/Products/Products.jsx";
import Contact from "./components/Contact/Contact.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children : [
      {
        path: "/shop",
        element: <Products />
      },
      {
        path: "/contact",
        element: <Contact />
      },
    ]
  },
]);


ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
