import { styled } from '@mui/material/styles';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';

export const AuthenticatedUserWrapper = styled(Grid)(({ theme }) => ({
  height: '100%',
  '.wrapper': {
    padding: theme.spacing(0.5, 2),
    [theme.breakpoints.down('sm')]: {
      padding: theme.spacing(0, 1.5),
    },
    [theme.breakpoints.up('sm')]: {
      backgroundColor: theme.palette.background.main,
      p: { fontWeight: 500 },
    },
    borderRadius: theme.shape.borderRadius,
    marginRight: theme.spacing(0),
  },
  [theme.breakpoints.down('sm')]: {
    '.balance_wallet': {
      borderRadius: theme.shape.borderRadius,
      paddingLeft: theme.spacing(1.5),
      backgroundColor: theme.palette.background.main,
    },
  },
  color: theme.palette.text.contrast,
  '.menu_icon_btn': {
    padding: 0,
    marginLeft: theme.spacing(1.5),
  },
}));

export const UserInfoBox = styled(Box)(({ theme }) => ({
  marginLeft: theme.spacing(2),
  '.user_name_accomplishment': {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between',
    width: 80,
    marginRight: theme.spacing(1.5),
    [theme.breakpoints.down('sm')]: {
      display: 'none',
    },
  },
  '.accomplishment_amount': {
    height: 16,
    '& img': {
      height: 16,
      width: 16,
    },
  },
  '.user_avatar_box': {
    position: 'relative',
    '.user_avatar': {
      width: 40,
      height: 40,
      cursor: 'pointer',
      [theme.breakpoints.down('sm')]: {
        width: 36,
        height: 36,
      },
    },
  },
}));

export const BalanceBox = styled(Box)(({ theme }) => ({
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'space-evenly',
  cursor: 'pointer',
  '& div': {
    height: 'fit-content',
  },
  '.current_currency': {
    display: 'flex',
    alignItems: 'center',
    img: {
      width: 20,
      height: 20,
      marginRight: theme.spacing(0.5),
      [theme.breakpoints.down('sm')]: {
        width: 16,
        height: 16,
      },
    },
    '.MuiSvgIcon-root': {
      width: 20,
      height: 20,
      [theme.breakpoints.down('sm')]: {
        width: 16,
        height: 16,
      },
    },
  },
  p: {
    [theme.breakpoints.down('sm')]: {
      lineHeight: '10px',
      height: 10,
    },
  },
}));

export const MyWalletBox = styled(Box)(({ theme }) => ({
  '.my_wallet_btn': {
    padding: `${theme.spacing(1.5)} ${theme.spacing(2.5)}`,
    width: 'max-content',
    fontWeight: 600,
    [theme.breakpoints.down('sm')]: {
      padding: theme.spacing(1),
      minWidth: 'unset',
      '.MuiButton-startIcon': {
        margin: 0,
      },
    },
  },
}));
