/* eslint-disable no-underscore-dangle */
import React, { useState, useCallback, useLayoutEffect } from 'react';
import { Outlet } from 'react-router-dom';
import { Box } from '@mui/material';
import { useSettingsContext } from '../../components/settings';
import { useGlobalContext } from '../../contexts/GlobalContext';
import useResponsive from '../../hooks/useResponsive';
import Header from './header';
import Main from './Main';
import NavHorizontal from './nav/NavHorizontal';
import NavMini from './nav/NavMini';
import NavVertical from './nav/NavVertical';
import { HEADER, NAV } from '../../config-global';

// ----------------------------------------------------------------------
const IS_NAV_COLLAPSE = 'isNavCollapse';

function DashboardLayout() {
  const { themeBottomBar, themeHeader } = useSettingsContext();
  const { showMiniGame, setShowMiniGame } = useGlobalContext();

  // const [showMiniGame, setShowMiniGame] = useState(false);

  const isMobile = useResponsive('down', 'sm');
  const isDesktop = useResponsive('up', 'lg');

  const storageIsNavCollapse = JSON.parse(
    localStorage.getItem(IS_NAV_COLLAPSE),
  );

  const [open, setOpen] = useState(storageIsNavCollapse || false);

  const renderNavMobile = (() => {
    if (isMobile) return <NavHorizontal onOpenNav={() => setOpen(true)} />;
    return null;
  })();

  const renderNavVertical = (() => {
    if (open) return <NavVertical isNavOpen={open} setOpenNav={setOpen} />;
    return null;
  })();

  const renderNavVerticalCollapse = (() => {
    if (!open && !isMobile)
      return (
        <NavMini
          isNavOpen={open}
          handleToggleNav={() => setOpen((prev) => !prev)}
        />
      );
  })();

  React.useEffect(() => {
    localStorage.setItem(IS_NAV_COLLAPSE, JSON.stringify(open));
  }, [open]);

  return (
    <Box display="flex">
      {themeBottomBar && renderNavMobile}
      {renderNavVertical}
      {renderNavVerticalCollapse}
      <Box
        sx={{
          display: 'flex',
          flexDirection: 'column',
          flexGrow: 1,
          ...(!open
            ? { width: `calc(100% - ${NAV.W_DASHBOARD_MINI}px)` }
            : { width: `calc(100% - ${NAV.W_BASE}px)` }),
          ...(isDesktop &&
            open && {
              marginLeft: `${NAV.W_BASE}px`,
            }),
          ...(themeHeader && { marginTop: `${HEADER.H_MAIN_DESKTOP}px` }),
          ...(isMobile && {
            ...(themeHeader && { marginTop: `${HEADER.H_MOBILE}px` }),
            width: '100%',
          }),
          position: 'relative',
        }}
      >
        <Header isNavOpen={open} />
        <Main>
          <Outlet />
        </Main>
      </Box>
    </Box>
  );
}

export default React.memo(DashboardLayout);
