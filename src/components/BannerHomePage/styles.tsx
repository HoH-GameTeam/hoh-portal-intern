import { styled } from '@mui/material/styles';
import Grid from '@mui/material/Grid';

export const RewardBonusWrapper = styled(Grid)(() => ({
  width: '100%',
}));

export const RewardNumberBox = styled(Grid)(({ theme }) => ({
  display: 'flex',
  flexDirection: 'column',
  color: theme.palette.text.contrast,
  paddingTop: theme.spacing(4),
  [theme.breakpoints.up('md')]: {
    alignItems: 'flex-start',
  },
  [theme.breakpoints.down('md')]: {
    alignItems: 'center',
  },
  '.user_name': {
    color: theme.palette.support.orange,
  },
  '.deposit_bonus': {
    color: theme.palette.support.orange,
  },
  '.deposit_btn': {
    borderRadius: theme.shape.borderRadius * 2,
    [theme.breakpoints.up('md')]: {
      padding: `${theme.spacing(2)} ${theme.spacing(4)}`,
    },
    [theme.breakpoints.down('md')]: {
      padding: `${theme.spacing(1)} ${theme.spacing(3)}`,
    },
  },
  '.first_deposit, .deposit_bonus, .deposit_btn': {
    marginBottom: theme.spacing(1),
  },
  '.first_deposit': {
    marginTop: theme.spacing(1),
  },
}));

export const ThumbBox = styled(Grid)(({ theme }) => ({
  width: '100%',
  display: 'flex',
  [theme.breakpoints.up('md')]: {
    justifyContent: 'flex-end',
  },
  [theme.breakpoints.down('md')]: {
    justifyContent: 'center',
  },
  img: {
    width: '80%',
    height: '80%',
  },
}));
