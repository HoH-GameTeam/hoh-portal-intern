import { Box, Stack, useTheme } from '@mui/material';

import { NavSectionMini } from '../../../components/nav-section';
import { NAV } from '../../../config-global';
import { hideScrollbarX } from '../../../utils/cssStyles';
import { getConfigNavWithGames } from './config-navigation';
import { useGamesQuery, Game } from '../../../graphql';

// ----------------------------------------------------------------------

export default function NavMini({ isNavOpen, handleToggleNav }) {
  const theme = useTheme();
  const { data: gamesData } = useGamesQuery({
    variables: {
      page: 1,
      pageSize: 100,
    },
  });

  const navConfig = getConfigNavWithGames(gamesData?.games?.data as Game[]);

  return (
    <Box
      component="nav"
      sx={{
        flexShrink: { lg: 0 },
        width: NAV.W_DASHBOARD_MINI,
      }}
    >
      <Stack
        sx={{
          pt: 1.5,
          height: '100vh',
          position: 'fixed',
          bgcolor: 'background.secondary',
          width: NAV.W_DASHBOARD_MINI,
          boxShadow: theme.shadows[12],
          zIndex: 2,
          ...hideScrollbarX,
        }}
      >
        <NavSectionMini
          data={navConfig}
          isNavOpen={isNavOpen}
          handleToggleNav={handleToggleNav}
        />
      </Stack>
    </Box>
  );
}
