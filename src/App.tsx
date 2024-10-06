import React from "react";
import "./App.css";
import Dashboard from "./screens/Dashboard";
import Login from "./screens/Login";
import {
  createBrowserRouter,
  Navigate,
  RouterProvider,
} from "react-router-dom";
import DashboardLayout from "./layout/DashboardLayout";

const App: React.FC = () => {
  const router = createBrowserRouter([
    {
      path: "*",
      element: <div>Not found</div>,
    },
    {
      path: "/",
      element: <Login />,
    },
    {
      path: "/",
      element: <DashboardLayout />,
      children: [
        {
          path: "",
          element: <Navigate to="/dashboard" replace />,
        },
        {
          path: "dashboard",
          element: <Dashboard />,
        },
      ],
    },
  ]);

  return <RouterProvider router={router} />;
};

export default App;
