/* eslint-disable react/default-props-match-prop-types */
import React, { useState } from 'react';

import ArrowDropDownRoundedIcon from '@mui/icons-material/ArrowDropDownRounded';
import CloseRoundedIcon from '@mui/icons-material/CloseRounded';
import SearchIcon from '@mui/icons-material/Search';
import TextField from '@mui/material/TextField';
import { AutocompleteProps } from '@mui/material/Autocomplete';
import { StyledAutocomplete } from './styles';

export type OptionsType = {
  label: string;
  value: number | string;
  type?: string;
};

export interface AutocompleteFieldProps
  extends Omit<
    AutocompleteProps<any, boolean, boolean, boolean>,
    'onSelect' | 'renderInput' | 'options'
  > {
  disabled?: boolean;
  placeholder: string;
  options: Array<OptionsType>;
  $shouldHaveSearchBar?: boolean;
  $isContrastBackground?: boolean;
  disabledSuggestions: boolean;
  onSelect: (op: OptionsType | null) => void;
  $onSearchBarInputChange: (arg0: string) => void;
}

const emptyOptionValue = 'empty';

export const AutocompleteField = ({
  options,
  disabled,
  onSelect,
  placeholder,
  $shouldHaveSearchBar,
  $isContrastBackground,
  $onSearchBarInputChange,
  disabledSuggestions,
  ...props
}: AutocompleteFieldProps) => {
  const [searchValue, setSearchValue] = useState<string>('');

  return (
    <StyledAutocomplete
      size="medium"
      fullWidth
      // remove clearIcon
      disableClearable
      options={options}
      disabled={disabled}
      freeSolo={$shouldHaveSearchBar}
      inputValue={searchValue}
      onInputChange={(_, text) => {
        setSearchValue(text);
        $onSearchBarInputChange(text.trim());
      }}
      onChange={(_, data: any) => {
        if (onSelect) onSelect(data);
      }}
      onMouseDownCapture={(e) => {
        if ($shouldHaveSearchBar && !searchValue) {
          e.stopPropagation();
        }
      }}
      clearIcon={<CloseRoundedIcon sx={{ width: 16, height: 16 }} />}
      popupIcon={<ArrowDropDownRoundedIcon />}
      $isContrastBackground={$isContrastBackground}
      getOptionLabel={(option: any) => option.label || option}
      isOptionEqualToValue={(option: any, selected: any) =>
        String(option?.value) === String(selected?.value)
      }
      ListboxProps={{
        style: {
          ...(disabledSuggestions && {
            display: 'none',
          }),
        },
      }}
      getOptionDisabled={(option: any) => option.value === emptyOptionValue}
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
  );
};

AutocompleteField.defaultProps = {
  disabled: false,
  disabledSuggestions: false,
  $isContrastBackground: false,
  $shouldHaveSearchBar: false,
  $onSearchBarInputChange: () => {},
};

export default AutocompleteField;
