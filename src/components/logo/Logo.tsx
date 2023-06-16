import { forwardRef } from 'react';
import { Link as RouterLink } from 'react-router-dom';

import { Box, BoxProps, Link } from '@mui/material';

import logo_full from '../../assets/logo/logo_full.png';

// ----------------------------------------------------------------------

export interface LogoProps extends BoxProps {
  disabledLink?: boolean;
}

const Logo = forwardRef<HTMLDivElement, LogoProps>(
  ({ disabledLink = false, sx, ...other }, ref) => {
    const logo = (
      <Box
        ref={ref}
        component="div"
        sx={{
          height: 40,
          display: 'inline-flex',
          ...sx,
        }}
        {...other}
      >
        <img src={logo_full} alt="logo" />
      </Box>
    );

    if (disabledLink) {
      return logo;
    }

    return (
      <Link component={RouterLink} to="/" sx={{ display: 'contents' }}>
        {logo}
      </Link>
    );
  },
);

export default Logo;
