/* eslint-disable import/no-extraneous-dependencies */
/* eslint-disable react/jsx-no-constructed-context-values */
import { GoogleLoginResponse, useGoogleLogin } from 'react-google-login';
import React, {
  createContext,
  useEffect,
  useReducer,
  useCallback,
  useState,
} from 'react';
import { ApolloQueryResult, FetchResult } from '@apollo/client';
import { gapi } from 'gapi-script';
import { AuthScreen } from '../pages/Authentication/Authentication';
import { isValidToken, setSession } from './utils';
import { ACCESS_TOKEN } from '../constants/localStorage';
import {
  useWalletChangedSubscription,
  useMeQuery,
  MeType,
  MeQuery,
  useLoginGoogleMutation,
  useLoginMutation,
  LoginMutation,
  useLogoutMutation,
} from '../graphql';
import { useCurrenciesContext } from '../contexts/CurrenciesContext';
import { GoogleClientId } from '../constants/config';
import AuthenticationDialog from '../pages/Authentication';
import { useSnackbar } from '../components/snackbar';
import useLocales from '../locales/useLocales';

export interface AuthContextState {
  isInitialized: boolean;
  isAuthenticated: boolean;
  me: MeType | null;
  increasedProfit: number;
}

export interface AuthContextValue extends AuthContextState {
  method: string;
  openLoginModal: (page?: AuthScreen) => void;
  login: (
    email: string,
    password: string,
  ) => Promise<FetchResult<LoginMutation>>;
  loginWithGoogle: VoidFunction;
  loginWithFacebook: VoidFunction;
  loginWithTwitter: VoidFunction;
  logout: VoidFunction;
  refetchMe: () => Promise<ApolloQueryResult<MeQuery>>;
  showIncreasedProfit: (increasedProfit: number) => void;
}

const initialState: AuthContextState = {
  isInitialized: false,
  isAuthenticated: false,
  me: null,
  increasedProfit: null,
};

const reducer = (state: AuthContextState, action: any) => {
  if (action.type === 'INITIAL') {
    return {
      ...state,
      isInitialized: true,
      isAuthenticated: action.payload.isAuthenticated,
      me: action.payload.me,
    };
  }
  if (action.type === 'LOGIN') {
    return {
      ...state,
      isAuthenticated: true,
      me: action.payload.me,
    };
  }
  if (action.type === 'LOGOUT') {
    return {
      ...state,
      isAuthenticated: false,
      me: null,
    };
  }
  if (action.type === 'LOGIN_WEB3') {
    return {
      ...state,
      isAuthenticated: false,
      me: null,
    };
  }
  if (action.type === 'UPDATE_INCREASED_PROFIT') {
    return {
      ...state,
      increasedProfit: action.payload.increasedProfit,
    };
  }
  return state;
};

// ----------------------------------------------------------------------

export const AuthContext = createContext<AuthContextValue | null>(null);

// ----------------------------------------------------------------------

interface PropsType {
  children: React.ReactElement;
}
export function AuthProvider({ children }: PropsType) {
  const { addSnackbar } = useSnackbar();
  const { translate } = useLocales();

  const [state, dispatch] = useReducer(reducer, initialState);
  const [isAuthDialogOpen, setIsAuthDialogOpen] = useState<boolean>(false);

  const { currencies } = useCurrenciesContext();
  const { data: meData, refetch: refetchMe } = useMeQuery();
  const [loginGoogle] = useLoginGoogleMutation();
  const [loginMutation] = useLoginMutation();
  const [logoutMutation] = useLogoutMutation();

  const { data: walletChange } = useWalletChangedSubscription();

  const accessToken =
    typeof window !== 'undefined' ? localStorage.getItem(ACCESS_TOKEN) : '';

  const initialize = useCallback(async () => {
    try {
      if (accessToken && isValidToken(accessToken)) {
        setSession(accessToken);
        dispatch({
          type: 'INITIAL',
          payload: {
            isAuthenticated: true,
            me: meData?.me,
          },
        });
      } else {
        dispatch({
          type: 'INITIAL',
          payload: {
            isAuthenticated: false,
            me: null,
          },
        });
      }
    } catch (error) {
      // eslint-disable-next-line no-console
      console.error(error);
      dispatch({
        type: 'INITIAL',
        payload: {
          isAuthenticated: false,
          me: null,
        },
      });
    }
  }, [accessToken, meData?.me]);

  useEffect(() => {
    initialize();
    function start() {
      gapi.auth2.init({ clientId: GoogleClientId, scrope: '' });
    }
    gapi.load('client:auth2', start);
  }, [initialize]);

  useEffect(() => {
    refetchMe();
  }, [accessToken, walletChange]);

  useEffect(() => {
    if (!walletChange) return;
    addSnackbar(
      `Successful, balance change: ${walletChange?.userWalletChanged?.amount}`,
      'success',
    );
  }, [walletChange]);

  useEffect(() => {
    if (meData?.me) {
      dispatch({
        type: 'LOGIN',
        payload: {
          me: meData.me,
        },
      });
    }
  }, [meData, currencies]);

  const [authPage, setAuthPage] = React.useState<AuthScreen>(
    AuthScreen.SIGN_IN,
  );
  const openLoginModal = (authPage?: AuthScreen) => {
    if (authPage) {
      setAuthPage(authPage);
    } else {
      setAuthPage(AuthScreen.SIGN_IN);
    }
    setIsAuthDialogOpen(true);
  };

  const closeLoginModal = () => {
    setIsAuthDialogOpen(false);
  };

  const login = (email: string, password: string) => {
    return loginMutation({
      variables: {
        email: email,
        password: password,
      },
    });
  };

  // login google
  const { signIn } = useGoogleLogin({
    onSuccess: async (data: GoogleLoginResponse) => {
      const result = await loginGoogle({
        variables: {
          token: data?.tokenId,
        },
      });
      if (result?.data?.loginGoogle.success) {
        closeLoginModal();
        setSession(result.data.loginGoogle.content!.accessToken);
        return;
      }
      addSnackbar(translate('error_message.server_error'), 'error');
    },
    onFailure: () => {
      addSnackbar(translate('login_fail'), 'error');
    },
    clientId: GoogleClientId,
  });

  const loginWithGoogle = () => {
    signIn();
  };

  const loginWithFacebook = () => {};

  const loginWithTwitter = () => {};

  const logout = async () => {
    try {
      const response = await logoutMutation();

      if (response?.data?.logout?.success) {
        setSession(null);
        dispatch({
          type: 'LOGOUT',
        });
        return;
      }
    } catch (err: any) {
      addSnackbar(translate('logout_failed'), 'error');
    }
  };

  const showIncreasedProfit = (increasedProfit: number) => {
    dispatch({
      type: 'UPDATE_INCREASED_PROFIT',
      payload: {
        increasedProfit,
      },
    });
  };

  return (
    <AuthContext.Provider
      value={{
        ...state,
        method: 'jwt',
        openLoginModal,
        login,
        loginWithGoogle,
        loginWithFacebook,
        loginWithTwitter,
        logout,
        refetchMe,
        showIncreasedProfit,
      }}
    >
      {isAuthDialogOpen && (
        <AuthenticationDialog
          open={isAuthDialogOpen}
          handleClose={() => setIsAuthDialogOpen(false)}
          page={authPage}
        />
      )}
      {children}
    </AuthContext.Provider>
  );
}
