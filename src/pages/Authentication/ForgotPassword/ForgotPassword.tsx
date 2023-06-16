import { useState, useEffect, useRef } from 'react';
import { useForm } from 'react-hook-form';
import * as Yup from 'yup';

import { yupResolver } from '@hookform/resolvers/yup';
import { Box, Button, Typography } from '@mui/material';

import { emailRegex } from 'constants/regex';
import { ErrorMessage } from '@hookform/error-message';
import FormProvider, { RHFTextField } from '../../../components/hook-form';
import ValidationMessage from '../../../components/ValidationMessage';
import { useLocales } from '../../../locales';
import { useRequestRecoverPasswordMutation } from '../../../graphql';
import { EmailBox } from '../styles';
import { useSnackbar } from '../../../components/snackbar/SnackbarProvider';

interface ForgotPasswordForm {
  email: string;
}

const defaultCountdownTime = 60;

const ForgotPassword = () => {
  const { translate } = useLocales();
  const [requestResetPassword, { error: apolloError, data }] =
    useRequestRecoverPasswordMutation();
  const { addSnackbar } = useSnackbar();
  const [timer, setTimer] = useState(defaultCountdownTime);
  const timerIntervalId = useRef(null);

  const schema = Yup.object().shape({
    email: Yup.string()
      .matches(emailRegex, translate('validate_invalid_email_address'))
      .required(null)
      .trim(),
  });

  const form = useForm<ForgotPasswordForm>({
    defaultValues: {
      email: '',
    },
    resolver: yupResolver(schema),
    mode: 'onSubmit',
  });

  const countdown = () => {
    if (!timerIntervalId.current) {
      timerIntervalId.current = setInterval(() => {
        setTimer((prev) => {
          if (prev > 0) return prev - 1;
        });
      }, 1000);
    }
  };

  const handleForgotPassword = async (data: ForgotPasswordForm) => {
    const response = await requestResetPassword({
      variables: {
        email: data.email,
      },
    });

    if (response.data?.requestRecoverPassword.success) {
      addSnackbar(translate('request_reset_email'), 'success');
      countdown();
    }
  };

  useEffect(() => {
    if (timer === 0) {
      clearInterval(timerIntervalId.current);
      setTimer(defaultCountdownTime);
      timerIntervalId.current = null;
    }
  }, [timer]);

  return (
    <Box>
      <FormProvider
        methods={form}
        onSubmit={form.handleSubmit(handleForgotPassword)}
      >
        <EmailBox>
          <Typography variant="subtitle1" className="label">
            {translate('email')}:
          </Typography>
          <RHFTextField name="email" placeholder="Email@gmail.com" fullWidth />
        </EmailBox>
        <Typography
          fontSize={{ xs: 12, md: 14 }}
          variant="caption"
          whiteSpace="pre-wrap"
        >
          {translate('send_recover_link_to_email')}
        </Typography>
        {form.formState.isDirty &&
          !form.formState.isValid &&
          form.formState.isSubmitted && (
            <ValidationMessage
              mt={{ md: 1, sm: 1, xs: 2 }}
              message="Invalid email format"
              ml={0}
            />
          )}
        {data?.requestRecoverPassword?.error?.message && (
          <ValidationMessage
            mt={{ md: 1, sm: 1, xs: 2 }}
            message={data.requestRecoverPassword.error.message}
            ml={0}
          />
        )}
        {apolloError && (
          <ValidationMessage
            mt={{ md: 1, sm: 1, xs: 2 }}
            message={apolloError.message}
            ml={0}
          />
        )}
        {timer !== defaultCountdownTime && (
          <Typography
            mt={2}
            textAlign="center"
            style={{ textDecoration: 'underline' }}
          >{`Resend after ${timer} second`}</Typography>
        )}
        <Button
          sx={{
            '&&': {
              marginTop: 2,
            },
          }}
          className="confirm_button"
          type="submit"
          fullWidth
          variant="contained"
          color="secondary"
          disabled={timer !== defaultCountdownTime}
        >
          <Typography variant="subtitle1">
            {translate('reset_password')}
          </Typography>
        </Button>
      </FormProvider>
    </Box>
  );
};

export default ForgotPassword;
