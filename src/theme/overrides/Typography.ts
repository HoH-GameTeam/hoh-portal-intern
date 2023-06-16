import { Theme } from '@mui/material/styles';

// ----------------------------------------------------------------------

export default function Typography(theme: Theme) {
  return {
    MuiTypography: {
      defaultProps: {
        variant: 'body2',
      },
      styleOverrides: {
        root: {
          whiteSpace: 'nowrap',
          overflow: 'hidden',
          textOverflow: 'ellipsis',
          '&:first-letter': {
            textTransform: 'capitalize',
          },
        },
        paragraph: {
          marginBottom: theme.spacing(2),
        },
        gutterBottom: {
          marginBottom: theme.spacing(1),
        },
      },
    },
  };
}
