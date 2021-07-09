import { Redirect } from 'react-router';
import { AUTH_TOKEN, routePaths } from '../utils/constants';

export const noAuthProtected = (Component) => {
  const WithNoAuthProtected = (props) => {
    const token = localStorage.getItem(AUTH_TOKEN);

    if (token) {
      return <Redirect to={routePaths.POSTS_PATH} />;
    }
    return <Component {...props} />;
  };

  return WithNoAuthProtected;
};
