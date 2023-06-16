/* eslint-disable jsx-a11y/no-static-element-interactions */
import React from 'react';
import { useForm } from 'react-hook-form';
import * as Yup from 'yup';

import { yupResolver } from '@hookform/resolvers/yup';
import { Box, Button, Typography } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import ValidationMessage from '../../../components/ValidationMessage';

import { useSnackbar } from '../../../components/snackbar';
import FormProvider, { RHFTextField } from '../../../components/hook-form';
import { useLocales } from '../../../locales';
import { SignInWrapper } from './styles';
import { EmailBox, PasswordBox } from '../styles';

import { useLoginMutation } from '../../../graphql';
import { setSession } from '../../../auth/utils';
import { HELP_CENTER_PATHS } from '../../../routes/routesPage/helpCenter';

interface SignInForm {
  email: string;
  password: string;
}

interface Props {
  handleCloseAuthDialog: () => void;
  openSignUp: () => void;
  openForgotPassword: () => void;
}

const SignIn = ({
  handleCloseAuthDialog,
  openSignUp,
  openForgotPassword,
}: Props) => {
  const { translate } = useLocales();
  const { addSnackbar } = useSnackbar();
  const [login, { loading, data, error: apolloError }] = useLoginMutation();
  const navigate = useNavigate();

  const schema = Yup.object().shape({
    email: Yup.string().required().trim(),
    password: Yup.string().required().trim(),
  });

  const form = useForm<SignInForm>({
    defaultValues: {
      email: '',
      password: '',
    },
    resolver: yupResolver(schema),
    mode: 'onSubmit',
  });

  const handleSignIn = (data: SignInForm) => {
    login({
      variables: {
        email: data.email,
        password: data.password,
      },
    }).then((response) => {
      if (response?.data?.login.success) {
        handleCloseAuthDialog();
        addSnackbar('Welcome to Coco.game', 'success');
        setSession(response.data.login.content.accessToken);
      }
    });
  };

  const handleViewTerms = () => {
    navigate(HELP_CENTER_PATHS.TERMS_SERVICE);
    handleCloseAuthDialog();
  };

  return (
    <SignInWrapper>
      <FormProvider methods={form} onSubmit={form.handleSubmit(handleSignIn)}>
        <EmailBox>
          <Typography variant="subtitle1" className="label">
            {translate('email')}:
          </Typography>
          <RHFTextField name="email" placeholder="Email@gmail.com" fullWidth />
        </EmailBox>
        <PasswordBox>
          <Typography variant="subtitle1" className="label">
            {translate('password')}:
          </Typography>
          <RHFTextField
            fullWidth
            name="password"
            placeholder={translate('enter_password_here')}
            isPasswordInput
          />
        </PasswordBox>
        <Typography
          onClick={() => openForgotPassword()}
          sx={{
            mt: { lg: 3 },
            fontSize: { xs: 12, lg: 16 },
          }}
          variant="subtitle2"
          className="primary_green"
        >
          {translate('forgot_your_password')}
        </Typography>
        {data?.login?.error?.message && (
          <ValidationMessage
            mt={{ md: 1, sm: 1, xs: 2 }}
            mb={{ md: -1, sm: -1 }}
            message={data.login.error?.message}
            ml={0}
          />
        )}
        {apolloError && (
          <ValidationMessage
            mt={{ md: 1, sm: 1, xs: 2 }}
            mb={{ md: -1, sm: -1 }}
            message={apolloError.message}
            ml={0}
          />
        )}

        <Button
          className="confirm_button"
          type="submit"
          fullWidth
          variant={!form.formState.isValid ? 'disable' : 'contained'}
          disabled={!form.formState.isValid || loading}
          color="secondary"
        >
          <Typography variant="subtitle1">{translate('sign_in')}</Typography>
        </Button>
        <Typography sx={{ fontSize: { xs: 12, sm: 16 } }} whiteSpace="pre-wrap">
          {translate('confirm_accessing_site')}
          <span
            onClick={() => handleViewTerms()}
            className="primary_green underline ml4"
          >
            {translate('terms_of_service')}
          </span>
        </Typography>
        <Box
          my={{ lg: 3, md: 2, sm: 2, xs: 3 }}
          display="flex"
          alignItems="center"
          justifyContent="center"
        >
          <Typography
            sx={{ color: 'text.contrast', fontSize: { xs: 12, md: 16 } }}
            fontWeight={400}
          >
            {translate('dont_have_account')}
            {/* eslint-disable-next-line jsx-a11y/no-static-element-interactions */}
            <span
              onClick={() => openSignUp()}
              className="primary_green underline ml4"
            >
              {translate('sign_up')}
            </span>
          </Typography>
        </Box>
      </FormProvider>
    </SignInWrapper>
  );
};

export default SignIn;
