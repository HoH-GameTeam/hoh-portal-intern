import React from 'react';
import { m } from 'framer-motion';
import { useLocation } from 'react-router-dom';
import { StageSpinner } from 'react-spinners-kit';

// @mui
import { styled, useTheme } from '@mui/material/styles';
import { LinearProgress, Box } from '@mui/material';
// hooks
import useResponsive from '../../hooks/useResponsive';
// config
import { NAV, HEADER } from '../../config-global';
// auth
//
import Logo from '../logo';
import ProgressBar from '../progress-bar';
import { useSettingsContext } from '../settings';

// ----------------------------------------------------------------------

const StyledRoot = styled('div')(({ theme }) => ({
  right: 0,
  bottom: 0,
  zIndex: 9998,
  width: '100%',
  height: '100%',
  position: 'fixed',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  backgroundColor: theme.palette.background.default,
}));

// ----------------------------------------------------------------------

export default function LoadingScreen() {
  const { pathname } = useLocation();
  const theme = useTheme();

  const isDesktop = useResponsive('up', 'lg');

  // const { isInitialized } = useAuthContext();

  const { themeLayout } = useSettingsContext();

  // const isDashboard =
  //   isInitialized && pathname.includes('/dashboard') && isDesktop;

  const isDashboard = pathname.includes('/dashboard') && isDesktop;

  const size =
    (themeLayout === 'mini' && NAV.W_DASHBOARD_MINI) ||
    (themeLayout === 'vertical' && NAV.W_DASHBOARD) ||
    144;

  return (
    <>
      <ProgressBar />

      <StyledRoot
        sx={{
          ...(isDashboard && {
            width: `calc(100% - ${size}px)`,
            height: `calc(100% - ${HEADER.H_DASHBOARD_DESKTOP}px)`,
            ...(themeLayout === 'horizontal' && {
              width: 1,
              height: `calc(100% - ${size}px)`,
            }),
          }),
        }}
      >
        {isDashboard ? (
          <LinearProgress color="inherit" sx={{ width: 1, maxWidth: 360 }} />
        ) : (
          <Box
            component={m.div}
            animate={{
              scale: [1, 0.9, 0.9, 1, 1],
              opacity: [1, 0.48, 0.48, 1, 1],
            }}
            transition={{
              duration: 3,
              ease: 'easeInOut',
              repeatDelay: 1,
              repeat: Infinity,
            }}
            sx={{
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
            }}
          >
            <Logo disabledLink sx={{ height: 64 }} />
            <StageSpinner color={theme.palette.secondary.main} />
          </Box>
        )}
      </StyledRoot>
    </>
  );
}
