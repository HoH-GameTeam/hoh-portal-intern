import React, { SetStateAction, Dispatch } from 'react';

import { Box, Drawer, useTheme } from '@mui/material';

import { Game, useGamesQuery } from '../../../graphql';
import { NavSectionVertical } from '../../../components/nav-section';
import Scrollbar from '../../../components/scrollbar';
import { NAV } from '../../../config-global';
import useResponsive from '../../../hooks/useResponsive';
import { getConfigNavWithGames } from './config-navigation';

// ----------------------------------------------------------------------

type Props = {
  isNavOpen: boolean;
  setOpenNav: Dispatch<SetStateAction<boolean>>;
};

export default function NavVertical({ isNavOpen, setOpenNav }: Props) {
  const isDesktop = useResponsive('up', 'lg');
  const isMobile = useResponsive('down', 'sm');
  const theme = useTheme();
  const { data: gamesData } = useGamesQuery({
    variables: {
      page: 1,
      pageSize: 100,
    },
  });

  const navConfig = getConfigNavWithGames(gamesData?.games?.data as Game[]);

  const renderContent = (
    <Scrollbar
      sx={{
        height: '100vh',
        '& .simplebar-content': {
          height: '100vh',
          display: 'flex',
          flexDirection: 'column',
        },
      }}
    >
      <NavSectionVertical
        data={navConfig}
        isNavOpen={isNavOpen}
        setOpenNav={setOpenNav}
      />

      <Box sx={{ flexGrow: 1 }} />
    </Scrollbar>
  );

  return (
    <Box
      component="nav"
      sx={{
        position: 'fixed',
        flexShrink: { lg: 0 },
        width: { lg: NAV.W_DASHBOARD },
        height: '100%',
        boxShadow: theme.shadows[5],
        zIndex: 2,
      }}
    >
      {isDesktop ? (
        renderContent
      ) : (
        <Drawer
          transitionDuration={300}
          open={isNavOpen}
          onClose={() => setOpenNav(false)}
          ModalProps={{
            keepMounted: true,
          }}
          PaperProps={{
            sx: {
              width: NAV.W_DASHBOARD,
              ...(isMobile && {
                width: NAV.W_MOBILE,
              }),
            },
          }}
        >
          {renderContent}
        </Drawer>
      )}
    </Box>
  );
}
