import { styled } from '@mui/material/styles';
import { Snackbar, Typography } from '@mui/material';
import isPropValid from '@emotion/is-prop-valid';

export const StyledSnackbar = styled(Snackbar)(({ theme }) => ({
  '.MuiSnackbarContent-root': {
    backgroundColor: theme.palette.background.table,
  },
  svg: {
    height: 16,
    width: 16,
    marginLeft: theme.spacing(2),
  },
  '& > div': {
    padding: `${theme.spacing(1)} ${theme.spacing(3)}`,
    paddingRight: theme.spacing(2),
    backgroundColor: theme.palette.background.table,
    borderRadius: theme.shape.borderRadius,
    display: 'flex',
    justifyContent: 'space-between',
    minHeight: 50,
    minWidth: 350,
    boxShadow: theme.shadows[24],
  },
  '.MuiCircularProgress-root': {
    marginLeft: theme.spacing(3),
    transition: 'none',
    '.MuiCircularProgress-svg': {
      margin: 'auto',
    },
  },
}));

interface StyledMessageProps {
  $status: null | 'error' | 'success';
}

export const StyledMessage = styled(Typography, {
  shouldForwardProp: (prop) => isPropValid(String(prop)),
})<StyledMessageProps>(({ theme, $status }) => ({
  // eslint-disable-next-line no-nested-ternary
  color: $status
    ? $status === 'success'
      ? theme.palette.primary.main
      : theme.palette.support.red
    : theme.palette.text.primary,
}));
