import React from 'react';
import { Redirect } from 'react-router-dom';

// Layout Types
import { DefaultLayout } from './layouts';

// Route Views
import DashboardMain from './views/DashboardMain';
import UserProfile from './views/UserProfile';
import ComponentsOverview from './views/ComponentsOverview';
import Ranking from './views/Ranking';
import BlogPosts from './views/BlogPosts';
import History from './views/History';

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
  /* Google maps page - history */
  {
    path: '/history',
    layout: DefaultLayout,
    component: History,
  },
  /* Rainking page */
  {
    path: '/ranking',
    layout: DefaultLayout,
    component: Ranking,
  },
  /* User Info page*/
  {
    path: '/user-profile',
    layout: DefaultLayout,
    component: UserProfile,
  },
  {
    path: '/components-overview',
    layout: DefaultLayout,
    component: ComponentsOverview,
  },

  {
    path: '/blog-posts',
    layout: DefaultLayout,
    component: BlogPosts,
  },
];
