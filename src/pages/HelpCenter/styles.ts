import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Stack from '@mui/material/Stack';
import { styled } from '@mui/material/styles';

export const HelpCenterWrapper = styled(Container)(({ theme }) => ({
  '.title': {
    color: theme.palette.text.contrast,
    marginLeft: theme.spacing(1.5),
  },
}));

export const HelpTab = styled(Stack)(({ theme }) => ({
  height: 'max-content',
  backgroundColor: theme.palette.background.secondary,
  borderRadius: theme.shape.borderRadius,
  a: {
    textDecoration: 'none',
    color: theme.palette.text.primary,
    '&.active': {
      color: theme.palette.text.contrast,
      p: {
        fontWeight: 600,
      },
      div: {
        backgroundColor: theme.palette.background.hovering,
      },
    },
  },
}));

export const HelpTabItem = styled(Box)(({ theme }) => ({
  width: '100%',
  padding: theme.spacing(1, 2),
  marginBottom: theme.spacing(1),
  borderRadius: theme.shape.borderRadius,
  '&:hover': {
    backgroundColor: theme.palette.background.hovering,
    a: {
      color: theme.palette.text.contrast,
    },
  },
}));

export const HelpContentBox = styled(Box)(({ theme }) => ({
  borderRadius: theme.shape.borderRadius,
  backgroundColor: theme.palette.background.secondary,
  padding: theme.spacing(4, 3),
  [theme.breakpoints.down('sm')]: {
    padding: theme.spacing(2, 1),
  },
}));

export const SelectTabBox = styled(Box)(({ theme }) => ({
  '.select-item': {
    display: 'flex',
    '.tab_icon': {
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'flex-start',
      marginRight: theme.spacing(1),
      '.MuiSvgIcon-root': {
        width: 20,
        height: 20,
      },
    },
    h6: {
      color: theme.palette.text.primary,
    },
    '&& .MuiOutlinedInput-root': {
      '&&& fieldset': {
        border: 'none',
      },
    },
  },
}));
