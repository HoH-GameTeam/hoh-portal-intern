import React from 'react';
// i18n
import './locales/i18n';

// scroll bar
import 'simplebar-react/dist/simplebar.min.css';

// lazy image
import 'react-lazy-load-image-component/src/effects/blur.css';

// ----------------------------------------------------------------------

import { BrowserRouter } from 'react-router-dom';
import { HelmetProvider } from 'react-helmet-async';
// ...
// apollo
import { ApolloProvider } from '@apollo/client';
import { client } from './graphql/apollo';
// routes
import Router from './routes';
// theme
import ThemeProvider from './theme';
// locales
import ThemeLocalization from './locales';
// components
import SnackbarProvider from './components/snackbar';
import ScrollToTop from './components/scroll-to-top';
import { MotionLazyContainer } from './components/animate';
import { SettingsProvider } from './components/settings';
import { GlobalContextProvider } from './contexts/GlobalContext';
import { CurrenciesProvider } from './contexts/CurrenciesContext';
// Check our docs
// https://docs.minimals.cc/authentication/ts-version

import { AuthProvider } from './auth/CocoAuthContext';
// ----------------------------------------------------------------------

export default function App() {
  return (
    <ApolloProvider client={client}>
      <HelmetProvider>
        <CurrenciesProvider>
          <GlobalContextProvider>
            <SettingsProvider>
              <BrowserRouter>
                <ScrollToTop />
                <MotionLazyContainer>
                  <ThemeProvider>
                    <ThemeLocalization>
                      <SnackbarProvider>
                        <AuthProvider>
                          <Router />
                        </AuthProvider>
                      </SnackbarProvider>
                    </ThemeLocalization>
                  </ThemeProvider>
                </MotionLazyContainer>
              </BrowserRouter>
            </SettingsProvider>
          </GlobalContextProvider>
        </CurrenciesProvider>
      </HelmetProvider>
    </ApolloProvider>
  );
}
