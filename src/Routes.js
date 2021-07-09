import React from 'react';
import { routePaths } from './utils/constants';

const RegisterPage = React.lazy(() => import('./pages/register'));
const SignInPage = React.lazy(() => import('./pages/sign-in'));
const ProfilePage = React.lazy(() => import('./pages/profile'));
const PostsPage = React.lazy(() => import('./pages/posts'));
const CreatePostPage = React.lazy(() => import('./pages/create-post'));

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
