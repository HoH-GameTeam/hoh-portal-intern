import Box from '@mui/material/Box';
import IconButton from '@mui/material/IconButton';
import { styled } from '@mui/material/styles';

import { NAV } from '../../../config-global';

export const NavigationWrapper = styled(Box)(({ theme }) => ({
  backgroundColor: theme.palette.background.secondary,
  width: NAV.W_BASE,
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'space-between',
  transition: 'width 0.3s ease',
  overflowX: 'hidden',
  padding: theme.spacing(0, 1),
  height: '100%',
  [theme.breakpoints.down('sm')]: {
    width: '100%',
    padding: theme.spacing(0, 2),
  },
  '.nav__box': {
    marginTop: theme.spacing(2),
    display: 'flex',
    flexDirection: 'column',
  },
}));

export const LogoBox = styled(Box)(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  height: '64px',
  '.logo': {
    height: 48,
    cursor: 'pointer',
    display: 'flex',
  },
  [theme.breakpoints.down('sm')]: {
    justifyContent: 'space-between',
  },
}));

export const MenuIconButton = styled(IconButton)(({ theme }) => ({
  color: theme.palette.text.primary,
  padding: theme.spacing(1.5),
  borderRadius: theme.shape.borderRadius,
  '&:hover': {
    color: theme.palette.text.contrast,
    backgroundColor: theme.palette.background.hovering,
  },
  transition: 'all ease 0.15s',
}));

export const NavigationItemWrapper = styled(Box)(({ theme }) => ({
  borderRadius: theme.shape.borderRadius,
  marginBottom: theme.spacing(0.5),
  cursor: 'pointer',
  backgroundColor: theme.palette.background.overlay,
  '.item__flex': {
    borderRadius: theme.shape.borderRadius,
    padding: theme.spacing(1.5),
    display: 'flex',
    alignItems: 'center',
    height: 44,
  },
  '.item__flex:hover, .item__flex.active': {
    backgroundColor: theme.palette.background.hovering,
    transition: 'background ease 0.15s',
    'path, h6': {
      fill: theme.palette.text.contrast,
      color: theme.palette.text.contrast,
    },
  },
  '&& .vip_club': {
    'path, h6': {
      fill: theme.palette.support.orange,
      color: theme.palette.support.orange,
    },
  },
  '&&.live_support': {
    'path, h6': {
      fill: theme.palette.primary.main,
      color: theme.palette.primary.main,
    },
  },
  '&.grouped, &.sponsorships': {
    marginTop: theme.spacing(2),
  },
  '.icon__box': {
    width: 24,
    height: 24,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: theme.spacing(1.5),
    '& svg.MuiSvgIcon-root': {
      width: 20,
      height: 20,
    },
  },
}));

export const LanguageFiat = styled(Box)(({ theme }) => ({
  display: 'flex',
  flexDirection: 'row',
  justifyContent: 'space-between',
  marginTop: theme.spacing(2),
  '.language_box': {
    overflow: 'hidden',
    whiteSpace: 'nowrap',
    textOverflow: 'ellipsis',
    '.icon__box': {
      height: 24,
      width: 24,
    },
  },
  '.language_box, .fiat_box': {
    '&:hover': {
      backgroundColor: theme.palette.background.hovering,
      color: theme.palette.text.contrast,
      path: {
        fill: theme.palette.text.contrast,
      },
    },
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    width: '49%',
    height: 44,
    padding: theme.spacing(1.5),
    cursor: 'pointer',
    borderRadius: theme.shape.borderRadius,
    backgroundColor: theme.palette.background.overlay,
    h6: {
      overflow: 'unset',
    },
  },
  transition: 'flexDirection ease 0.15s',
}));
