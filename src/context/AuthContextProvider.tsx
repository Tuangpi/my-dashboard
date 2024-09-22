import { login, logout } from "@/pages/users/Auth/store/authReducer";
import { useAppDispatch, useAppSelector } from "@/store";
import { UserAuth } from "@/types/authTypes";
import React, { createContext } from "react";

interface AuthContextProps {
  isAuthenticated: boolean;
  loginUser: ({ email, password }: UserAuth) => void;
  logoutUser: () => void;
}

export const AuthContext = createContext<AuthContextProps | undefined>(
  undefined
);

export const AuthContextProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const dispatch = useAppDispatch();
  const isAuthenticated = useAppSelector((state) => state.auth.isAuthenticated);

  const loginUser = ({ email, password }: UserAuth) => {
    dispatch(login({ email, password }));
  };

  const logoutUser = () => {
    dispatch(logout());
  };

  return (
    <AuthContext.Provider value={{ isAuthenticated, loginUser, logoutUser }}>
      {children}
    </AuthContext.Provider>
  );
};
