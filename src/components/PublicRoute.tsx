import React from "react";
import { Navigate } from "react-router-dom";
import { useAppSelector } from "@/store";

interface PublicRouteProps {
  children: React.ReactNode;
  redirectTo: string;
}

const PublicRoute: React.FC<PublicRouteProps> = ({ children, redirectTo }) => {
  const isAuthenticated = useAppSelector((state) => state.auth.isAuthenticated);

  return isAuthenticated ? <Navigate to={redirectTo} /> : <>{children}</>;
};

export default PublicRoute;
