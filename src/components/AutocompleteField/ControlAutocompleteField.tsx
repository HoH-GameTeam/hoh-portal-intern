/* eslint-disable react/default-props-match-prop-types */
import React from 'react';
import { Controller } from 'react-hook-form';

import ArrowDropDownRoundedIcon from '@mui/icons-material/ArrowDropDownRounded';
import { AutocompleteProps } from '@mui/material/Autocomplete';
import CloseRoundedIcon from '@mui/icons-material/CloseRounded';
import SearchIcon from '@mui/icons-material/Search';
import TextField from '@mui/material/TextField';

import { StyledAutocomplete } from './styles';
import { OptionsType } from '.';

interface ControlAutocompleteFieldProps
  extends Omit<
    AutocompleteProps<any, boolean, boolean, boolean>,
    'renderInput' | 'onChange'
  > {
  form: any;
  name: string;
  options: OptionsType[];
  disabled?: boolean;
  placeholder: string;
  onSelect?: (data: any) => void;
  $shouldHaveSearchBar?: boolean;
  $isContrastBackground?: boolean;
  $onSearchBarInputChange: (searchString: any) => void;
}

const ControlAutocompleteField = ({
  name,
  form,
  options,
  disabled,
  placeholder,
  $shouldHaveSearchBar,
  $isContrastBackground,
  $onSearchBarInputChange,
  ...props
}: ControlAutocompleteFieldProps) => (
  <Controller
    name={name}
    control={form.control}
    render={({ field: { onChange, value } }) => (
      <StyledAutocomplete
        fullWidth
        value={value}
        // remove clearIcon
        disableClearable
        options={options}
        disabled={disabled}
        freeSolo={$shouldHaveSearchBar}
        popupIcon={<ArrowDropDownRoundedIcon />}
        $isContrastBackground={$isContrastBackground}
        onInputChange={(_, text) => {
          $onSearchBarInputChange(text.trim());
          if (!text) {
            form.resetField(name);
          }
        }}
        clearIcon={<CloseRoundedIcon sx={{ width: 16, height: 16 }} />}
        onMouseDownCapture={(e) => {
          // isSearchBar: disabled show popup when input empty
          if ($shouldHaveSearchBar && value) {
            e.stopPropagation();
          }
        }}
        onChange={(_, data: any) => {
          onChange(data);
          if (props.onSelect) {
            props.onSelect(data);
          }
        }}
        getOptionLabel={(option: any) => option?.label || option}
        isOptionEqualToValue={(option: any, selected: any) =>
          String(option?.value) === String(selected?.value)
        }
        renderInput={(params) => (
          <TextField
            {...params}
            placeholder={placeholder}
            InputProps={{
              ...params.InputProps,
              startAdornment: $shouldHaveSearchBar && <SearchIcon />,
            }}
          />
        )}
        {...props}
      />
    )}
  />
);

ControlAutocompleteField.defaultProps = {
  disabled: false,
  $shouldHaveSearchBar: false,
  $isContrastBackground: false,
  $onSearchBarInputChange: () => {},
  onSelect: () => {},
};

export default ControlAutocompleteField;
