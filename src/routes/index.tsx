import React from 'react';
import { Navigate, useRoutes } from 'react-router-dom';
// auth
import { element } from 'prop-types';
import AuthGuard from '../auth/AuthGuard';
import GuestGuard from '../auth/GuestGuard';
import { PATH_AUTH } from './paths';
// layouts
import CompactLayout from '../layouts/compact';
import DashboardLayout from '../layouts/dashboard';
// config
import { PATH_AFTER_LOGIN } from '../config-global';
import { helpCenterRoutes } from './routesPage';
//
import { Page404 } from './elements';
// ----------------------------------------------------------------------

export default function Router() {
  return useRoutes([
    {
      // element: <DashboardLayout />,
      children: [
        { element: <DashboardLayout />, index: true },
        {
          path: 'casino',
          children: [
            {
              element: <Navigate to="/casino/list" replace />,
              index: true,
            },
          ],
        },
        helpCenterRoutes,
      ],
    },
    {
      element: (
        <AuthGuard>
          <DashboardLayout />
        </AuthGuard>
      ),
    },
    {
      element: <CompactLayout />,
      children: [{ path: '404', element: <Page404 /> }],
    },

    { path: '*', element: <Navigate to="/404" replace /> },
  ]);
}
