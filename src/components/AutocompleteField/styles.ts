import Autocomplete from '@mui/material/Autocomplete';
import { styled } from '@mui/material/styles';

interface StyledAutocompleteProps {
  $isContrastBackground: boolean | undefined;
}

export const StyledAutocomplete = styled(Autocomplete, {
  shouldForwardProp: (prop) => prop !== '$isContrastBackground',
})<StyledAutocompleteProps>(({ $isContrastBackground, theme }) => ({
  width: '100%',
  height: '100%',
  '.MuiFormControl-root': {
    height: 'inherit',
  },
  '.MuiAutocomplete-input': {
    [theme.breakpoints.down('sm')]: {
      fontSize: 12,
      '&::placeholder': {
        fontSize: '12px',
      },
    },
    [theme.breakpoints.between('sm', 'lg')]: {
      fontSize: 14,
      '&::placeholder': {
        fontSize: '14px ',
      },
    },
    [theme.breakpoints.up('lg')]: {
      fontSize: 16,
      '&::placeholder': {
        fontSize: '16px',
      },
    },
  },

  '.MuiSvgIcon-root, .MuiAutocomplete-input::placeholder': {
    color: theme.palette.text.primary,
    opacity: 1,
  },
  '.MuiOutlinedInput-root.MuiInputBase-root': {
    height: 'inherit',
    backgroundColor: $isContrastBackground
      ? theme.palette.background.table
      : theme.palette.background.overlay,
    color: theme.palette.primary.contrastText,
  },
  '& .MuiOutlinedInput-root': {
    flexWrap: 'inherit',
    '& fieldset, &:hover fieldset': {
      border: $isContrastBackground
        ? `1px solid ${theme.palette.background.secondary}`
        : `1px solid ${theme.palette.background.overlay}`,
    },
    '&.Mui-focused fieldset': {
      border: $isContrastBackground
        ? `1px solid ${theme.palette.background.secondary}`
        : `1px solid ${theme.palette.secondary.main}`,
    },
  },
  '.MuiAutocomplete-endAdornment': {
    top: '50%',
    transform: 'translateY(-50%)',
  },
}));
