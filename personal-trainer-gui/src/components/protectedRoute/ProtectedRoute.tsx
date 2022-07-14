import { withAuthenticationRequired } from "@auth0/auth0-react";
import { ComponentType } from "react";
import { Loader } from "../loader/Loader";

interface ProtectedRouteProps {
  component: ComponentType;
}

export const ProtectedRoute: React.FC<ProtectedRouteProps> = ({
  component,
}) => {
  const Component = withAuthenticationRequired(component, {
    onRedirecting: () => <Loader />,
  });

  return <Component />;
};
