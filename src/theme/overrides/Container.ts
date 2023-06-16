import { Theme } from '@mui/material/styles';

export default function Checkbox(theme: Theme) {
  return {
    MuiContainer: {
      styleOverrides: {
        root: {
          [theme.breakpoints.down('sm')]: {
            padding: 0,
          },
        },
      },
    },
  };
}
