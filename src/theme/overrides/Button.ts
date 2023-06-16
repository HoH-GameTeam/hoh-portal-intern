import { Theme } from '@mui/material/styles';

// ----------------------------------------------------------------------

// NEW VARIANT
declare module '@mui/material/Button' {
  interface ButtonPropsVariantOverrides {
    soft: true;
    disable: true;
  }
}

export default function Button(theme: Theme) {
  return {
    MuiButton: {
      defaultProps: {
        disableElevation: true,
        disableFocusRipple: true,
        disableRipple: true,
      },
      styleOverrides: {
        root: {
          borderRadius: theme.shape.borderRadius,
          textTransform: 'capitalize',
          transition: 'none',
          fontWeight: 700,
          fontSize: 16,
          '&.MuiButton-contained, &.MuiButton-disable': {
            paddingTop: theme.spacing(2),
            paddingBottom: theme.spacing(2),
            maxHeight: theme.spacing(6),
            [theme.breakpoints.down('sm')]: {
              maxHeight: theme.spacing(4.5),
              paddingTop: theme.spacing(1.25),
              paddingBottom: theme.spacing(1.25),
            },
          },
        },
        containedPrimary: {
          backgroundColor: theme.palette.primary.main,
          '&:hover': {
            backgroundColor: theme.palette.primary.main,
          },
        },
        containedSecondary: {
          backgroundColor: theme.palette.secondary.main,
          '&:hover': {
            backgroundColor: theme.palette.secondary.main,
          },
        },
      },
      variants: [
        {
          props: { variant: 'text' },
          style: {
            color: theme.palette.text.primary,
            '&&:hover': {
              backgroundColor: 'transparent',
              'p, span': {
                color: theme.palette.text.contrast,
              },
            },
          },
        },
        {
          props: { variant: 'contained' },
          style: {
            color: theme.palette.common.white,
            path: { fill: theme.palette.common.white },
          },
        },
        {
          props: { variant: 'disable' },
          style: {
            backgroundColor: theme.palette.background.disable,
            '&&': {
              color: theme.palette.text.disabled,
            },
            '&:hover': {
              backgroundColor: theme.palette.background.disable,
            },
            'not(.Mui-disabled) path': { fill: theme.palette.text.contrast },
            '.Mui-disabled path': { fill: theme.palette.text.disabled },
          },
        },
      ],
    },
  };
}
