import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface AuthState {
  token?: string;
  email?: string;
  fullName?: string;
  phoneNumber?: string;
  role?: string;
  isRuleAutomationEnabled?: number;
  X_USER_IDENTITY? : string
}

const savedAuth = localStorage.getItem("auth");
const initialAuth: AuthState = savedAuth ? JSON.parse(savedAuth) : {};

const initialState = {
  auth: initialAuth,
};

export const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    authReducer: (state, action: PayloadAction<any>) => {
      const { payload } = action;
      state.auth = {
        token: payload.token,
        email: payload.userDetails.email,
        fullName: payload.userDetails.fullName,
        phoneNumber: payload.userDetails.phoneNumber,
        role: payload.userDetails.role,
        isRuleAutomationEnabled: payload.isRuleAutomationEnabled,
        X_USER_IDENTITY : 'U2FsdGVkX1/s3KYiwn1BdNtI1nNitQYbPVGs5G6NloO7PVGlCBTzYpJzAOD/8GaIp30IcvyKuBArXvm5xNN+gOhrSx51l49Ejxan4p7mt1vAUIE6/O277AUuMZVIMsmOtF5YGyaGkyDk9bMjArr3ekLdCKAZu9xXN/b92jqFqXb2jy4tbQbp8UUQxgywAWk1gR4dSb/vaJt4oEIeh0EWuEc4xU2NVdGSedANzYRqUEatsdtRYbNbdkZMt9koQcKO55/Y6fGafYUCztvkASn6i8WyPIxXMq6vf+xo4IYXeOh2WP8WgH/cQgq6V74Fnl82KYtUvGzWVMXpm2rrhsHewJptgJvJY+NinV05HdRJGtXQ1SN3/IhqyJZJhTb/TcO5SkDa8dIGfwgcciGspOofrA=='
      };
      localStorage.setItem("auth", JSON.stringify(state.auth));
    },
    logoutReducer: (state) => {
      localStorage.clear();
      state.auth = {};
    },
  },
});

export const { authReducer, logoutReducer } = authSlice.actions;
export default authSlice.reducer;
