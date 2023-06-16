import { Theme } from '@mui/material/styles';
import { SwitchProps } from '@mui/material';

// ----------------------------------------------------------------------

export default function Switch(theme: Theme) {
  // const isLight = theme.palette.mode === 'light';

  const rootStyle = (ownerState: SwitchProps) => ({});

  return {
    MuiSwitch: {
      styleOverrides: {
        root: ({ ownerState }: { ownerState: SwitchProps }) =>
          rootStyle(ownerState),
      },
    },
  };
}
