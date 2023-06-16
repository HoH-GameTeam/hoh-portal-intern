import { MenuItem, TextField, TextFieldProps } from '@mui/material';

type PropsType = TextFieldProps & {
  value: number;
  native?: boolean;
  maxHeight?: number;
  handleSelect: (value: any) => void;
  options: Array<{ label: string; value: number }>;
};

export default function SelectField({
  native,
  value = 2,
  maxHeight = 120,
  options = [],
  handleSelect,
  ...others
}: PropsType) {
  return (
    <TextField
      value={value}
      select
      fullWidth
      onChange={handleSelect}
      SelectProps={{
        native,
        MenuProps: {
          PaperProps: {
            sx: {
              ...(!native && {
                maxHeight: typeof maxHeight === 'number' ? maxHeight : 'unset',
                '& .MuiMenuItem-root': {
                  px: 1,
                  borderRadius: 0.75,
                  typography: 'body2',
                  textTransform: 'capitalize',
                },
              }),
            },
          },
          sx: {
            '.MuiMenu-list': {
              backgroundColor: (theme) => theme.palette.background.main,
              padding: 0,
              color: (theme) => theme.palette.text.primary,
            },
            '&&& .Mui-selected': {
              backgroundColor: (theme) => theme.palette.background.hovering,
            },
            '&& .MuiMenuItem-root': {
              paddingTop: (theme) => theme.spacing(1),
              paddingBottom: (theme) => theme.spacing(1),
              img: {
                width: 16,
                height: 16,
              },
            },
          },
        },
        sx: {
          textTransform: 'capitalize',
          '.MuiSelect-select': {
            pt: '8.5px',
            pb: '8.5px',
          },
          '.MuiOutlinedInput-root': {
            '&.Mui-focused fieldset': {
              border: (theme) => `1px solid ${theme.palette.secondary.main}`,
            },
          },
        },
      }}
      {...others}
    >
      {options.map((opt) => (
        <MenuItem key={opt.value} value={opt.value}>
          {opt.label}
        </MenuItem>
      ))}
    </TextField>
  );
}

SelectField.defaultProps = {
  native: false,
  maxHeight: 120,
};
