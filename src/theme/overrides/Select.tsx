import { Theme } from '@mui/material/styles';
//
import { InputSelectIcon } from './CustomIcons';

// ----------------------------------------------------------------------

export default function Select(theme: Theme) {
  return {
    MuiSelect: {
      defaultProps: {
        IconComponent: InputSelectIcon,
      },
      styleOverrides: {
        root: {
          '.MuiOutlinedInput-root': {
            '&.Mui-focused fieldset': {
              border: 'none',
            },
          },
          '.MuiSelect-outlined': {
            [theme.breakpoints.down('sm')]: {
              padding: theme.spacing(1.25, 2),
            },
          },
        },
      },
    },
  };
}
