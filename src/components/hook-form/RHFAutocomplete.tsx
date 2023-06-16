// @ts-nocheck
// form
import { useFormContext, Controller } from 'react-hook-form';
// @mui
import { Autocomplete, AutocompleteProps, TextField } from '@mui/material';
import Iconify from '../iconify/Iconify';

// ----------------------------------------------------------------------

interface Props<
  T,
  Multiple extends boolean | undefined,
  DisableClearable extends boolean | undefined,
  FreeSolo extends boolean | undefined,
> extends AutocompleteProps<
    { value: string | number; label: string },
    Multiple,
    DisableClearable,
    FreeSolo
  > {
  name: string;
  label?: string;
  helperText?: React.ReactNode;
  onChange?: (e: any) => void;
  options: { value: string | number; label: string }[];
}

export default function RHFAutocomplete<
  T,
  Multiple extends boolean | undefined,
  DisableClearable extends boolean | undefined,
  FreeSolo extends boolean | undefined,
>({
  name,
  label,
  options,
  ...other
}: Omit<
  Props<
    { value: string | number; label: string },
    Multiple,
    DisableClearable,
    FreeSolo
  >,
  'renderInput'
>) {
  const { control, setValue } = useFormContext();

  return (
    <Controller
      name={name}
      control={control}
      render={({ field, fieldState: { error } }) => {
        const convertedValue =
          options.find((i) => i.value === field.value) || null;
        return (
          <Autocomplete
            {...field}
            options={options}
            popupIcon={<Iconify icon="icon-park-outline:down" />}
            isOptionEqualToValue={(option: any, selected: any) => {
              return String(option?.value) === String(selected?.value);
            }}
            getOptionLabel={(op: any) => op?.label || ''}
            value={convertedValue}
            onChange={(_, data: any, reason) => {
              field.onChange(data?.value);
              if (reason === 'clear') {
                setValue(name, '');
                return;
              }
              if (other.onChange) other.onChange(data?.value);
              return data?.value;
            }}
            renderInput={(params) => (
              <TextField label={label} error={!!error} {...params} />
            )}
            onInputChange={(_, value, reason) => {
              if (reason === 'clear') setValue(name, null);
            }}
            sx={{
              height: 44,
              '.MuiAutocomplete-endAdornment': {
                mr: 2,
              },
              '&&& input': {
                padding: '2px',
              },
            }}
            color="secondary.main"
            slotProps={{
              paper: {
                sx: {
                  '.MuiAutocomplete-listbox': {
                    backgroundColor: (theme) => theme.palette.background.main,
                    padding: 0,
                    color: (theme) => theme.palette.text.primary,
                  },
                  '&&& .MuiAutocomplete-option:hover, &&& .Mui-focused': {
                    backgroundColor: (theme) =>
                      theme.palette.background.hovering,
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
            }}
            {...other}
          />
        );
      }}
    />
  );
}
