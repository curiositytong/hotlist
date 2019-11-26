import { lazy } from 'react';

export default [
  {
    path: '/',
    exact: true,
    component: lazy(() => import('./containers/pages/IndexPage'))
  },
  {
    path: '/custom',
    component: lazy(() => import('./containers/pages/CustomPage'))
  }
];
