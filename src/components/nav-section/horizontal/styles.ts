import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import { NAV } from '../../../config-global';

export const NavHorizontalWrapper = styled(Box)(({ theme }) => ({
  zIndex: 999,
  display: 'flex',
  width: '100%',
  height: NAV.H_DASHBOARD_ITEM_HORIZONTAL,
  [theme.breakpoints.down(350)]: {
    height: NAV.H_DASHBOARD_ITEM_HORIZONTAL,
  },
  padding: theme.spacing(0.5),
  justifyContent: 'space-around',
  position: 'fixed',
  bottom: 0,
  right: 0,
  left: 0,
  backgroundColor: theme.palette.background.secondary,
}));
