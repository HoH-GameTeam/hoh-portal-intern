/* eslint-disable jsx-a11y/no-static-element-interactions */
import React from 'react';

import { useForm } from 'react-hook-form';
import * as Yup from 'yup';
import { Typography, Box, Button, Checkbox } from '@mui/material';
import CheckRoundedIcon from '@mui/icons-material/CheckRounded';
import { yupResolver } from '@hookform/resolvers/yup';
import { ErrorMessage } from '@hookform/error-message';
import { useNavigate } from 'react-router-dom';
import { emailRegex } from '../../../constants';
import ValidationMessage from '../../../components/ValidationMessage';
import FormProvider, { RHFTextField } from '../../../components/hook-form';
import { useLocales } from '../../../locales';
import { SignUpWrapper } from './styles';
import { EmailBox, PasswordBox } from '../styles';
import { useRegisterMutation } from '../../../graphql';
import { useSnackbar } from '../../../components/snackbar/SnackbarProvider';
import { setSession } from '../../../auth/utils';
import { HELP_CENTER_PATHS } from '../../../routes/routesPage/helpCenter';

interface Props {
  openSignIn: () => void;
  handleCloseAuthDialog: () => void;
}

interface SignUpForm {
  email: string;
  password: string;
}

enum PASSWORD_RULES {
  NUMBER = 'REQUIRED_NUMBER',
  LOWER_UPPER = 'REQUIRED_LOWER_UPPERCASE',
  LENGTH = 'AT_LEAST_6',
}

const SignUp = ({ openSignIn, handleCloseAuthDialog }: Props) => {
  const { translate } = useLocales();
  const [isAgreeTermsService, setIsAgreeTermsService] = React.useState(false);
  const [register, { data, loading, error: apolloError }] =
    useRegisterMutation();
  const { addSnackbar } = useSnackbar();
  const navigate = useNavigate();

  const schema = Yup.object().shape({
    email: Yup.string()
      .matches(emailRegex, translate('validate_invalid_email_address'))
      .required()
      .trim(),
    password: Yup.string().required().trim(),
  });

  const form = useForm<SignUpForm>({
    defaultValues: {
      email: '',
      password: '',
    },
    resolver: yupResolver(schema),
    mode: 'onChange',
  });

  const password = form.watch('password');

  const errors = React.useMemo(() => {
    const errors = [];

    if (password.trim().length < 6) errors.push(PASSWORD_RULES.LENGTH);
    if (!password.trim().match(/[0-9]+/)) errors.push(PASSWORD_RULES.NUMBER);
    if (!password.trim().match(/(?=.*?[A-Z])(?=.*?[a-z])/))
      errors.push(PASSWORD_RULES.LOWER_UPPER);

    return errors;
  }, [password]);

  const handleSignUp = async (data: SignUpForm) => {
    const response = await register({
      variables: {
        email: data.email,
        password: data.password,
      },
    });

    if (response.data?.register.success) {
      handleCloseAuthDialog();
      setSession(response.data.register.content?.accessToken);
      addSnackbar('Welcome to Coco.game', 'success');
    }
  };

  const handleViewTermsService = () => {
    navigate(HELP_CENTER_PATHS.TERMS_SERVICE);
    handleCloseAuthDialog();
  };

  const isDisableSubmit =
    errors.length > 0 ||
    !form.formState.isValid ||
    !isAgreeTermsService ||
    loading;

  return (
    <SignUpWrapper>
      <FormProvider methods={form} onSubmit={form.handleSubmit(handleSignUp)}>
        <EmailBox>
          <Typography variant="subtitle1" className="label">
            {translate('email')}:
          </Typography>
          <RHFTextField name="email" placeholder="Email@gmail.com" fullWidth />
          <ErrorMessage
            name="email"
            errors={form?.formState?.errors}
            render={({ message }) => (
              <ValidationMessage mt={1} ml={0} message={message} />
            )}
          />
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
          <Box mt={2.25} display="flex" alignItems="center">
            <div
              className={`box_item ${
                !errors.includes(PASSWORD_RULES.LOWER_UPPER) && 'isMatch'
              }`}
            >
              {!errors.includes(PASSWORD_RULES.LOWER_UPPER) && (
                <CheckRoundedIcon />
              )}
            </div>
            <Typography>{translate('include_lower_uppercase')}</Typography>
          </Box>
          <Box display="flex" alignItems="center">
            <div
              className={`box_item ${
                !errors.includes(PASSWORD_RULES.NUMBER) && 'isMatch'
              }`}
            >
              {!errors.includes(PASSWORD_RULES.NUMBER) && <CheckRoundedIcon />}
            </div>
            <Typography>{translate('at_least_1_number')}</Typography>
          </Box>
          <Box display="flex" alignItems="center">
            <div
              className={`box_item ${
                !errors.includes(PASSWORD_RULES.LENGTH) && 'isMatch'
              }`}
            >
              {!errors.includes(PASSWORD_RULES.LENGTH) && <CheckRoundedIcon />}
            </div>
            <Typography>{translate('minimum_6_char')}</Typography>
          </Box>
        </PasswordBox>
        <Box mt={3} display="flex" alignItems="flex-start">
          <Checkbox
            color="primary"
            size="small"
            checked={isAgreeTermsService}
            onChange={(_, checked) => setIsAgreeTermsService(checked)}
            sx={{
              mt: { xs: 0.25, md: 0 },
              width: { xs: 16, md: 24 },
              height: { xs: 16, md: 24 },
            }}
          />
          <Typography
            fontSize={{ xs: 12, sm: 14, lg: 16 }}
            ml={1}
            variant="body2"
            whiteSpace="pre-wrap"
          >
            {translate('agree_terms_service')}
            <span
              onClick={() => handleViewTermsService()}
              className="primary_green underline ml4"
            >
              {translate('terms_conditions')}
            </span>
          </Typography>
        </Box>
        {data?.register?.error?.message && (
          <ValidationMessage
            mt={{ lg: 1, md: 1, sm: 1, xs: 2 }}
            mb={{ lg: -2, md: -1, sm: -1 }}
            message={data.register.error?.message}
            ml={0}
          />
        )}
        {apolloError && (
          <ValidationMessage
            mt={{ lg: 1, md: 1, sm: 1, xs: 2 }}
            mb={{ lg: -2, md: -1, sm: -1 }}
            message={apolloError.message}
            ml={0}
          />
        )}

        <Button
          className="confirm_button"
          type="submit"
          fullWidth
          variant={isDisableSubmit ? 'disable' : 'contained'}
          color="secondary"
          disabled={isDisableSubmit}
        >
          <Typography variant="subtitle1">{translate('sign_up')}</Typography>
        </Button>
        <Box display="flex" alignItems="center" justifyContent="center" mb={2}>
          <Typography
            fontSize={{ xs: 12, lg: 16 }}
            sx={{ color: 'text.contrast' }}
          >
            {translate('already_have_account')}
            {/* eslint-disable-next-line jsx-a11y/no-static-element-interactions */}
            <span
              onClick={() => openSignIn()}
              className="primary_green underline ml4"
            >
              {translate('sign_in')}
            </span>
          </Typography>
        </Box>
      </FormProvider>
    </SignUpWrapper>
  );
};

export default SignUp;
