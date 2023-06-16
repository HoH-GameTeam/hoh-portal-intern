import React from 'react';
import { RotateSpinner } from 'react-spinners-kit';

import Box from '@mui/material/Box';

const LoadingAnimated = () => {
  return (
    <Box
      width="100%"
      height="100%"
      display="flex"
      justifyContent="center"
      alignItems="center"
    >
      <RotateSpinner />
    </Box>
  );
};

export default LoadingAnimated;
