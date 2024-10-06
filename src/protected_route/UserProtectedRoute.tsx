import React, { ReactNode } from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { RootState } from "../app/store";

interface UserProtectedRouteProps {
  children: ReactNode;
}

const UserProtectedRoute: React.FC<UserProtectedRouteProps> = ({
  children,
}) => {
  const { token, X_USER_IDENTITY } = useSelector(
    (state: RootState) => state.authReducer.auth
  );
  const navigate = useNavigate();

  const handleLogin = () => {
    navigate("/");
  };

  if (!token && !X_USER_IDENTITY) {
    return (
      <div className="flex flex-col justify-center items-center min-h-screen bg-gray-50 text-red-600">
        <div className="bg-white shadow-md rounded-lg p-8 w-full max-w-md text-center border">
          <h1 className="text-2xl font-bold mb-4">Access Denied</h1>
          <p className="mb-6">Please log in to continue.</p>
          <button
            className="bg-green-600 text-white px-4 py-2 rounded hover:bg-green-700 transition duration-300"
            onClick={handleLogin}
          >
            Login
          </button>
        </div>
      </div>
    );
  }

  return <>{children}</>;
};

export default UserProtectedRoute;
