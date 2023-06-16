// form
import { useFormContext, Controller } from 'react-hook-form';
// @mui
import {
  DatePicker,
  LocalizationProvider,
  DatePickerProps,
} from '@mui/x-date-pickers';

import { AdapterDateFns } from '@mui/x-date-pickers/AdapterDateFns';
import CalendarMonthRoundedIcon from '@mui/icons-material/CalendarMonthRounded';
import Iconify from '../iconify/Iconify';

// ----------------------------------------------------------------------

type Props = DatePickerProps<any> & {
  name: string;
  label?: string;
  helperText?: React.ReactNode;
};

const CustomOpenPickerIcon = () => {
  return <Iconify icon="gg:calendar-dates" />;
};

export default function RHFRadioGroup({
  name,
  label,
  helperText,
  ...other
}: Props) {
  const { control } = useFormContext();

  return (
    <Controller
      name={name}
      control={control}
      render={({ field, fieldState: { error } }) => (
        <LocalizationProvider dateAdapter={AdapterDateFns}>
          <DatePicker
            {...field}
            value={field.value || null}
            format="dd/MM/yyyy"
            label={label}
            slots={{
              openPickerIcon: CustomOpenPickerIcon,
            }}
            slotProps={{
              textField: {
                fullWidth: true,
                error: !!error,
                helperText: !!helperText,
              },
              desktopPaper: {
                sx: {
                  '&&': {
                    '.Mui-selected, .Mui-selected:hover, .Mui-selected:focus': {
                      backgroundColor: (theme) => theme.palette.secondary.main,
                    },
                  },
                },
              },
              mobilePaper: {
                sx: {
                  '&&': {
                    '.Mui-selected, .Mui-selected:hover, .Mui-selected:focus': {
                      backgroundColor: (theme) => theme.palette.secondary.main,
                    },
                  },
                },
              },
            }}
            {...other}
          />
        </LocalizationProvider>
      )}
    />
  );
}
