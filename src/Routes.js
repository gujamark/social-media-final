import RegisterPage from './pages/register';
import SignInPage from './pages/sign-in';
import ProfilePage from './pages/profile';

const routes = [
  {
    path: '/register',
    component: RegisterPage,
  },
  {
    path: '/sign-in',
    component: SignInPage,
  },
  {
    path: '/profile',
    component: ProfilePage,
  },
];

export default routes;
