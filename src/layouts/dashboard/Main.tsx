// @mui
import { Box, BoxProps } from '@mui/material';
import { useEffect } from 'react';
// hooks
import useResponsive from '../../hooks/useResponsive';
// config
import { HEADER, NAV } from '../../config-global';
// components
import Footer from './footer';

// ----------------------------------------------------------------------

interface Props extends BoxProps {}

export default function Main({ children, sx, ...other }: Props) {
  const isDesktop = useResponsive('up', 'lg');
  const isMobile = useResponsive('down', 'sm');

  useEffect(() => {
    if (
      navigator.userAgent.match(/iPhone/i) ||
      navigator.userAgent.match(/iPad/i)
    ) {
      /* iOS hides Safari address bar */
      window.addEventListener('load', () => {
        setTimeout(() => {
          window.scrollTo({ top: 0, left: 1, behavior: 'smooth' });
        }, 1000);
      });
    }
  }, []);
  return (
    <Box
      component="main"
      id="main-element"
      sx={{
        height: `calc(100vh - ${
          isDesktop ? HEADER.H_MAIN_DESKTOP : HEADER.H_MOBILE
        }px)`,
        display: 'flex',
        flexDirection: 'column',
        width: '100%',
        '::-webkit-scrollbar': {
          display: 'none',
        },
        flexGrow: 1,
        ...(isMobile && {
          paddingBottom: '30px',
        }),
        ...sx,
      }}
      {...other}
    >
      <Box
        sx={{
          flexGrow: 1,
          pt: isMobile ? 0 : 2,
          px: isMobile ? 0 : 1.5,
          pb: 6,
          width: '100%',
          ...(isDesktop && {
            pt: 2,
          }),
          ...(isMobile && {
            paddingBottom: `${NAV.H_DASHBOARD_ITEM_HORIZONTAL}px`,
            px: 1.5,
          }),
        }}
      >
        {children}
      </Box>
      <Footer />
    </Box>
  );
}
