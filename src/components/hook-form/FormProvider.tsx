// form
import { FormProvider as Form, UseFormReturn } from 'react-hook-form';

// ----------------------------------------------------------------------

type Props = {
  children: React.ReactNode;
  methods: UseFormReturn<any>;
  onSubmit?: VoidFunction;
  width?: string | number;
};

export default function FormProvider({
  children,
  onSubmit,
  methods,
  width,
}: Props) {
  return (
    <Form {...methods}>
      <form
        style={{ width: width || 'inherit' }}
        autoComplete="off"
        onSubmit={onSubmit}
      >
        {children}
      </form>
    </Form>
  );
}
