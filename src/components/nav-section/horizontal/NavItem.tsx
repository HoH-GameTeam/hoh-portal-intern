import React from 'react';

import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import useResponsive from '../../../hooks/useResponsive';

export default function NavItem({ title, icon, handleClick }) {
  const isUp350 = useResponsive('up', 350);

  return (
    <Box
      onClick={() => handleClick()}
      sx={{
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'flex-end',
        alignItems: 'center',
        cursor: 'pointer',
        margin: 'auto',
        svg: {
          height: 16,
          width: 16,
        },
        '.MuiBadge-badge': {
          fontSize: 6,
          width: 12,
          height: 12,
          minWidth: 'unset',
        },
      }}
    >
      <Box height={18}>{icon}</Box>
      {isUp350 && <Typography fontSize={10}>{title}</Typography>}
    </Box>
  );
}
