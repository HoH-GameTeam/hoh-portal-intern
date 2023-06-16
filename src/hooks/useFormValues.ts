import { useFormContext, useWatch } from 'react-hook-form';

// reference: https://www.react-hook-form.com/api/usewatch/

export default function useFormValues(field?) {
  const { getValues } = useFormContext();

  useWatch({ name: field });

  return getValues(field);
}
