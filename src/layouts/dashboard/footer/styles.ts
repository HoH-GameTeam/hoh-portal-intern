import { Box } from '@mui/material';
import { styled } from '@mui/material/styles';

export const FooterWrapper = styled(Box)(({ theme }) => ({
  width: '100%',
  backgroundColor: theme.palette.background.secondary,
  '.title': {
    color: theme.palette.text.contrast,
    marginBottom: theme.spacing(3),
    fontWeight: 500,
    [theme.breakpoints.down('md')]: {
      marginBottom: theme.spacing(1.5),
    },
  },
  '.list': {
    '.footer_link_item': {
      textDecoration: 'none',
      color: theme.palette.text.primary,
      [theme.breakpoints.down('sm')]: {
        fontSize: 12,
      },
      '&:hover span': {
        cursor: 'pointer',
        color: theme.palette.text.contrast,
      },
    },
  },
  [theme.breakpoints.up('md')]: {
    '.footer-content-left, .footer-content-right': {
      width: '40%',
    },
  },
  '.footer-content-left': {
    display: 'flex',
    flexDirection: 'column',
    [theme.breakpoints.down('md')]: {
      alignItems: 'center',
      span: {
        margin: 0,
        textAlign: 'center',
      },
    },
  },
  '.footer-content-right': {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    [theme.breakpoints.down('md')]: {
      alignItems: 'center',
      marginTop: theme.spacing(3),
      span: {
        margin: 0,
        textAlign: 'center',
      },
    },
  },
}));

export const GoTopBox = styled(Box)(({ theme }) => ({
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  alignItems: 'center',
  width: 'fit-content',
  height: 'max-content',
  alignSelf: 'center',
  cursor: 'pointer',
  borderRadius: theme.shape.borderRadius,
  backgroundColor: theme.palette.background.overlay,
  '&:hover': {
    backgroundColor: theme.palette.background.hovering,
    transition: 'all ease 0.3s',
  },
  [theme.breakpoints.down('md')]: {
    marginTop: theme.spacing(3),
  },
}));
