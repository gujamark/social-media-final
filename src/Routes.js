import RegisterPage from './pages/register';
import SignInPage from './pages/sign-in';
import ProfilePage from './pages/profile';

import { routePaths } from './utils/constants';

export const routes = [
  {
    title: 'Register',
    path: routePaths.REGISTER_PATH,
    component: RegisterPage,
    showInNav: false,
  },
  {
    title: 'Sign In',
    path: routePaths.SIGN_IN_PATH,
    component: SignInPage,
    showInNav: false,
  },
  {
    title: 'Profile',
    path: routePaths.PROFILE_PATH,
    component: ProfilePage,
    showInNav: false,
  },
  {
    title: 'Feed',
    path: routePaths.FEED_PATH,
    component: <h1>Feeeed</h1>,
    showInNav: true,
  },
];

export const navRoutes = routes.filter((route) => route.showInNav);

export default routes;
