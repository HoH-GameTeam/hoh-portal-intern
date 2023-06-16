import Box from '@mui/material/Box';
import { styled } from '@mui/material/styles';

import { NAV } from '../../../config-global';

export const NavigationWrapper = styled(Box)(({ theme }) => ({
  backgroundColor: theme.palette.background.secondary,
  width: NAV.W_DASHBOARD_MINI,
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'space-between',
  transition: 'width 0.3s ease',
  overflowX: 'hidden',
  boxShadow: theme.shadows[6],
  height: '100%',
  padding: `0 ${theme.spacing(1)}`,
  '::-webkit-scrollbar': {
    display: 'none',
  },
  '.nav__box': {
    display: 'flex',
    flexDirection: 'column',
  },
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
      fontWeight: 600,
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
    '& svg.MuiSvgIcon-root': {
      width: 20,
      height: 20,
    },
  },
}));

export const LanguageFiat = styled(Box)(({ theme }) => ({
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'space-between',
  marginTop: theme.spacing(2),
  '.language_box': {
    marginBottom: theme.spacing(1),
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
    width: '100%',
    height: 44,
    padding: theme.spacing(1.5),
    cursor: 'pointer',
    borderRadius: theme.shape.borderRadius,
    backgroundColor: theme.palette.background.overlay,
    h6: {
      overflow: 'unset',
    },
    transition: 'all ease 0.15s',
  },
  transition: 'flexDirection ease 0.15s',
}));

export const ThemeModeBox = styled(Box)(({ theme }) => ({
  width: '100%',
  height: 48,
  display: 'flex',
  alignItems: 'center',
  backgroundColor: theme.palette.background.overlay,
  borderRadius: theme.shape.borderRadius,
  cursor: 'pointer',
  padding: theme.spacing(1.5),
  '&:hover': {
    transition: 'background ease 0.15s',
  },
  marginBottom: theme.spacing(2),
}));
