import RegisterPage from './pages/register';
import SignInPage from './pages/sign-in';
import ProfilePage from './pages/profile';
import PostsPage from './pages/posts';
import CreatePostPage from './pages/create-post';
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
    path: routePaths.POSTS_PATH,
    component: PostsPage,
    showInNav: true,
  },
  {
    title: 'Create Post',
    path: routePaths.CREATE_POST_PATH,
    component: CreatePostPage,
    showInNav: true,
  },
];

export const navRoutes = routes.filter((route) => route.showInNav);

export default routes;
