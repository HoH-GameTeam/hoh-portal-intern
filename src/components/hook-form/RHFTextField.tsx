import React from 'react';
import { Controller, useFormContext } from 'react-hook-form';

import {
  InputAdornment,
  styled,
  TextField,
  TextFieldProps,
} from '@mui/material';

import { IconVisibility, IconVisibilityOff } from '../../assets/icons';

// ----------------------------------------------------------------------

type Props = TextFieldProps & {
  name: string;
  isPasswordInput?: boolean;
};

export default function RHFTextField({
  name,
  helperText,
  isPasswordInput,
  ...other
}: Props) {
  const [isShowPassword, setIsShowPassword] = React.useState(false);

  const handleClickVisibilityIcon = () => setIsShowPassword((curr) => !curr);
  const { control, clearErrors } = useFormContext();

  return (
    <Controller
      name={name}
      control={control}
      render={({ field }) => (
        <StyledTextField
          {...field}
          fullWidth
          variant="outlined"
          type={isPasswordInput && !isShowPassword ? 'password' : other.type}
          onBlur={() => {
            field.onBlur();
            if (!field.value) clearErrors();
          }}
          value={
            typeof field.value === 'number' && field.value === 0
              ? ''
              : field.value
          }
          InputProps={
            isPasswordInput
              ? {
                  endAdornment: (
                    <InputAdornment position="end">
                      {isShowPassword ? (
                        <IconVisibility
                          sx={{ cursor: 'pointer' }}
                          onClick={() => handleClickVisibilityIcon()}
                        />
                      ) : (
                        <IconVisibilityOff
                          sx={{ cursor: 'pointer' }}
                          onClick={() => handleClickVisibilityIcon()}
                        />
                      )}
                    </InputAdornment>
                  ),
                }
              : {}
          }
          {...other}
        />
      )}
    />
  );
}

const StyledTextField = styled(TextField)(({ theme }) => ({
  '&&& .MuiFormControl-marginNormal': {
    margin: 0,
  },
  '& .MuiOutlinedInput-root': {
    paddingRight: 0,
    borderRadius: theme.shape.borderRadius,
    backgroundColor: theme.palette.background.main,
    border: 'none',
    input: {
      padding: theme.spacing(2),
      height: 16,
      [theme.breakpoints.down('sm')]: {
        padding: theme.spacing(1.25, 2),
        fontSize: 16,
        height: 28,
      },
    },
    '& fieldset': {
      borderColor: theme.palette.background.main,
    },
    '&:hover fieldset': {
      border: 'none',
    },
    '&.Mui-focused fieldset': {
      border: `1px solid ${theme.palette.secondary.main}`,
    },
  },
  '.MuiInputAdornment-positionEnd': {
    position: 'absolute',
    right: '14px',
    '&:hover': {
      path: {
        fill: theme.palette.text.contrast,
      },
    },
    transition: 'all ease 0.3s',
  },
  '.MuiFormHelperText-root.Mui-error': {
    marginLeft: 0,
    fontSize: 12,
  },
  '.MuiSvgIcon-root': {
    color: theme.palette.text.disabled,
  },
  '&& .MuiInput-root:before, && .MuiInput-root:hover::before, && .Mui-focused.MuiInput-root:after':
    {
      borderBottom: `2px solid ${theme.palette.background.main}`,
    },
}));
