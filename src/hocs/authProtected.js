import { Redirect } from 'react-router';
import { AUTH_TOKEN, routePaths } from '../utils/constants';

export const AuthProtected = (Component) => {
  const WithAuthProtected = (props) => {
    const token = localStorage.getItem(AUTH_TOKEN);
    console.log(token);
    if (!token) {
      return <Redirect to={routePaths.SIGN_IN_PATH} />;
    }
    return <Component {...props} />;
  };

  return WithAuthProtected;
};

// export default AuthProtected;
