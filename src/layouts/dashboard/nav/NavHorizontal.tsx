import { memo } from 'react';

import Box from '@mui/material/Box';

import { NavSectionHorizontal } from '../../../components/nav-section';

// ----------------------------------------------------------------------

function NavHorizontal({ onOpenNav }) {
  return (
    <Box sx={{ zIndex: 999 }}>
      <NavSectionHorizontal onOpenNav={onOpenNav} />
    </Box>
  );
}

export default memo(NavHorizontal);

// ----------------------------------------------------------------------
