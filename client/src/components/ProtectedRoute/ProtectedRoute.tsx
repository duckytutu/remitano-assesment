import React, { ReactElement } from "react";
import { Navigate, Route, RouteProps, useLocation } from "react-router-dom";
import { useAuth } from "../../context/AuthContext";

export default function ProtectedRoute({
  children,
  ...rest
}: RouteProps): ReactElement {
  const auth = useAuth();
  const location = useLocation();

  const renderChild = (): React.ReactNode => {
    if (auth?.authenticated) {
      return children;
    }

    return <Navigate to="login" state={{ from: location }} />;
  };

  return <Route {...rest}>{renderChild()}</Route>;
}
