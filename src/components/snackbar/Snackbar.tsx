import React from 'react';

import { CircularProgress, Slide, SlideProps } from '@mui/material';
import Box from '@mui/system/Box';

import { SnackbarProps } from '@mui/material/Snackbar';
import { StyledSnackbar, StyledMessage } from './styles';
import useResponsive from '../../hooks/useResponsive';

/* -------------------------------------------------------------------------- */

type TransitionProps = Omit<SlideProps, 'direction'>;

function Transition(props: TransitionProps) {
  return <Slide {...props} direction="right" />;
}

interface CustomSnackbarProps extends SnackbarProps {
  isOpen: boolean;
  setIsOpen: (value: boolean) => void;
  message: string;
  status: 'error' | 'success';
}

const Snackbar = ({
  isOpen,
  setIsOpen,
  message = '',
  status,
  ...options
}: CustomSnackbarProps) => {
  const [progress, setProgress] = React.useState(0);
  const autoHideDuration = options?.autoHideDuration || 5000;
  const isMobile = useResponsive('down', 'sm');

  const handleClose = () => {
    setIsOpen(false);
  };

  React.useEffect(() => {
    const timer = setInterval(() => {
      setProgress((prevProgress) => {
        if (prevProgress < 100) {
          return prevProgress + 10000 / autoHideDuration;
        }
      });
    }, 100);

    return () => {
      clearInterval(timer);
    };
  }, []);

  return (
    <StyledSnackbar
      {...options}
      open={isOpen}
      onClose={handleClose}
      onClick={handleClose}
      autoHideDuration={autoHideDuration}
      ClickAwayListenerProps={{ onClickAway: () => {} }}
      TransitionComponent={Transition}
      disableWindowBlurListener
      {...(isMobile && {
        anchorOrigin: {
          vertical: 'top',
          horizontal: 'right',
        },
      })}
    >
      <Box display="flex" alignItems="center">
        <Box display="flex" alignItems="center">
          <StyledMessage $status={status} fontWeight={700} variant="subtitle2">
            {message}
          </StyledMessage>
        </Box>
        <CircularProgress
          variant="determinate"
          thickness={6}
          value={Math.floor(progress)}
          {...(status === 'error' && { color: 'error' })}
        />
      </Box>
    </StyledSnackbar>
  );
};

export default Snackbar;
