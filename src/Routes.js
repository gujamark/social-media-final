import RegisterPage from './pages/register';
import SignInPage from './pages/sign-in';
import ProfilePage from './pages/profile';

export const routes = [
  {
    title: 'Register',
    path: '/register',
    component: RegisterPage,
    showInNav: false,
  },
  {
    title: 'Sign In',
    path: '/sign-in',
    component: SignInPage,
    showInNav: false,
  },
  {
    title: 'Profile',
    path: '/profile',
    component: ProfilePage,
    showInNav: false,
  },
  {
    title: 'Feed',
    path: '/feed',
    component: <h1>Feeeed</h1>,
    showInNav: true,
  },
];

export const navRoutes = routes.filter((route) => route.showInNav);

export default routes;
