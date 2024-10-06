import React from "react";
import "./App.css";
import Dashboard from "./pages/Dashboard";
import Login from "./pages/Login";
import {
  createBrowserRouter,
  Navigate,
  RouterProvider,
} from "react-router-dom";
import DashboardLayout from "./layout/DashboardLayout";
import UserProtectedRoute from "./protected_route/UserProtectedRoute";

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
      element: (
        <UserProtectedRoute>
          <DashboardLayout />
        </UserProtectedRoute>
      ),
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
