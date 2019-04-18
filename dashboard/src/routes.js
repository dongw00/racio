import React from 'react';
import { Redirect } from 'react-router-dom';

// Layout Types
import { DefaultLayout } from './layouts';

// Route Views
import DashboardMain from './views/DashboardMain';
import UserProfileLite from './views/UserProfileLite';
import ComponentsOverview from './views/ComponentsOverview';
import Ranking from './views/Ranking';
import BlogPosts from './views/BlogPosts';

export default [
  /* Dashboard - main page */
  {
    path: '/',
    exact: true,
    layout: DefaultLayout,
    component: () => <Redirect to="/dashboard" />,
  },
  /* Dashboard - main page */
  {
    path: '/dashboard',
    layout: DefaultLayout,
    component: DashboardMain,
  },
  {
    path: '/user-profile-lite',
    layout: DefaultLayout,
    component: UserProfileLite,
  },
  {
    path: '/components-overview',
    layout: DefaultLayout,
    component: ComponentsOverview,
  },
  {
    path: '/ranking',
    layout: DefaultLayout,
    component: Ranking,
  },
  {
    path: '/blog-posts',
    layout: DefaultLayout,
    component: BlogPosts,
  },
];
