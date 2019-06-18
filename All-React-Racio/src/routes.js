// import React from 'react';

// Layout Types
import { DefaultLayout } from './layouts';
// import SideBar from './layouts/LandingSideBar';

// Route Views
import Landing from './views/Landing'
import MainPage from './views/MainPage';
import UserProfile from './views/UserProfile';
// import ComponentsOverview from './views/ComponentsOverview';
import Ranking from './views/Ranking';
// import BlogPosts from './views/BlogPosts';
import History from './views/History';

export default [
  /* Landing - main page */
  {
    path: '/',
    exact: true,
    layout: 'div',
    component: Landing,
  },
  /* Dashboard - main page */
  {
    path: '/main',
    layout: DefaultLayout,
    component: MainPage,
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
  // {
  //   path: '/components-overview',
  //   layout: DefaultLayout,
  //   component: ComponentsOverview,
  // },

  // {
  //   path: '/blog-posts',
  //   layout: DefaultLayout,
  //   component: BlogPosts,
  // },
];
