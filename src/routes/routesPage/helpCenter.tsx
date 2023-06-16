import { RouteObject, Navigate } from 'react-router-dom';

import { HelpCenter } from '../elements';

export const HELP_CENTER_PATHS = {
  PROVABLY_FAIR: '/help/provably-fair',
  TERMS_SERVICE: '/help/terms-service',
  COIN_ACCURACY_LIMIT: '/help/coin-accuracy-limit',
  SUPPORT: '/help/support',
  FAQ: '/help/faq',
  CURRENCY: '/help/currency',
  AML: '/help/aml',
  RES_GAMBLING: '/help/responsible-gambling',
  REG_LOG: '/help/reg-log',
  FEE: '/help/fee',
  PRIVACY_POLICY: '/help/privacy-policy',
};

export const helpCenterRoutes: RouteObject = {
  path: 'help',
  children: [
    {
      element: <Navigate to={HELP_CENTER_PATHS.TERMS_SERVICE} replace />,
      index: true,
    },
    {
      path: 'privacy-policy',
      element: <Navigate to={HELP_CENTER_PATHS.TERMS_SERVICE} replace />,
    },
    {
      path: ':selectedHelpTab',
      element: <HelpCenter />,
    },
  ],
};
