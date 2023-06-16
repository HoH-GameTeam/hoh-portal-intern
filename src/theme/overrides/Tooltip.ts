import { Theme } from '@mui/material/styles';

// ----------------------------------------------------------------------

export default function Tooltip(theme: Theme) {
  const isLight = theme.palette.mode === 'light';

  return {
    MuiTooltip: {
      styleOverrides: {
        tooltip: {
          backgroundColor: theme.palette.background.hovering,
          color: theme.palette.text.primary,
        },
        arrow: {
          color: theme.palette.grey[isLight ? 800 : 700],
        },
      },
    },
  };
}
