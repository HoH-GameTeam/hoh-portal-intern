import { styled } from '@mui/material/styles';
import Box, { BoxProps } from '@mui/material/Box';
import isPropValid from '@emotion/is-prop-valid';

interface TabItemWrapperProps extends BoxProps {
  $isActive: boolean;
  $isDisabled?: boolean;
}

export const TabItemWrapper = styled(Box, {
  shouldForwardProp: (prop) => isPropValid(String(prop)),
})<TabItemWrapperProps>(({ $isActive, $isDisabled, theme }) => ({
  fontSize: $isActive ? '1rem' : '0.875rem',
  p: {
    fontWeight: $isActive && 700,
    [theme.breakpoints.down('sm')]: {
      fontWeight: 400,
      fontSize: 12,
    },
  },
  padding: `${theme.spacing(1.5)} ${theme.spacing(5)}`,
  [theme.breakpoints.down('sm')]: {
    padding: `${theme.spacing(1)} ${theme.spacing(1.5)}`,
  },
  borderRadius: 4,
  transition: 'all ease 0.3s',
  cursor: $isDisabled ? 'not-allowed' : 'pointer',

  ...($isActive && {
    color: theme.palette.text.contrast,
    backgroundColor: theme.palette.background.overlay,
  }),

  ...(!$isActive && {
    color: theme.palette.text.primary,
  }),
}));

export const TabList = styled(Box)(({ theme }) => ({
  display: 'flex',
  justifyContent: 'center',
  width: 'fit-content',
  backgroundColor: theme.palette.background.disable,
  borderRadius: theme.shape.borderRadius,
}));
