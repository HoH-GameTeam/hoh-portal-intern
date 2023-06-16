import { Theme } from '@mui/material/styles';
import { CheckboxProps } from '@mui/material';
//
import {
  CheckboxIcon,
  CheckboxCheckedIcon,
  CheckboxIndeterminateIcon,
} from './CustomIcons';

// ----------------------------------------------------------------------

export default function Checkbox(theme: Theme) {
  return {
    MuiCheckbox: {
      defaultProps: {
        icon: <CheckboxIcon />,
        checkedIcon: <CheckboxCheckedIcon />,
        indeterminateIcon: <CheckboxIndeterminateIcon />,
        disableRipple: true,
      },

      styleOverrides: {
        root: ({ ownerState }: { ownerState: CheckboxProps }) => ({
          padding: 0,
          path: {
            fill: theme.palette.primary.main,
          },
          '.Mui-checked': {
            backgroundColor: theme.palette.common.white,
          },
          ...(ownerState.size === 'small' && {
            '& svg': { width: 20, height: 20 },
          }),
          ...(ownerState.size === 'medium' && {
            '& svg': { width: 24, height: 24 },
          }),
        }),
      },
    },
  };
}
