// ----------------------------------------------------------------------

function path(root: string, sublink: string) {
  return `${root}${sublink}`;
}

const ROOTS_DASHBOARD = '/';

// ----------------------------------------------------------------------

export const PATH_AUTH = {
  auth: 'auth',
  login: 'login',
  register: 'register',
  forgotPassword: 'forgotPassword',
  recoverPassword: 'accounts/recover-password',
};

export const PATH_DASHBOARD = {
  root: ROOTS_DASHBOARD,
  blank: path(ROOTS_DASHBOARD, 'blank'),
  casino: {
    root: path(ROOTS_DASHBOARD, 'casino'),
    crash: path(ROOTS_DASHBOARD, 'casino/crash'),
    bitfarm: path(ROOTS_DASHBOARD, 'casino/bitfarm'),
    cyptoquest: path(ROOTS_DASHBOARD, 'casino/cypto-quest'),
  },
  sport: {
    root: path(ROOTS_DASHBOARD, 'sport'),
  },
  lottery: {
    root: path(ROOTS_DASHBOARD, 'lottery'),
  },
};

// TODO: xử lý lại cái này cho gọn

export const profilePaths = {
  page: 'accounts',
  childTabs: {
    general: 'general',
    security: 'security',
    verify: 'verify',
    activeDevices: 'active-devices',
  },
};
