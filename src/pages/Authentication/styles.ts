import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import { hideScrollbarY } from '../../utils/cssStyles';

export const AuthenticationContainer = styled(Box)(({ theme }) => ({
  display: 'flex',
  overflow: 'scroll',
  height: '100%',
  width: '100%',
  margin: 0,
  '.thumb': {
    width: '60%',
    height: '100%',
    overflow: 'hidden',
  },
  img: {
    width: '100%',
    height: '100%',
    objectFit: 'cover',
    objectPosition: 'center',
  },
  '.confirm_button': {
    margin: theme.spacing(4, 0),
    h6: { fontWeight: 700, fontSize: 16 },
    [theme.breakpoints.between(700, 'lg')]: {
      margin: theme.spacing(2, 0),
    },
    [theme.breakpoints.down('sm')]: {
      margin: theme.spacing(2.5, 0),
      h6: { fontWeight: 500, fontSize: 12 },
    },
  },
  [theme.breakpoints.between(700, 'lg')]: {
    p: {
      fontSize: 12,
    },
  },
  [theme.breakpoints.down(700)]: {
    backgroundColor: theme.palette.background.main,
    ...hideScrollbarY,
    flexDirection: 'column',
    maxHeight: 'unset',
    '.thumb': {
      width: '100%',
      height: '25%',
    },
  },
}));

export const AuthenticationWrapper = styled(Box)(({ theme }) => ({
  width: '40%',
  height: '100%',
  backgroundColor: theme.palette.background.main,
  display: 'flex',
  flexDirection: 'column',
  [theme.breakpoints.up(700)]: {
    overflow: 'scroll',
  },
  [theme.breakpoints.down(700)]: {
    width: '100%',
    height: '75%',
  },
}));

export const Header = styled(Box)(({ theme }) => ({
  position: 'relative',
  width: '100%',
  height: 60,
  minHeight: 60,
  display: 'flex',
  alignItems: 'center',
  paddingLeft: theme.spacing(3),
  borderBottom: `1px solid ${theme.palette.background.overlay}`,
  [theme.breakpoints.down(700)]: {
    height: 48,
    minHeight: 48,
    paddingLeft: theme.spacing(2),
    h6: {
      fontWeight: 400,
    },
  },
  '.closeBox': {
    top: '10%',
    right: '15px',
  },
}));

export const Body = styled(Box)(({ theme }) => ({
  padding: theme.spacing(4, 3, 0),
  flexGrow: 1,
  '.label': {
    color: theme.palette.text.contrast,
    marginBottom: theme.spacing(1.5),
  },
  '.primary_green': {
    color: theme.palette.primary.main,
    cursor: 'pointer',
    fontWeight: 500,
    width: 'fit-content',
  },
  '.underline': {
    textDecoration: 'underline',
  },
  '.ml4': {
    marginLeft: theme.spacing(0.5),
  },
  [theme.breakpoints.down(700)]: {
    padding: theme.spacing(3, 2, 0),
    '.label': {
      fontSize: 12,
    },
  },
  [theme.breakpoints.between(700, 'lg')]: {
    padding: `${theme.spacing(2)} ${theme.spacing(2)} 0`,
    '.label': {
      marginBottom: theme.spacing(1),
    },
  },
  [theme.breakpoints.between('sm', 'lg')]: {
    input: {
      fontSize: 14,
    },
  },
}));

export const Footer = styled(Box)(({ theme }) => ({
  padding: `0 ${theme.spacing(3)}`,
  justifySelf: 'flex-end',
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  width: '100%',
  marginBottom: theme.spacing(5),
  [theme.breakpoints.between(700, 'lg')]: {
    marginBottom: theme.spacing(2),
  },
  '.MuiDivider-root': {
    '&::before, &::after': {
      borderColor: theme.palette.text.primary,
      transform: 'none',
    },
  },
}));

export const SSOItemBox = styled(Box)(({ theme }) => ({
  margin: theme.spacing(1.5, 1.5, 0),
  button: {
    padding: theme.spacing(1),
    borderRadius: '50%',
    backgroundColor: theme.palette.background.overlay,
    '&:hover': {
      backgroundColor: theme.palette.background.hovering,
      path: {
        fill: theme.palette.text.contrast,
      },
    },
  },
  path: {
    fill: theme.palette.text.primary,
  },
}));

export const EmailBox = styled(Box)(({ theme }) => ({
  marginBottom: theme.spacing(3),
  '&& .MuiOutlinedInput-root': {
    input: {
      color: theme.palette.common.white,
    },
    color: theme.palette.error.main,
    paddingRight: 0,
    borderRadius: theme.shape.borderRadius,
    backgroundColor: theme.palette.background.secondary,
    border: 'none',
    '&:hover fieldset': {
      border: 'none',
    },
    '&.Mui-focused fieldset': {
      border: `1px solid ${theme.palette.secondary.main}`,
    },
  },
  [theme.breakpoints.between(700, 'lg')]: {
    marginBottom: theme.spacing(1.5),
    input: {
      padding: theme.spacing(1, 2),
    },
  },
}));

export const PasswordBox = styled(Box)(({ theme }) => ({
  marginBottom: theme.spacing(3),
  [theme.breakpoints.between(700, 'lg')]: {
    marginBottom: theme.spacing(1.5),
    input: {
      fontSize: 14,
      padding: theme.spacing(1, 2),
    },
  },
  '&& .MuiOutlinedInput-root': {
    input: {
      color: theme.palette.common.white,
    },
    color: theme.palette.error.main,
    paddingRight: 0,
    borderRadius: theme.shape.borderRadius,
    backgroundColor: theme.palette.background.secondary,
    border: 'none',
    '&:hover fieldset': {
      border: 'none',
    },
    '&.Mui-focused fieldset': {
      border: `1px solid ${theme.palette.secondary.main}`,
    },
  },
}));
