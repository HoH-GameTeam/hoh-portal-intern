import React from 'react';

import Box, { BoxProps } from '@mui/material/Box';
import { useTheme } from '@mui/material/styles';
import Typography from '@mui/material/Typography';

import { IconSuccess, IconWarning2 } from '../../assets/icons';

interface ValidationMessageProps extends BoxProps {
  message: string;
  status?: 'error' | 'success';
}

export const ValidationMessage = ({
  message = '',
  status = 'error',
  ...boxProps
}: ValidationMessageProps) => {
  const theme = useTheme();

  return (
    <Box
      mt={2}
      ml={1.5}
      {...boxProps}
      display="flex"
      justifyItems="center"
      alignItems="flex-start"
    >
      {status === 'error' && (
        <IconWarning2
          sx={{
            width: { lg: 20, md: 16, sm: 16, xs: 20 },
            height: { lg: 20, md: 16, sm: 16, xs: 20 },
            mb: '2px',
          }}
        />
      )}
      {status === 'success' && (
        <IconSuccess
          sx={{
            width: { lg: 20, md: 16, sm: 16, xs: 20 },
            height: { lg: 20, md: 16, sm: 16, xs: 20 },
            mb: '2px',
          }}
        />
      )}
      <Typography
        ml={0.5}
        whiteSpace="pre-wrap"
        color={
          status === 'error'
            ? theme.palette.support.red
            : theme.palette.primary.main
        }
        sx={{
          [theme.breakpoints.down('sm')]: {
            fontSize: 12,
          },
        }}
      >
        {message}
      </Typography>
    </Box>
  );
};

ValidationMessage.defaultProps = {
  status: 'error',
};

export default ValidationMessage;
