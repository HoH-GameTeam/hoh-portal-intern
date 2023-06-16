import { Box } from '@mui/material';
import { styled } from '@mui/material/styles';

export const Header = styled(Box)(({ theme }) => ({
  display: 'flex',
  height: 60,
  alignItems: 'center',
  justifyContent: 'space-between',
  paddingLeft: theme.spacing(3),
  paddingRight: theme.spacing(3),
  '.title': {
    color: theme.palette.text.contrast,
  },
  '.close-btn': {
    padding: 0,
  },
}));

export const Body = styled(Box)(({ theme }) => ({
  padding: theme.spacing(3),
  [theme.breakpoints.down('sm')]: {
    padding: theme.spacing(2.5),
    '&&& p': {
      fontSize: 14,
    },
  },
  height: 'calc(100% - 60px)',
  minHeight: 660,
  overflowY: 'auto',
  '::-webkit-scrollbar': {
    display: 'none',
  },
  '.copy_btn': {
    marginLeft: theme.spacing(1),
    padding: 'unset',
    svg: {
      fontSize: 20,
    },
    path: {
      fill: theme.palette.text.primary,
    },
    'svg:hover': {
      path: {
        fill: theme.palette.text.contrast,
      },
    },
  },
  img: {
    height: 16,
    width: 16,
    '&.currency_image': {
      marginLeft: theme.spacing(0.5),
    },
    '&.avatar': {
      marginRight: theme.spacing(0.5),
      borderRadius: '50%',
    },
    [theme.breakpoints.down('sm')]: {
      height: 14,
      width: 14,
    },
  },
  '.item_wrap': {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between',
    alignItems: 'center',
    flex: 1,
    maxWidth: '33%',
    '&:not(:last-of-type)': {
      marginRight: theme.spacing(1),
    },
    borderRadius: theme.shape.borderRadius,
    backgroundColor: theme.palette.background.secondary,
    padding: theme.spacing(1.5),
    p: { fontSize: 12 },
    '.label_box': {
      marginBottom: theme.spacing(1),
      justifyContent: 'center',
    },
    '& > div': {
      width: '100%',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
    },
    'p.increase': {
      color: theme.palette.primary.main,
    },
    'p.decrease': {
      color: theme.palette.support.orange,
    },
  },
}));

export const GameInfoBox = styled(Box)(({ theme }) => ({
  display: 'flex',
  justifyContent: 'space-between',
  padding: theme.spacing(1.5),
  marginTop: theme.spacing(1.5),
  marginBottom: theme.spacing(2),
  borderRadius: theme.shape.borderRadius,
  backgroundColor: theme.palette.background.secondary,
  '& > .MuiBox-root': {
    display: 'flex',
  },
  'img.game_preview': {
    width: 60,
    height: 60,
    marginRight: theme.spacing(2),
    borderRadius: theme.shape.borderRadius,
  },
  '.play_btn': {
    alignSelf: 'center',
    padding: theme.spacing(1, 2),
    height: 36,
  },
}));
