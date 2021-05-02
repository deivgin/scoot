import { Route, Redirect } from "react-router-dom";
import PropTypes from "prop-types";

export default function ProtectedRoute({
  user,
  redirectRoute,
  children,
  ...props
}) {
  return (
    <Route
      {...props}
      render={() => {
        return user ? children : <Redirect to={redirectRoute} />;
      }}
    />
  );
}

//PropTypes
ProtectedRoute.propTypes = {
  user: PropTypes.object,
  redirectRoute: PropTypes.string.isRequired,
};
