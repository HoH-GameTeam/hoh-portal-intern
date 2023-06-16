import { Theme } from '@mui/material/styles';

export default function TextField(theme: Theme) {
  return {
    MuiTextField: {
      styleOverrides: {
        root: {
          '& .MuiOutlinedInput-root': {
            input: {
              color: theme.palette.text.primary,
            },
            borderRadius: 4,
            border: 'none',
            '&:hover fieldset': {
              border: 'none',
            },
            '&.Mui-focused fieldset': {
              border: `1px solid ${theme.palette.secondary.main}`,
            },
            '& fieldset': {
              border: 'none',
            },
          },
          '.Mui-focused input': {
            color: theme.palette.text.contrast,
          },
          '& input::-webkit-outer-spin-button, & input::-webkit-inner-spin-button':
            {
              display: 'none',
            },
        },
      },
    },
  };
}
