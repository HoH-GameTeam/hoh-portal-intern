import { styled } from '@mui/material/styles';
import IconButton from '@mui/material/IconButton';
import Box, { BoxProps } from '@mui/material/Box';
import isPropValid from '@emotion/is-prop-valid';
import { MotionProps } from 'framer-motion';

export const HeaderWrapper = styled(Box)<BoxProps & MotionProps>(
  ({ theme }) => ({
    backgroundColor: theme.palette.background.secondary,
    display: 'flex',
    alignItems: 'center',
    flexWrap: 'inherit',
    boxShadow: theme.shadows[5],
    zIndex: 1,
    position: 'fixed',
    top: 0,
    left: 0,
    right: 0,
    '& div': {
      height: '100%',
      display: 'flex',
    },
    '.MuiGrid-item': {
      display: 'flex',
      alignItems: 'center',
    },
    '.message_box': {
      marginLeft: theme.spacing(2),
    },
    '.message_box:hover, .noti_btn:hover': {
      path: {
        fill: theme.palette.text.contrast,
      },
    },
    '.mobile_logo': {
      marginLeft: 16,
      width: 36,
      height: 36,
      cursor: 'pointer',
    },
    padding: theme.spacing(1),
    [theme.breakpoints.down('sm')]: {
      padding: 6,
      '& p': { fontSize: 12 },
    },
  }),
);

interface StyledContainerProps extends BoxProps {
  isNavCollapse: boolean;
}

export const StyledContainer = styled(Box, {
  shouldForwardProp: (prop) => isPropValid(String(prop)),
})<StyledContainerProps>(({ theme, isNavCollapse }) => ({
  width: '100%',
  display: 'flex',
  justifyContent: 'flex-end',
  [theme.breakpoints.up('sm')]: {
    minHeight: 48,
  },
  [theme.breakpoints.between('xl', 1920)]: {
    padding: isNavCollapse ? theme.spacing(0, 19) : theme.spacing(0, 10),
  },
  [theme.breakpoints.up(1920)]: {
    padding: isNavCollapse ? theme.spacing(0, 28) : theme.spacing(0, 19),
  },
  [theme.breakpoints.between('lg', 'xl')]: {
    padding: isNavCollapse ? theme.spacing(0, 10) : theme.spacing(0, 5),
  },
  [theme.breakpoints.down('lg')]: {
    padding: theme.spacing(0, 2),
  },
}));

export const AuthenticationBox = styled(Box)(({ theme }) => ({
  '.sign_up_btn': {
    paddingRight: theme.spacing(3.5),
    paddingLeft: theme.spacing(3.5),
    marginLeft: theme.spacing(3),
    [theme.breakpoints.down(700)]: {
      paddingRight: theme.spacing(2.8),
      paddingLeft: theme.spacing(2.8),
      marginLeft: theme.spacing(2),
    },
  },
  '.noti_btn': {
    marginLeft: theme.spacing(2),
  },
  button: {
    height: '100%',
    [theme.breakpoints.down('sm')]: {
      span: { fontWeight: 600 },
    },
    [theme.breakpoints.up('sm')]: {
      span: { fontSize: 14 },
    },
  },
}));

export const LogoBox = styled(Box)(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  height: '64px',
  '.logo': {
    cursor: 'pointer',
    display: 'flex',
  },
  [theme.breakpoints.down('sm')]: {
    height: 36,
  },
}));

interface MenuIconButtonProps {
  isCollapsed: boolean;
}

export const MenuIconButton = styled(IconButton, {
  shouldForwardProp: (prop) => prop !== 'isCollapsed',
})<MenuIconButtonProps>(({ theme, isCollapsed }) => ({
  color: theme.palette.text.primary,
  padding: theme.spacing(1.5),
  borderRadius: theme.shape.borderRadius,
  ...(isCollapsed && { backgroundColor: theme.palette.background.hovering }),
  '&:hover': {
    color: theme.palette.text.contrast,
    backgroundColor: theme.palette.background.hovering,
  },
  backgroundColor: theme.palette.background.overlay,
  transition: 'all ease 0.15s',
}));
