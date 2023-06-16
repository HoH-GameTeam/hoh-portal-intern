import { ACCESS_TOKEN, CURRENCY } from '../constants/localStorage';
// routes
import { PATH_AUTH } from '../routes/paths';
// utils
import axios from '../utils/axios';
import { Currency } from '../graphql';

// ----------------------------------------------------------------------

function jwtDecode(token: string) {
  const base64Url = token.split('.')[1];
  const base64 = base64Url.replace(/-/g, '+').replace(/_/g, '/');
  const jsonPayload = decodeURIComponent(
    window
      .atob(base64)
      .split('')
      .map((c) => `%${`00${c.charCodeAt(0).toString(16)}`.slice(-2)}`)
      .join(''),
  );

  return JSON.parse(jsonPayload);
}

// ----------------------------------------------------------------------

export const isValidToken = (accessToken: string) => {
  if (!accessToken) {
    return false;
  }

  const decoded = jwtDecode(accessToken);

  const currentTime = Date.now() / 1000;

  return decoded.exp > currentTime;
};

// ----------------------------------------------------------------------

export const tokenExpired = (exp: number) => {
  // eslint-disable-next-line prefer-const
  let expiredTimer;

  const currentTime = Date.now();

  // Test token expires after 10s
  // const timeLeft = currentTime + 10000 - currentTime; // ~10s
  const timeLeft = exp * 1000 - currentTime;

  clearTimeout(expiredTimer);

  expiredTimer = setTimeout(() => {
    // eslint-disable-next-line no-alert
    alert('Token expired');

    localStorage.removeItem(ACCESS_TOKEN);

    window.location.href = PATH_AUTH.login;
  }, timeLeft);
};

// ----------------------------------------------------------------------

export const setSession = (accessToken: string | null) => {
  if (accessToken) {
    localStorage.setItem(ACCESS_TOKEN, accessToken);

    axios.defaults.headers.common.Authorization = `Bearer ${accessToken}`;

    // This function below will handle when token is expired
    const { exp } = jwtDecode(accessToken); // ~3 days by minimals server
    tokenExpired(exp);
  } else {
    localStorage.removeItem(ACCESS_TOKEN);

    delete axios.defaults.headers.common.Authorization;
  }
};

export const setStorageCurrency = (currency: string | Currency) => {
  if (!currency) {
    return;
  }

  if (typeof currency === 'string') {
    localStorage.setItem(CURRENCY, currency);
  }

  localStorage.setItem(CURRENCY, JSON.stringify(currency));
  window.dispatchEvent(new Event('storage'));
};

export const getLocalStorage = (key: string) => {
  if (key) {
    return localStorage.getItem(key);
  }
  return null;
};

export const clearLocalStorage = () => {
  localStorage.removeItem('accessToken');
  localStorage.removeItem('my_address');
  // window.location.href = PATH_DASHBOARD.root;
};
