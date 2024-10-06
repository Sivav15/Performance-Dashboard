import React from "react";
import { FaEnvelope, FaLock } from "react-icons/fa";
import { useFormik, FormikHelpers } from "formik";
import * as Yup from "yup";
import axios, { AxiosResponse } from "axios";
import { login_api } from "../services/api";
import { useDispatch } from "react-redux";
import useLoadingModal from "../hooks/useLoadingModal";
import { authReducer } from "../features/authSlice";
import { useNavigate } from "react-router-dom";
import img from "../assets/background_img.png";
interface LoginFormValues {
  email: string;
  password: string;
  rememberMe: boolean;
}

const Login: React.FC = () => {
  const dispatch = useDispatch();
  const { showLoading, hideLoading, LoadingModalComponent } = useLoadingModal();
  const navigate = useNavigate();

  const formik = useFormik<LoginFormValues>({
    initialValues: {
      email: "",
      password: "",
      rememberMe: false,
    },
    validationSchema: Yup.object({
      email: Yup.string()
        .email("Invalid email format")
        .required("Email is required"),
      password: Yup.string()
        .min(6, "Password must be at least 6 characters")
        .required("Password is required"),
    }),
    onSubmit: async (
      values: LoginFormValues,
      { setSubmitting, setFieldError }: FormikHelpers<LoginFormValues>
    ) => {
      try {
        showLoading();
        const payload = {
          email: values.email,
          password: values.password,
          isLoggedInHere: 0,
        };

        const response: any = await axios.post(login_api, payload);
        dispatch(authReducer(response.data));
        navigate("/dashboard");
      } catch (error) {
        if (axios.isAxiosError(error) && error.response) {
          console.error("Login error:", error.response.data);
          setFieldError("email", "Invalid credentials");
        } else {
          console.error("Unexpected error:", error);
        }
      } finally {
        hideLoading();
        setSubmitting(false);
      }
    },
  });

  return (
    <div
      style={{
        height: "100vh",
        backgroundImage: `url(${img})`,
        backgroundSize: "cover",
        backgroundPosition: "left bottom",
      }}
      className="flex justify-center items-center"
    >
      <div className="w-full h-full flex flex-col justify-center items-center">
        <div className="mb-5">
          <img
            src="https://techsavvy.ai/assets/images/common/logo/logo.svg"
            alt="TechSavvy Logo"
            className="h-12"
          />
        </div>
        <div className="w-full bg-white p-10 rounded-xl shadow-lg max-w-sm">
          <h2 className="text-2xl font-bold text-center text-gray-800 mb-6">
            Welcome Back!
          </h2>

          <form onSubmit={formik.handleSubmit}>
            <div className="mb-4">
              <label
                className="w-full block text-left text-gray-600 text-sm mb-2"
                htmlFor="email"
              >
                Email
              </label>
              <div className="flex items-center border border-gray-300 rounded-lg p-2">
                <FaEnvelope className="w-5 h-5 text-gray-400 mr-2" />
                <input
                  type="email"
                  id="email"
                  placeholder="test@dev.com"
                  className="w-full outline-none text-sm text-gray-700"
                  {...formik.getFieldProps("email")}
                />
              </div>
              {formik.touched.email && formik.errors.email ? (
                <div className="text-left text-red-500 text-xs mt-1">
                  {formik.errors.email}
                </div>
              ) : null}
            </div>

            <div className="mb-4">
              <label
                className="w-full block text-left text-gray-600 text-sm mb-2"
                htmlFor="password"
              >
                Password
              </label>
              <div className="flex items-center border border-gray-300 rounded-lg p-2">
                <FaLock className="w-5 h-5 text-gray-400 mr-2" />
                <input
                  type="password"
                  id="password"
                  placeholder="********"
                  className="w-full outline-none text-sm text-gray-700"
                  {...formik.getFieldProps("password")}
                />
              </div>
              {formik.touched.password && formik.errors.password ? (
                <div className="text-left text-red-500 text-xs mt-1">
                  {formik.errors.password}
                </div>
              ) : null}
            </div>

            <div className="flex items-center justify-between mb-6">
              <label className="inline-flex items-center text-sm text-gray-700">
                <input
                  type="checkbox"
                  id="rememberMe"
                  className="form-checkbox"
                  {...formik.getFieldProps("rememberMe")}
                />
                <span className="ml-2">Remember Me</span>
              </label>
            </div>

            <button
              type="submit"
              className="w-full bg-[#5932EA] text-white py-2 rounded-lg"
            >
              SIGN IN
            </button>
          </form>
        </div>
      </div>
      <LoadingModalComponent />
    </div>
  );
};

export default Login;
